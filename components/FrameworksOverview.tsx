import type { CSSProperties } from "react";
import Link from "next/link";
import "./FrameworksOverview.css";

type Framework = {
  id: string;
  letter: string;
  name: string;
  title: string;
  description: string;
  accent: string;
};

const frameworks: Framework[] = [
  {
    id: "greai",
    letter: "A",
    name: "GREAI™",
    title: "Framework for Developing and Deploying AI Responsibly",
    description:
      "A framework focused on Green, Responsible and Ethical AI engineering across the AI lifecycle.",
    accent: "#08b9c1",
  },
  {
    id: "aiswitch",
    letter: "B",
    name: "AISWITCH™",
    title: "Comprehensive AI Practice Maturity Assessment",
    description:
      "A maturity assessment focused on evaluating AI capabilities across People, Process, Tools and Outcomes.",
    accent: "#10a8c9",
  },
  {
    id: "chip2experience2outcome",
    letter: "C",
    name: "CHIP2EXPERIENCE 2OUTCOME™",
    title: "Intelligent Enterprise Fabric Architecture",
    description:
      "An architecture connecting technology capabilities to user experiences and business outcomes.",
    accent: "#00c9df",
  },
  {
    id: "aistate",
    letter: "D",
    name: "AISTATE™",
    title: "Industry-agnostic AI Practice & Governance Framework",
    description:
      "A framework for AI practice assessment, benchmarking, strategic planning and roadmap development.",
    accent: "#2da8df",
  },
];

export default function FrameworksOverview() {
  return (
    <section
      className="frameworks-overview"
      aria-labelledby="frameworks-overview-title"
    >
      <div className="frameworks-overview__container">
        <header className="frameworks-overview__header">
          <h2 id="frameworks-overview-title">
            Proprietary Intelligence. Prescriptive Frameworks.
          </h2>

          <p className="frameworks-overview__subtitle">
            Frameworks that turn AI ambition into enterprise intelligence.
          </p>

          <p className="frameworks-overview__intro">
            Our expert-built frameworks bring structure to the complexity
            of enterprise AI — helping organisations assess, architect,
            govern and scale.
          </p>
        </header>

        <div className="frameworks-overview__grid">
          {frameworks.map((framework) => (
            <article
              className="framework-card"
              key={framework.id}
              style={
                {
                  "--framework-accent": framework.accent,
                } as CSSProperties
              }
            >
              <div
                className="framework-card__visual"
                aria-hidden="true"
              >
                <div className="framework-card__badge">
                  {framework.letter}
                </div>

                <span className="framework-card__stem" />
                <span className="framework-card__rule" />
              </div>

              <div className="framework-card__content">
                <p className="framework-card__name">
                  {framework.name}
                </p>

                <h3>{framework.title}</h3>

                <p className="framework-card__description">
                  {framework.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      

<div className="frameworks-overview__action">
  <a
    href="/frameworks"
    className="frameworks-overview__button"
    aria-label="Explore all PROSIGHT frameworks"
  >
    <span>Explore All Frameworks</span>

    <span className="frameworks-overview__button-icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M10 8L14 12L10 16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </a>
</div>


      </div>
    </section>
  );
}