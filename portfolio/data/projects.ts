export type Project = {
  id: number;
  title: string;
  category: 'Branding' | 'Social Media' | 'Packaging' | 'UI Design';
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Glow Beauty Identity',
    category: 'Branding',
    description: 'تصميم هوية بصرية ناعمة لعلامة عناية بالبشرة مع دليل استخدام متكامل.',
    image: '/images/project-1.svg',
  },
  {
    id: 2,
    title: 'FitFuel Campaign',
    category: 'Social Media',
    description: 'حملة سوشال ميديا شهرية تضمنت منشورات ثابتة ومتحركة بإيقاع بصري موحد.',
    image: '/images/project-2.svg',
  },
  {
    id: 3,
    title: 'Najd Coffee Packaging',
    category: 'Packaging',
    description: 'تصميم عبوات قهوة مختصة بطابع عصري مستلهم من النقوش المحلية.',
    image: '/images/project-3.svg',
  },
  {
    id: 4,
    title: 'Bloom Appointment App',
    category: 'UI Design',
    description: 'تصميم واجهات تطبيق حجز مواعيد صالونات تجميل بطريقة واضحة وسهلة الاستخدام.',
    image: '/images/project-4.svg',
  },
];
