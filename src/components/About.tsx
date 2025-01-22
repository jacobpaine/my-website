import "../styles/About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm a passionate Software Engineer that crafts modern,
          scalable applications. My expertise includes working with           <span className="highlight-tech">React</span>, <span className="highlight-tech">Typescript</span>, <span className="highlight-tech">AWS</span>, <span className="highlight-tech">Node.js</span>, <span className="highlight-tech">MySQL</span>, and <span className="highlight-tech">PostgreSQL</span>
          <span> </span>to build exceptional user experiences.
        </p>
        <p>
          When I’m not coding, I enjoy mentoring aspiring developers, exploring
          new technologies, and contributing to open-source projects.
        </p>
      </div>
    </section>
  );
}
