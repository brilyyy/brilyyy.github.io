const ProjectCard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
        <div className="shrink-0">
          <a href="/demo/astro-boilerplate">
            <img
              className="h-36 w-36 hover:translate-y-1"
              src="assets/images/project-web-design.png"
              alt="Project Web Design"
              loading="lazy"
            />
          </a>
        </div>
        <div>
          <div className="flex flex-col items-center gap-y-2 md:flex-row">
            <a className="hover:text-cyan-400" href="/demo/astro-boilerplate">
              <div className="text-xl font-semibold">Project 1</div>
            </a>
            <div className="ml-3 flex gap-2">
              <div className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">
                Astro.js
              </div>
              <div className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">
                Web design
              </div>
              <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">
                Tailwind.css
              </div>
              <div className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">
                TypeScript
              </div>
            </div>
          </div>
          <p className="mt-3 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum. Nunc non posuere consectetur, justo erat semper enim, non
            hendrerit dui odio id enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
