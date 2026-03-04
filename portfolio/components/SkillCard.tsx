type SkillCardProps = {
  name: string;
  level: string;
};

export default function SkillCard({ name, level }: SkillCardProps) {
  return (
    <article>
      <h3>{name}</h3>
      <p>Level: {level}</p>
    </article>
  );
}
