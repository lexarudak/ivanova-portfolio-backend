import { FILTERS } from './constants';

export type WorkCardData = {
  id: string;
  title: string;
  year: string;
  image: string;
  filters: Array<FILTERS>;
};

export type Block = {
  id: string;
  text?: string[];
  images?: string[];
};

export type ExperienceData = {
  title: string;
  location: string;
  position: string;
  period: string;

  time?: string;
  workType?: string;
  achievements?: string[];
};

export type SkillsData = {
  advanced: string[];
  intermediate: string[];
  novice: string[];
};
