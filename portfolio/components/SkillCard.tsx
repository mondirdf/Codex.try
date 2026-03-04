import type { Skill } from '@/data/skills';

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-slate-900 p-5">
      <h3 className="text-base font-extrabold text-white">{skill.name}</h3>
      <p className="mt-1 text-sm text-cyan-300">المستوى: {skill.level}</p>
      <p className="mt-2 text-sm text-slate-300">الأدوات: {skill.tools.join(' • ')}</p>
    </article>
  );
}
