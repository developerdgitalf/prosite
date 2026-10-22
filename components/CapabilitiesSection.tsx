
import "./CapabilitiesSection.css";

const capabilities = [
  {
    title: "AI Strategy",
    description:
      "Define the strategic direction, priorities and roadmap for enterprise AI.",
  },
  {
    title: "AI Practice",
    description:
      "Establish the practices, operating structures and capabilities required to manage AI at scale.",
  },
  {
    title: "AI Engineering Capabilities & Use Case Pipelines",
    description:
      "Build the engineering capabilities and prioritised pipelines required to move AI from concept to execution.",
  },
  {
    title: "AI Technology Management & GRC",
    description:
      "Manage AI technology, infrastructure, risk, governance and lifecycle requirements.",
  },
  {
    title: "AI CoE Structure",
    description:
      "Design and establish the structures required to coordinate enterprise AI capabilities and execution.",
  },
  {
    title: "AI Investment Centers / Innovation Center & Roadmap",
    description:
      "Create the structures and roadmaps required to align AI investment with strategic priorities.",
  },
  {
    title: "AI Innovation & Ecosystems Funds",
    description:
      "Build mechanisms to support AI innovation, experimentation and ecosystem collaboration.",
  },
  {
    title: "AI Data Engineering Practices",
    description:
      "Establish data engineering practices that support reliable and scalable AI.",
  },
  {
    title: "AI Adoption@Scale",
    description:
      "Embed AI into workflows, teams and organisational ways of working.",
  },
  {
    title: "AI ROI & Metrics Measurements",
    description:
      "Define and measure the metrics required to connect AI initiatives with business outcomes.",
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
          <h2 id="prosight-capabilities-title">
            End-to-end capabilities for your AI journey.
          </h2>

          <p>
            PROSIGHT™ brings together the capabilities required to build,
            manage and scale enterprise AI.
          </p>
        </header>

        <h3 className="prosight-capabilities__subheading">
          Our Capabilities
        </h3>

        <div className="prosight-capabilities__grid">
          {capabilities.map((capability, index) => (
            <article
              className="prosight-capability-card"
              key={capability.title}
            >
              <div className="prosight-capability-card__content">
                <h4>{capability.title}</h4>
                <p>{capability.description}</p>
              </div>

              {/* Reserved for your future card image */}
              <div
                className="prosight-capability-card__image"
                aria-label={`Image placeholder for ${capability.title}`}
                role="img"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
