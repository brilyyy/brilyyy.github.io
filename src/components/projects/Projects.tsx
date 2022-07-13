import ProjectCard from "./ProjectCard";

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
    image: "https://wiyata.id/img/logo.svg",
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
    image: "https://uns.ac.id/id/wp-content/uploads/Logo-UNS-New-04.png",
    url: "https://greenmetric.uns.ac.id/",
    description:
      "an application for surveying the environment of UNS. it is a web application that can be used by the civital staff.",
  },
  {
    name: "Smart Information UNS",
    technologies: ["laravel", "blade", "php", "mysql", "bootstrap"],
    image: "https://uns.ac.id/id/wp-content/uploads/Logo-UNS-New-04.png",
    url: "https://smartin.uns.ac.id/",
    description:
      "an application for collecting all university data in number. it is a web application that can be used by the civital staff.",
  },
];

const Projects = () => {
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
