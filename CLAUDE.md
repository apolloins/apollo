# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Working with the user

Communicate with the user in Chinese (中文) in this project.

Software not already available locally may be installed ad hoc via `nix shell nixpkgs#<package>` (or `nix develop`) rather than modifying the system — e.g. `nix shell nixpkgs#imagemagick -c magick ...` was used to crop team WeChat QR code screenshots down to just the QR card.

## Project

Marketing/informational website for Apollo Insurance (阿波罗保险公司 / Assurance Apollo), a sub-brand of AssurPV based in Brossard, Quebec, Canada, serving Chinese-speaking clients. Built with Astro + Tailwind CSS, deployed to Netlify (with a Netlify Function handling the contact form).

## Commands

- `npm run dev` — start local dev server at `localhost:4321`
- `npm run build` — build production site to `./dist/`
- `npm run preview` — preview the production build locally
- `npm run astro ...` — run Astro CLI commands (e.g. `npm run astro check` for type checking)

There is no test suite or linter configured in this project.

## Architecture

### Multilingual routing (no i18n framework)

The site is available in four languages with no use of Astro's built-in i18n routing — instead, content is duplicated into four parallel directory trees:

- `src/pages/zh/*` — Simplified Chinese (the default/primary language)
- `src/pages/zh-hant/*` — Traditional Chinese (generated from `zh` with OpenCC `s2tw`, e.g. `nix shell nixpkgs#opencc -c opencc -c s2tw.json -i in -o out`, then hand-fixed: `lang` constants, 併→並 where needed, 聯繫我們→聯絡我們)
- `src/pages/en/*` — English
- `src/pages/fr/*` — French

Each tree has the same nine pages: `index`, `about`, `services`, `team`, `claims`, `constat`, `faq`, `news`, `contact`, plus `news/[slug].astro` for individual news articles (see **News** below) and `faq/[slug].astro` for individual questions (see **FAQ** below). `src/pages/404.astro` sits outside the language trees. `src/pages/index.astro` (the site root) does a client-side redirect to `/zh/`.

**When adding, removing, or restructuring a page, the change must be replicated across all four language directories** to keep them in sync. Most pages have no shared content source — each locale's copy is written directly into its own `.astro` file. The exceptions are news, the FAQ and the joint report guide, whose pages are thin wrappers around a shared component and per-language content in `src/lib/`.

### Layouts

- `src/layouts/BaseLayout.astro` is the real layout used by every page. It takes `title`, `description`, an optional share-card `image`, and `lang` (`'zh' | 'zh-hant' | 'en' | 'fr'`) props, and contains inline per-language UI strings (nav labels, footer copy, language-switcher labels) in a `uiText`/translation-object pattern. Header nav links and the language switcher are generated from `lang` and `Astro.url.pathname`, so cross-language links are produced by swapping the `/zh-hant|zh|en|fr` path prefix rather than through routing config (`zh-hant` must be matched before `zh`). It also emits the canonical link, hreflang alternates and Open Graph tags, built from `site` in `astro.config.mjs`.
- `src/layouts/Layout.astro` is the unmodified Astro starter template — not used by any real page. Leave it alone or remove it; don't build new pages on it.

New pages/sections should follow the same pattern as existing ones: add localized strings inline (or in a small object) per page/component rather than introducing a new i18n mechanism, unless asked to.

### News (新闻动态)

News is **maintained by Claude on the user's behalf**: the user supplies the facts (often briefly, in Chinese), and Claude writes up the full item — expanding, polishing, and translating it into all four languages. There is no CMS.

**Where things live**

- Content: `src/content/news/<YYYY-MM-DD-slug>/{zh,zh-hant,en,fr}.md` — one folder per item, one Markdown file per language. Schema in `src/content.config.ts`.
- Images: `public/news/<YYYY-MM-DD-slug>/…`, referenced in frontmatter as `/news/<slug>/cover.jpg`. Resize/compress before adding (e.g. `nix shell nixpkgs#imagemagick -c magick in.jpg -resize 1600x1600\> -quality 82 cover.jpg`).
- Rendering: `src/components/NewsList.astro` (list on `/{lang}/news`), `src/components/NewsArticle.astro` (article page), `src/lib/news.ts` (loading, sorting, per-language UI strings, date formatting). Article body styles are `.news-body` in `src/styles/global.css`.
- The list page shows the "coming soon" placeholder (the `empty` slot in each `news.astro`) only while there are no published items.

**Frontmatter**

```yaml
---
title: "…"
date: 2026-10-01          # publication date; list is sorted newest first
category: company         # company (公司动态) | industry (行业资讯) | local (本地新闻)
summary: "…"              # 1–2 sentences; shown in the list and as meta description
image: /news/2026-10-01-slug/cover.jpg   # optional
imageAlt: "…"                            # optional, localized
source:                                  # optional; required for industry/local items
  name: "La Presse"
  url: "https://…"
draft: false              # true hides the item everywhere
---
```

**Rules**

- **All four languages are mandatory.** `src/lib/news.ts` fails the build if a published item is missing any language, because the flag switcher on an article page links to the same slug in every language.
- Slug: publication date + short English kebab-case, e.g. `2026-10-01-new-office-hours`. It is identical across languages and becomes the URL.
- Write `zh` first, then `zh-hant` (OpenCC `s2tw` as a starting point, then review: 聯繫我們→聯絡我們, 併/並, HK/TW wording), then natural — not literal — `en` and `fr`. Keep the translations aligned in content: same facts, headings and structure.
- Tone and terminology should match the rest of the site (e.g. the insurance terms used in `services`/`faq`/`claims`). Do not describe Apollo as serving only Chinese clients; the team serves clients in French, English, Mandarin and Cantonese.
- **Industry/local news: summarize in our own words and link to the source** (`source` field); never reprint articles or copy their images. Add a short "what this means for you" angle where relevant — that is the value we add.
- Do not invent facts, figures, dates, quotes or regulatory details. Anything missing from what the user provided that the article needs → ask, or check an authoritative source and cite it. Apollo is a partner of AssurPV, not an insurer or claims adjuster — avoid wording that implies Apollo makes coverage or claims decisions.
- Workflow per item: write the four files → `npm run build` (must pass) → commit and push (see **Publishing** under Deployment) → show the user the Chinese version and anything uncertain.

### FAQ

- Content: `src/lib/faq/{zh,zh-hant,en,fr}.ts`, one `faqGroups` array per language (answers are HTML strings). The four files hold the same questions in the same order.
- `src/lib/faq/index.ts` attaches a URL slug to each question by position (`SLUGS`), holds the UI strings, and fails the build if a language's group or question counts drift from the slug list. Slugs are public, shared URLs: never rename or reorder them. To add a question, add it at the same position in all four files and insert its slug at the matching position.
- Rendering: `src/components/FaqList.astro` (`/{lang}/faq`, accordion) and `src/components/FaqQuestion.astro` (`/{lang}/faq/<slug>`, one question per page with FAQPage JSON-LD, so a single question can be shared or found by search).

### Joint report guide (`/{lang}/constat`)

A phone-first guide to the Quebec joint accident report (Constat amiable, GAA 2023 form): what to do at the scene and what each field of the French form means. It is the target of the `/shigu` short link and of printed QR codes.

- Content: `src/lib/constat/{zh,zh-hant,en,fr}.ts` (`zh-hant` generated from `zh` with OpenCC, then hand-fixed); links and types in `src/lib/constat/index.ts`; rendering in `src/components/ConstatGuide.astro`. Keep the page static and light (no scripts, no external resources): it is read at the roadside.
- French labels must stay exactly as printed on the official form; `public/documents/constat-amiable-2023-cn.pdf` is the printable reference translation and the two must agree. The scene steps mirror the FAQ item `minor-accident-first-steps`.
- Wording is reference material, not advice. Do not add insurance facts that are not on the official form, in the reference PDF or in the FAQ.

### Contact form

The contact form (`src/pages/{lang}/contact.astro`) submits via `fetch` to `/.netlify/functions/submit-contact`, handled by `netlify/functions/submit-contact.js`. That function:

- Uses `Resend` (env var `RESEND_API_KEY`) to send two emails per submission: a localized confirmation to the submitter and a notification to `ADMIN_EMAIL` (default `info@apolloins.ca`), from `FROM_EMAIL` (default `noreply@apolloins.ca`).
- Selects email copy/subject based on the `lang` field in the POST body (`zh`/`zh-hant`/`en`/`fr`), with English as the fallback.
- All four languages' email templates and subject-line translations live inline in this one file — keep them in sync when editing the confirmation/admin templates or the subject list.

### Styling

Tailwind CSS (via `@astrojs/tailwind`) with a custom brand palette defined in `tailwind.config.mjs`: `primary` (#1F4E79), `secondary` (#FFC000), `accent` (#4472C4), `light` (#F2F2F2), `dark` (#333333). Use these tokens rather than raw hex/arbitrary colors for brand-consistent UI.

### Deployment

`netlify.toml` builds with `npm run build`, publishes `dist/`, and points Netlify Functions at `netlify/functions/`. Unknown URLs get `dist/404.html` (there is no catch-all redirect; the site has no client-side routing). `netlify.toml` defines the short links `/shigu` and `/constat` → `/zh/constat`, and `/faq` → `/zh/faq`; they are meant for print and QR codes, so keep them working. `@astrojs/sitemap` writes `sitemap-index.xml` (language pages only), referenced from `public/robots.txt`.

**Publishing** (decided 2026-10-08): finished changes are merged straight into `main` and pushed, which deploys them; Jacques reviews the live version afterwards. Do not wait for confirmation, but always tell the user what went live and list any wording that is new or uncertain so it can be reviewed. `astro.config.mjs` allows dev-server hosts `appolo.smartcubes.uk` and `apolloins.ca`.

Netlify (hosting) is managed under the `info@apolloins.ca` account: site `superb-caramel-0ef0d0`, serving `www.apolloins.ca`, auto-deploying from `apolloins/apollo` `main`. The site env vars `RESEND_API_KEY`, `ADMIN_EMAIL` and `FROM_EMAIL` live only in Netlify. Cloudflare (DNS + proxy) and Resend are under the same account; Resend sends from the verified domain `apolloins.ca` (DNS records `resend._domainkey`, `send`, `rsend`, `_dmarc` in Cloudflare), so the sender must be `@apolloins.ca`, not the former `@notifications.apolloins.ca`. The site was moved from the old Netlify account (`apolloassurance@gmail.com`, site `apolloassurance`) on 2026-10-06; the old site is kept, without a domain, as a fallback. API tokens are kept locally outside the repo (git-ignored `.secret` / `.env`), never committed.

### Git remotes

- `origin` — `apolloins/apollo` (company account, `info@apolloins.ca`). Primary; pushing `main` here deploys the site.
- `apolloassurance/apollo` (old company account) and `adamscao/apollo` (personal account) are older copies. They are not configured as remotes in clones made from `apolloins` and are no longer deploy sources.

SSH identity per account is selected through host aliases in `~/.ssh/config` (e.g. `github-info:apolloins/apollo.git`), so it must be set up once per machine.
