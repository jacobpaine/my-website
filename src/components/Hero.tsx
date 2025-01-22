import Typewriter from "./Typewriter";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm{" "}
          <Typewriter
            texts={["Jacob.", "a Developer."]}
            loop={false}
                  />
                </h1>
        <p>
          <Typewriter
            texts={["Let's build something amazing."]}
            typingSpeed={175}
            deletingSpeed={150}
            delayBetweenPhrases={1500}
            loop={false}
          />
        </p>
        <a href="#projects" className="btn">
          View My Work
        </a>
      </div>
    </section>
  );
}
