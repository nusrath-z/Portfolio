export interface Skill {
  name: string;
  icon?: React.ReactNode;
}


export type SkillsByCategory = Record<string, Skill[]>;