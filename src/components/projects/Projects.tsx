import ProjectCard from "./ProjectCard";

interface Project {
  name: string;
  technologies: string[];
  image: string;
  description: string;
}

const data: Array<Project> = await fetch(
  "https://brilyyy.github.io/data/projects.json"
).then((res) => res.json());

const Projects = () => {
  return data.map((project, index) => <ProjectCard key={index} />);
};

export default Projects;
