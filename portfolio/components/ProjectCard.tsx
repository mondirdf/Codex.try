import type { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-md shadow-black/20">
      <div className="mb-3 inline-block rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-bold text-cyan-200">
        {project.category}
      </div>
      <h3 className="mb-2 text-lg font-bold text-white">{project.title}</h3>
      <p className="text-sm leading-7 text-slate-300">{project.description}</p>
    </article>
  );
}
