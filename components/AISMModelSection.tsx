
import Image from "next/image";
import type { CSSProperties } from "react";
import "./AISMModelSection.css";

type Dimension = {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: string;
};

const dimensions: Dimension[] = [
  {
    id: "human-augmentation",
    title: "AI Human Augmentation",
    description:
      "Human + AI collaboration; using AI to augment human capabilities and improve how people make decisions and perform work.",
    color: "#2aa5df",
    icon: "AI-switch-1",
  },
  {
    id: "strategy-management",
    title: "AI Strategy Management",
    description:
      "AI strategy and roadmap, governance, policies, ethics, ESG, AI CoE, financial management and strategic planning.",
    color: "#00b7c4",
    icon: "AI-switch-2",
  },
  {
    id: "workforce-management",
    title: "AI Workforce Management",
    description:
      "Workforce planning, roles and responsibilities, KRA/KPIs, RACI, skills, capabilities and workforce transformation.",
    color: "#00c5e8",
    icon: "AI-switch-3",
  },
  {
    id: "information-management",
    title: "AI Information Management",
    description:
      "Data governance, data quality, data security, data management, DataOps and ensuring trusted information for AI.",
    color: "#139ec4",
    icon: "AI-switch-4",
  },
  {
    id: "culture",
    title: "AI Culture",
    description:
      "AI-first culture, adoption, behaviour change, AI storytelling, trust and embedding AI into organisational ways of working.",
    color: "#1975dc",
    icon: "AI-switch-5",
  },
  {
    id: "technology",
    title: "AI Technology",
    description:
      "AI infrastructure, cloud/hybrid environments, models, lifecycle management, capacity, cost, performance, resilience and technology governance.",
    color: "#58add2",
    icon: "AI-switch-6",
  },
];

export default function AISMModelSection() {
  return (
    <section
      className="aism-model"
      aria-labelledby="aism-model-title"
    >
      <div className="aism-model__inner">
        <div className="aism-model__intro">
          <p className="aism-model__eyebrow">
            THE AISM™ MODEL
          </p>

          <h2
            id="aism-model-title"
            className="aism-model__heading"
          >
            Six dimensions.
            <br />
            A smarter
            <br />
            enterprise.
          </h2>

          <p className="aism-model__summary">
            AISM™ connects the dimensions that determine whether AI
            can scale responsibly and create business value.
          </p>
        </div>

        <div
          className="aism-model__core-column"
          aria-label="AISWITCH model"
        >
          <div className="aism-model__core-wrap">
            <div className="aism-model__core">
              <span>AISWITCH™</span>
            </div>
          </div>
        </div>

        <ul
          className="aism-model__dimension-list"
          aria-label="Six AISM dimensions"
        >
          {dimensions.map((dimension) => (
            <li
              className="aism-model__dimension"
              key={dimension.id}
              style={
                {
                  "--dimension-color": dimension.color,
                } as CSSProperties
              }
            >
              <div className="aism-model__icon-circle">
                <Image
             src={`/images/icons/${dimension.icon}.svg`}
                  alt=""
                  width={52}
                  height={52}
                  className="aism-model__icon-image"
                  aria-hidden="true"
                  unoptimized
                />
              </div>

              <div className="aism-model__dimension-copy">
                <h3>{dimension.title}</h3>
                <p>{dimension.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
