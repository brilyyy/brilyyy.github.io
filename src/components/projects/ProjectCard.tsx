interface ProjectCardProps {
  name: string;
  technologies: Array<string>;
  image: string;
  description: string;
  url: string;
}

const ProjectCard = ({
  name,
  technologies,
  image,
  description,
  url,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-700 p-3 md:flex-row">
      <div className="shrink-0">
        <img
          className="h-36 w-36 hover:translate-y-1 rounded-md "
          src={image}
          alt={name}
          loading="lazy"
        />
      </div>
      <div>
        <div className="flex flex-col items-center gap-y-2 md:flex-row">
          <a className="hover:text-cyan-400" href={url} target="_blank">
            <div className="text-xl font-semibold">{name}</div>
          </a>
          <div className="ml-3 flex gap-2">
            {technologies.map((technology, index) => (
              <div
                key={index}
                className={`rounded-md px-2 py-1 text-xs font-semibold bg-blue-300 text-neutral-700`}
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
