import { constat as zh } from './zh';
import { constat as zhHant } from './zh-hant';
import { constat as en } from './en';
import { constat as fr } from './fr';

export type Lang = 'zh' | 'zh-hant' | 'en' | 'fr';

export interface ConstatField { fr: string; local?: string; hint?: string }
export interface ConstatBlock { fr?: string; local?: string; fields: ConstatField[] }
export interface ConstatSection { fr: string; local: string; note: string; blocks: ConstatBlock[] }
export type ConstatContent = Omit<typeof zh, 'sections'> & { sections: ConstatSection[] };

const content: Record<Lang, ConstatContent> = { zh, 'zh-hant': zhHant, en, fr };
export const getConstat = (lang: Lang) => content[lang];

// External resources shared by all languages
export const constatLinks = {
  onlineFr: 'https://infoassurance.ca/constat-amiable/',
  onlineEn: 'https://infoassurance.ca/en/joint-report',
  blankFr: 'https://gaa.qc.ca/media/140522/gaa-formulaire-constat-amiable-2023-fra-web.pdf',
  referenceCn: '/documents/constat-amiable-2023-cn.pdf',
  phone: '+15146015585'
};
