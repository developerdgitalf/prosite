import type { CSSProperties } from "react";
import "./AISMModelSection.css";

type Dimension = {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: "human" | "strategy" | "workforce" | "information" | "culture" | "technology";
};

const dimensions: Dimension[] = [
  {
    id: "human-augmentation",
    title: "AI Human Augmentation",
    description:
      "Human + AI collaboration; using AI to augment human capabilities and improve how people make decisions and perform work.",
    color: "#2aa5df",
    icon: "human",
  },
  {
    id: "strategy-management",
    title: "AI Strategy Management",
    description:
      "AI strategy and roadmap, governance, policies, ethics, ESG, AI CoE, financial management and strategic planning.",
    color: "#00b7c4",
    icon: "strategy",
  },
  {
    id: "workforce-management",
    title: "AI Workforce Management",
    description:
      "Workforce planning, roles and responsibilities, KRA/KPIs, RACI, skills, capabilities and workforce transformation.",
    color: "#00c5e8",
    icon: "workforce",
  },
  {
    id: "information-management",
    title: "AI Information Management",
    description:
      "Data governance, data quality, data security, data management, DataOps and ensuring trusted information for AI.",
    color: "#139ec4",
    icon: "information",
  },
  {
    id: "culture",
    title: "AI Culture",
    description:
      "AI-first culture, adoption, behaviour change, AI storytelling, trust and embedding AI into organisational ways of working.",
    color: "#1975dc",
    icon: "culture",
  },
  {
    id: "technology",
    title: "AI Technology",
    description:
      "AI infrastructure, cloud/hybrid environments, models, lifecycle management, capacity, cost, performance, resilience and technology governance.",
    color: "#58add2",
    icon: "technology",
  },
];

function DimensionIcon({ type }: { type: Dimension["icon"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      className="aism-model__icon-art"
      viewBox="0 0 52 52"
      aria-hidden="true"
      focusable="false"
      {...common}
    >
      {type === "human" && (
        <>
          <path d="M24 39V27c0-3 2-5 5-5s5 2 5 5v4" />
          <path d="M24 30c-4 0-6-3-6-6v-2a6 6 0 0 1 12 0" />
          <path d="M34 31c3-1 5-3 5-6 0-2-1-4-3-5" />
          <path d="M21 39h12" />
          <circle cx="18" cy="16" r="2.2" />
          <circle cx="35" cy="14" r="2.2" />
          <circle cx="16" cy="29" r="2.2" />
          <path d="M18 18v5l-2 4M35 16v4l3 3" />
        </>
      )}

      {type === "strategy" && (
        <>
          <path d="M13 14h11v10H13zM29 29h10v10H29zM29 12h10v8H29z" />
          <path d="M24 19h5M34 20v9M18.5 24v9h10" />
          <circle cx="18.5" cy="34" r="2.2" />
          <circle cx="34" cy="25" r="2" />
          <path d="M12 40h28" />
        </>
      )}

      {type === "workforce" && (
        <>
          <path d="M26 10l3 3 4-1 1 4 4 2-2 4 2 4-4 2-1 4-4-1-3 3-3-3-4 1-1-4-4-2 2-4-2-4 4-2 1-4 4 1z" />
          <circle cx="26" cy="24" r="6" />
          <path d="M26 20v4l3 2" />
          <circle cx="15" cy="13" r="1.5" />
          <circle cx="38" cy="36" r="1.5" />
        </>
      )}

      {type === "information" && (
        <>
          <path d="M16 15h15l5 5v21H16z" />
          <path d="M31 15v6h5M21 26h10M21 31h10M21 36h7" />
          <path d="M37 8l1.4 3.6L42 13l-3.6 1.4L37 18l-1.4-3.6L32 13l3.6-1.4z" />
          <path d="M13 23l1 2.5 2.5 1-2.5 1L13 30l-1-2.5-2.5-1 2.5-1z" />
        </>
      )}

      {type === "culture" && (
        <>
          <circle cx="26" cy="26" r="4" />
          <circle cx="26" cy="11" r="3" />
          <circle cx="41" cy="26" r="3" />
          <circle cx="26" cy="41" r="3" />
          <circle cx="11" cy="26" r="3" />
          <circle cx="15.5" cy="15.5" r="2.5" />
          <circle cx="36.5" cy="15.5" r="2.5" />
          <circle cx="36.5" cy="36.5" r="2.5" />
          <circle cx="15.5" cy="36.5" r="2.5" />
          <path d="M26 15v7M37 26h-7M26 37v-7M15 26h7M18 18l5 5M34 18l-5 5M34 34l-5-5M18 34l5-5" />
        </>
      )}

      {type === "technology" && (
        <>
          <rect x="9" y="21" width="31" height="15" rx="7.5" />
          <path d="M15 27h12M15 31h8" />
          <circle cx="34" cy="28" r="1.5" />
          <path d="M40 25c3-1 4-4 4-7v-4M40 36v3" />
          <circle cx="44" cy="11" r="2" />
          <circle cx="40" cy="42" r="2" />
        </>
      )}
    </svg>
  );
}

export default function AISMModelSection() {
  return (
    <section className="aism-model" aria-labelledby="aism-model-title">
      <div className="aism-model__inner">
        <div className="aism-model__intro">
          <p className="aism-model__eyebrow">THE AISM™ MODEL</p>
          <h2 id="aism-model-title" className="aism-model__heading">
            Six dimensions.
            <br />
            A smarter
            <br />
            enterprise.
          </h2>
          <p className="aism-model__summary">
            AISM™ connects the dimensions that determine whether AI can scale
            responsibly and create business value.
          </p>
        </div>

        <div className="aism-model__core-column" aria-label="AISWITCH model">
          <div className="aism-model__core-wrap">
            <div className="aism-model__core">
              <span>AISWITCH™</span>
            </div>
          </div>
        </div>

        <ul className="aism-model__dimension-list" aria-label="Six AISM dimensions">
          {dimensions.map((dimension) => (
            <li
              className="aism-model__dimension"
              key={dimension.id}
              style={{ "--dimension-color": dimension.color } as CSSProperties}
            >
              <div className="aism-model__icon-circle">
                <DimensionIcon type={dimension.icon} />
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
