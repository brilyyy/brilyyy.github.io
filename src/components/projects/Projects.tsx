import ProjectCard from "./ProjectCard";
import type { FunctionalComponent } from "preact";
import { h } from "preact";

interface Project {
  name: string;
  technologies: Array<string>;
  image: string;
  description: string;
  url: string;
}

const data: Array<Project> = [
  {
    name: "Wiyata Academy",
    technologies: ["react", "typescript", "bootstrap", "react-query"],
    image: "/img/projects/wiyata.png",
    url: "https://wiyata.id",
    description:
      "a online learning platform for everyone. learn from the best teachers in the world.",
  },
  {
    name: "Greenmetric UNS",
    technologies: [
      "react",
      "typescript",
      "bootstrap",
      "laravel",
      "inertia-js",
      "php",
    ],
    image: "/img/projects/uns.png",
    url: "https://greenmetric.uns.ac.id/",
    description:
      "an application for surveying the environment of UNS. it is a web application that can be used by the civital staff.",
  },
  {
    name: "Smart Information UNS",
    technologies: ["laravel", "blade", "php", "mysql", "bootstrap"],
    image: "/img/projects/smartin.png",
    url: "https://smartin.uns.ac.id/",
    description:
      "an application for collecting all university data in number. it is a web application that can be used by the civital staff.",
  },
];

const Projects: FunctionalComponent = () => {
  return (
    <div className="flex flex-col gap-6">
      {data.map((project, i) => (
        <ProjectCard
          // @ts-ignore
          key={i}
          name={project.name}
          technologies={project.technologies}
          image={project.image}
          description={project.description}
          url={project.url}
        />
      ))}
    </div>
  );
};

export default Projects;
