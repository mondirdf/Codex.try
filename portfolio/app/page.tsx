import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import SkillCard from '@/components/SkillCard';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-violet-900/40 to-slate-900 p-8">
        <p className="mb-2 font-bold text-cyan-300">مصممة جرافيك مستقلة</p>
        <h1 className="text-3xl font-black leading-tight md:text-5xl">أصنع هوية بصرية تُبرز علامتك وتزيد ثقة عملائك</h1>
        <p className="mt-4 max-w-2xl leading-8 text-slate-300">
          من الشعار إلى التغليف ومحتوى السوشال ميديا، أساعدك على الظهور بصورة احترافية متسقة في كل نقطة تواصل.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/projects" className="rounded-full bg-violet-500 px-5 py-2 font-bold text-white">
            استعراض الأعمال
          </Link>
          <Link href="/contact" className="rounded-full border border-white/30 px-5 py-2 font-bold text-white">
            اطلب مشروعك
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold">أبرز المشاريع</h2>
          <Link href="/projects" className="text-sm font-bold text-cyan-300">
            عرض الكل ←
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-extrabold">المهارات</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
