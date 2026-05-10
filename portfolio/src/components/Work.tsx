import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    title: "Bond Cancellation",
    category: "Import-Export Automation",
    tools: "Angular, Next.js, NestJS, Workflows",
    image: "/images/placeholder.webp",
  },
  {
    title: "E-Commerce Platform",
    category: "Retail & Shopping",
    tools: "React, Node.js, MongoDB, Stripe",
    image: "/images/placeholder.webp",
  },
  {
    title: "Finance Dashboard",
    category: "Fintech",
    tools: "Vue, Express, PostgreSQL, D3.js",
    image: "/images/placeholder.webp",
  },
  {
    title: "Healthcare Portal",
    category: "Medical Services",
    tools: "React Native, Firebase, GraphQL",
    image: "/images/placeholder.webp",
  },
  {
    title: "Real Estate Hub",
    category: "Property Management",
    tools: "Next.js, Tailwind CSS, Supabase",
    image: "/images/placeholder.webp",
  },
  {
    title: "Logistics Tracker",
    category: "Supply Chain",
    tools: "TypeScript, React, Redux, Google Maps API",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-divider"></div>

        <div className="work-carousel">
          <button className="carousel-btn left-btn" onClick={prevProject}>
            <MdKeyboardArrowLeft />
          </button>

          <div className="carousel-content">
            <div className="carousel-left">
              <div className="carousel-number-wrapper">
                <div className="carousel-indicator"></div>
                <h3>0{currentIndex + 1}</h3>
              </div>
              <div className="carousel-details">
                <h3 className="project-title">{projects[currentIndex].title}</h3>
                <p className="project-category">{projects[currentIndex].category}</p>
                <div className="tools-section">
                  <h4>TOOLS & FEATURES</h4>
                  <p className="project-tools">{projects[currentIndex].tools}</p>
                </div>
              </div>
            </div>

            <div className="carousel-right">
              <WorkImage image={projects[currentIndex].image} alt={projects[currentIndex].title} />
            </div>
          </div>

          <button className="carousel-btn right-btn" onClick={nextProject}>
            <MdKeyboardArrowRight />
          </button>
        </div>

        <div className="carousel-dots">
          {projects.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
