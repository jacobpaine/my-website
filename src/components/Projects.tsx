import "../styles/Projects.css";

type SmallCard = {
  title?: string;
  description: string;
  technologies?: string[];
  demoLink?: string;
  sourceCode?: string;
  thumbnail?: string;
};

const projects: SmallCard[] = [
  {
    title: "Violin Tuner",
    description:
      "An ad-free violin tuner for the Fiddle & Pick. Optimized for mobile and desktop.",
    technologies: ["React", "Typescript"],
    demoLink: "https://finetunedfunctions.com/tuner",
    sourceCode: "https://github.com/jacobpaine/violin-tuner",
    thumbnail: "/tuner_wide.png",
  },
  {
    title: "Study Timer",
    description: "Timers with summaries for to help with practice and focus.",
    technologies: ["React", "Typescript"],
    demoLink: "https://finetunedfunctions.com/timer",
    sourceCode: "https://github.com/jacobpaine/study-timer",
    thumbnail: "",
  },
  {
    title: "Journal",
    description: "Pomodoro timers for to help with practice and focus.",
    technologies: ["React", "Typescript", "IndexedDB"],
    demoLink: "https://finetunedfunctions.com/journal",
    sourceCode: "https://github.com/jacobpaine/violin-tuner",
    thumbnail: "",
  },

  {
    title: "",
    description: "More projects forthcoming...",
    technologies: [],
    demoLink: "",
    sourceCode: "",
    thumbnail: "",
  },
];

const ProjectCard = ({
  title,
  description,
  technologies,
  demoLink,
  sourceCode,
  thumbnail,
  index,
}: SmallCard & { index: number }) => {
  return (
    <div className="project-card" key={index}>
      {thumbnail && (
        <img src={thumbnail} alt={`${title}`} className="project-thumbnail" />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-technologies">
        {technologies?.map((tech, techIndex) => (
          <span className="tech-tag" key={techIndex}>
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Live Demo
          </a>
        )}
        {sourceCode && (
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>Projects</h2>
        <div className="project-cards">
          {projects.map((project, index: number) => (
            <ProjectCard {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
