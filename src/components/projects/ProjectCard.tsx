import type { FunctionalComponent } from "preact";
import { h } from "preact";

interface ProjectCardProps {
  name: string;
  technologies: Array<string>;
  image: string;
  description: string;
  url: string;
}

const ProjectCard: FunctionalComponent<ProjectCardProps> = ({
  name,
  technologies,
  image,
  description,
  url,
}) => {
  return (
    <div className="flex flex-col items-center gap-x-8 rounded-md bg-zinc-600 p-3 md:flex-row">
      <div className="shrink-0">
        <div className="w-36 h-36 flex items-center">
          <img
            className="w-full hover:translate-y-1 rounded-md "
            src={image}
            alt={name}
            loading="lazy"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center gap-y-2 md:flex-row">
          <a
            className="hover:text-cyan-400 hover:translate-y-1"
            href={url}
            target="_blank"
          >
            <div className="text-xl font-semibold">{name}</div>
          </a>
          <div className="ml-3 flex flex-col w-full sm:w-auto sm:flex-row gap-2">
            {technologies.map((technology, index) => (
              <div
                key={index}
                className={`rounded-md px-2 py-1 text-xs font-semibold bg-emerald-300 text-neutral-700`}
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
