import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>
      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            url={project.url}
          />
        ))}
      </div>
    </main>
  );
}
