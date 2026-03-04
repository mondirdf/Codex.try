import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <section>
      <p className="text-cyan-300">الأعمال</p>
      <h1 className="mt-2 text-3xl font-black">مشاريع مختارة</h1>
      <p className="mt-3 max-w-3xl text-slate-300">نماذج أعمال من مجالات مختلفة: الهوية البصرية، السوشال ميديا، التغليف، وواجهات التطبيقات.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
