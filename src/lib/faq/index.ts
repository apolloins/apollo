import { faqGroups as zh } from './zh';
import { faqGroups as zhHant } from './zh-hant';
import { faqGroups as en } from './en';
import { faqGroups as fr } from './fr';

export type Lang = 'zh' | 'zh-hant' | 'en' | 'fr';

// URL slug of every question, in the order the questions appear in the
// content files (group by group). The four languages hold the same questions
// in the same order, so one list serves them all and a question keeps the
// same URL in every language. Slugs are public URLs: never rename or reorder
// them; append new questions at the end of their group in all four files and
// insert the slug at the matching position here.
const SLUGS: string[][] = [
  ['quebec-auto-insurance-structure', 'liability-only-vs-full-coverage', 'main-and-additional-coverages', 'replacement-cost-endorsement'],
  ['which-insurer-pays-after-collision', 'liability-only-own-vehicle-damage', 'how-deductibles-work'],
  ['minor-accident-first-steps', 'hit-and-run', 'choosing-a-repair-shop'],
  ['who-to-list-as-driver', 'lending-your-car', 'rental-car-insurance', 'accident-between-spouses'],
  ['impaired-driving-accident', 'claim-denial-reasons', 'refused-by-insurers', 'dashcam', 'insuring-only-one-of-several-cars', 'accident-at-dealership-or-garage', 'ontario-plated-car-in-quebec'],
  ['claims-and-premium', 'premium-factors', 'lowering-your-premium']
];

const content = { zh, 'zh-hant': zhHant, en, fr };

export interface FaqItem { slug: string; question: string; answer: string; group: number }
export interface FaqGroup { title: string; items: FaqItem[] }

// Groups of one language with slugs attached. Fails the build if a language
// has drifted from the slug list, since that would mislabel URLs.
export function getFaq(lang: Lang): FaqGroup[] {
  const groups = content[lang];
  if (groups.length !== SLUGS.length) throw new Error(`FAQ (${lang}): expected ${SLUGS.length} groups, found ${groups.length}`);
  return groups.map((g, gi) => {
    if (g.items.length !== SLUGS[gi].length) {
      throw new Error(`FAQ (${lang}) group ${gi}: expected ${SLUGS[gi].length} questions, found ${g.items.length}`);
    }
    return { title: g.title, items: g.items.map((item, i) => ({ ...item, slug: SLUGS[gi][i], group: gi })) };
  });
}

// Plain-text excerpt of an HTML answer, for meta descriptions and share cards.
export function excerpt(html: string, max = 110) {
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.length > max ? text.slice(0, max).trimEnd() + '…' : text;
}

export const faqStrings = {
  zh: {
    title: '常见问题', subtitle: '找到您关于保险的问题解答', categories: '问题分类',
    open: '单独打开此问题（方便转发）', back: '返回全部问题', related: '同类问题',
    notFoundTitle: '没有找到您的问题？',
    notFoundText: '如果您有其他问题或需要更详细的解答，请随时联系我们的客服团队。',
    contact: '联系我们',
    disclaimer: '以上为一般性说明，仅供参考，不构成保险建议。具体情况以您的保单条款及持牌经纪人的确认为准。'
  },
  'zh-hant': {
    title: '常見問題', subtitle: '找到您關於保險的問題解答', categories: '問題分類',
    open: '單獨打開此問題（方便轉發）', back: '返回全部問題', related: '同類問題',
    notFoundTitle: '沒有找到您的問題？',
    notFoundText: '如果您有其他問題或需要更詳細的解答，請隨時聯絡我們的客服團隊。',
    contact: '聯絡我們',
    disclaimer: '以上為一般性說明，僅供參考，不構成保險建議。具體情況以您的保單條款及持牌經紀人的確認為準。'
  },
  en: {
    title: 'Frequently Asked Questions', subtitle: 'Find answers to your insurance questions', categories: 'Question Categories',
    open: 'Open this question on its own page (easy to share)', back: 'Back to all questions', related: 'Related questions',
    notFoundTitle: "Didn't Find Your Question?",
    notFoundText: 'If you have other questions or need more detailed answers, please feel free to contact our customer service team.',
    contact: 'Contact Us',
    disclaimer: 'This is general information only and does not constitute insurance advice. Your policy wording and a licensed broker\'s confirmation prevail.'
  },
  fr: {
    title: 'Foire Aux Questions', subtitle: "Trouvez des réponses à vos questions sur l'assurance", categories: 'Catégories de Questions',
    open: 'Ouvrir cette question sur sa propre page (facile à partager)', back: 'Retour à toutes les questions', related: 'Questions connexes',
    notFoundTitle: "Vous n'avez pas trouvé votre question?",
    notFoundText: "Si vous avez d'autres questions ou besoin de réponses plus détaillées, n'hésitez pas à contacter notre équipe de service client.",
    contact: 'Contactez-nous',
    disclaimer: "Ces renseignements sont de nature générale et ne constituent pas un conseil en assurance. Le libellé de votre police et la confirmation d'un courtier certifié prévalent."
  }
} as const;
