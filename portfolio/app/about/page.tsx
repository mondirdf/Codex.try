import SkillCard from '@/components/SkillCard';
import { skills } from '@/data/skills';

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-cyan-300">من أنا</p>
        <h1 className="mt-2 text-3xl font-black">ليان — مصممة جرافيك بخبرة +4 سنوات</h1>
        <p className="mt-4 max-w-3xl leading-8 text-slate-300">
          أؤمن أن التصميم ليس شكلًا جميلًا فقط، بل وسيلة اتصال فعالة تؤثر على قرار الشراء وتعزز مكانة العلامة. أعمل مع المشاريع الناشئة والشركات الصغيرة لبناء حضور بصري متماسك وقابل للنمو.
        </p>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-extrabold">خبراتي الأساسية</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
