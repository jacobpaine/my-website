import "../styles/Resume.css";

export default function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="resume-content">
        <h2>Resume</h2>
        <p>
          Download my{" "}
          <a href="/resume.pdf" className="resume-link">
            resume
          </a>
          .
        </p>
        <ul>
          <li>
            <strong>Experience:</strong>
            <ul>
              <li>
                <strong> Senior Engineer:</strong> Vanderbilt University -
                Peabody (Sept 2024 – Present)
                <ul>
                  <li>
                    Transitioning a React Native app to a PWA, improving
                    performance, increasing accessibility compliance to WCAG
                    standards, and enhancing maintainability while addressing
                    architectural flaws.
                  </li>
                </ul>
              </li>
              <li>
                <strong> Software Engineer:</strong> Asurion (Oct 2020 – Sept
                2024)
                <ul>
                  <li>
                    Designed and implemented interactive dashboards for call
                    center platforms.
                  </li>
                  <li>
                    Engineered socket-based systems for real-time feedback with
                    ML models.
                  </li>
                  <li>
                    Enhanced internal education platform features, impacting
                    tens of thousands of employees.
                  </li>
                </ul>
              </li>
              <li>
                <strong>JavaScript Developer:</strong> W. Capra Consulting Group
                (Feb 2019 – Aug 2019)
                <ul>
                  <li>
                    Built and maintained frontend and backend credit card
                    services using React, Node.js, and AWS.
                  </li>
                  <li>
                    Developed a monitoring system to alert management about
                    critical infrastructure issues.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Assistant Teacher:</strong> Nashville Software School
                (July 2020 – Dec 2020)
                <ul>
                  <li>
                    Mentored dozens of students in foundational development
                    skills including JavaScript, CSS, and React.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Education:</strong>
            <ul>
              <li>
                <strong>Master’s of Education:</strong> Vanderbilt University
                <ul>
                  <li>Emphasis: Digital Learning Environment Design</li>
                </ul>
              </li>
              <li>
                <strong>Bachelor’s in Philosophy:</strong> Belmont University
                <ul>
                  <li>Emphasis: East-West Comparative Ethics</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
