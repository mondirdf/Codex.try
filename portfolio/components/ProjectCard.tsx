type ProjectCardProps = {
  title: string;
  description: string;
  url: string;
};

export default function ProjectCard({ title, description, url }: ProjectCardProps) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noreferrer">
        View Project
      </a>
    </article>
  );
}
