import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Student</h4>
                <h5>COMSATS University Islamabad</h5>
              </div>
              <h3>2022-2026</h3>
            </div>
            <p>
              Started BS Software Engineering, diving deep into Data Structures, Algorithms, OOP, and core programming with C++ and Python.            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open Source Contributor</h4>
                <h5>GitHub Community</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Contributed to open-source React Native and Flutter repositories on GitHub, improving UI components, fixing reported issues, and collaborating via pull requests and version control workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Freelance / Personal Projects</h5>
              </div>
              <h3>2025 - NOW</h3>
            </div>
            <p>
              Building cross-platform mobile and web applications using React Native, Flutter, and Node.js. Focused on delivering clean, performant, and user-centric digital products.            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
