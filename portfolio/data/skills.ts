export type Skill = {
  name: string;
  level: 'متقدم' | 'احترافي';
  tools: string[];
};

export const skills: Skill[] = [
  { name: 'تصميم الهوية البصرية', level: 'احترافي', tools: ['Illustrator', 'InDesign'] },
  { name: 'تصميم محتوى السوشال ميديا', level: 'احترافي', tools: ['Photoshop', 'After Effects'] },
  { name: 'تصميم التغليف', level: 'متقدم', tools: ['Illustrator', 'Dimension'] },
  { name: 'UI Design', level: 'متقدم', tools: ['Figma', 'Photoshop'] },
];
