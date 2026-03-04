import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import { skills } from "../data/skills";
import { projects } from "../data/projects";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <section>
        <h1>Welcome to My Portfolio</h1>
        <p>This is the home page.</p>
      </section>

      <section>
        <h2>Featured Skills</h2>
        <div>
          {skills.slice(0, 3).map((skill) => (
            <SkillCard key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </section>

      <section>
        <h2>Featured Projects</h2>
        <div>
          {projects.slice(0, 2).map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
