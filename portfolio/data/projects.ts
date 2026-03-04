export type Project = {
  id: number;
  title: string;
  description: string;
  url: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js.",
    url: "https://example.com/portfolio",
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A full-stack productivity app.",
    url: "https://example.com/tasks",
  },
  {
    id: 3,
    title: "E-commerce Store",
    description: "A modern online store with cart and checkout.",
    url: "https://example.com/store",
  },
];
