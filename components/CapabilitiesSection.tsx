
import Image from "next/image";
import "./CapabilitiesSection.css";

type Capability = {
  title: string;
  description: string;
  image: string;
  theme: "light" | "blue" | "purple";
};

const capabilities: Capability[] = [
  {
    title: "AI Strategy",
    description:
      "Define the strategic direction, priorities and roadmap for enterprise AI.",
    image: "image1.jpg",
    theme: "light",
  },
  {
    title: "AI Practice",
    description:
      "Establish the practices, operating structures and capabilities required to manage AI at scale.",
    image: "image2.jpg",
    theme: "blue",
  },
  {
    title: "AI Engineering Capabilities & Use Case Pipelines",
    description:
      "Build the engineering capabilities and prioritised pipelines required to move AI from concept to execution.",
    image: "image3.jpg",
    theme: "light",
  },
  {
    title: "AI Technology Management & GRC",
    description:
      "Manage AI technology, infrastructure, risk, governance and lifecycle requirements.",
    image: "image4.jpg",
    theme: "purple",
  },
  {
    title: "AI CoE Structure",
    description:
      "Design and establish the structures required to coordinate enterprise AI capabilities and execution.",
    image: "image5.jpg",
    theme: "light",
  },
  {
    title: "AI Investment Centers / Innovation Center & Roadmap",
    description:
      "Create the structures and roadmaps required to align AI investment with strategic priorities.",
    image: "image6.jpg",
    theme: "blue",
  },
  {
    title: "AI Innovation & Ecosystems Funds",
    description:
      "Build mechanisms to support AI innovation, experimentation and ecosystem collaboration.",
    image: "image7.jpg",
    theme: "purple",
  },
  {
    title: "AI Data Engineering Practices",
    description:
      "Establish data engineering practices that support reliable and scalable AI.",
    image: "image8.jpg",
    theme: "light",
  },
  {
    title: "AI Adoption@Scale",
    description:
      "Embed AI into workflows, teams and organisational ways of working.",
    image: "image9.jpg",
    theme: "blue",
  },
  {
    title: "AI ROI & Metrics Measurements",
    description:
      "Define and measure the metrics required to connect AI initiatives with business outcomes.",
    image: "image10.jpg",
    theme: "purple",
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      className="prosight-capabilities"
      aria-labelledby="prosight-capabilities-title"
    >
      <div className="prosight-capabilities__container">
        <header className="prosight-capabilities__header">
          <p className="prosight-capabilities__eyebrow">
            PROSIGHT™ AI SERVICE MANAGEMENT
          </p>

          <h2 id="prosight-capabilities-title">
            End-to-end capabilities for your AI journey.
          </h2>

          <p className="prosight-capabilities__description">
            PROSIGHT™ brings together the capabilities required
            to build, manage and scale enterprise AI.
          </p>
        </header>

        <div className="prosight-capabilities__subheading">
          <h3>Our Capabilities</h3>
          <p>Ten capabilities. One connected AI journey.</p>
        </div>

        <div className="prosight-capabilities__grid">
          {capabilities.map((capability, index) => (
            <article
              key={capability.title}
              className={`prosight-capability-card prosight-capability-card--${capability.theme}`}
            >
              <div className="prosight-capability-card__content">
                <div className="prosight-capability-card__number">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="prosight-capability-card__line"
                    aria-hidden="true"
                  />
                </div>

                <h4>{capability.title}</h4>

                <p>{capability.description}</p>
              </div>

              <div className="prosight-capability-card__visual">
                <Image
                  src={`/images/capabilities/${capability.image}`}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1599px) 25vw, 20vw"
                  className="prosight-capability-card__image"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
