
import "./EnterpriseAIDilemma.css";

type CardIconName = "governance" | "skills" | "roi" | "data";

const gapCards: {
  title: string;
  description: string;
  icon: CardIconName;
  className: string;
}[] = [
  {
    title: "No Governance",
    description:
      "AI initiatives can scale faster than the governance structures required to manage them responsibly.",
    icon: "governance",
    className: "enterprise-gap-card--governance",
  },
  {
    title: "Skill Gaps",
    description:
      "Organisations need the right capabilities, roles and operating structures to turn AI investments into sustained impact.",
    icon: "skills",
    className: "enterprise-gap-card--skills",
  },
  {
    title: "Unclear ROI",
    description:
      "AI investment needs clear metrics, accountability and a connection to measurable business outcomes.",
    icon: "roi",
    className: "enterprise-gap-card--roi",
  },
  {
    title: "Data & Information Challenges",
    description:
      "AI outcomes depend on trusted, governed and accessible information.",
    icon: "data",
    className: "enterprise-gap-card--data",
  },
];

function GapIcon({ name }: { name: CardIconName }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "governance":
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true" {...common}>
          <path d="M4 14 20 4 36 14H4Z" />
          <path d="M6 16H34M5 33H35M3 36H37" />
          <path d="M9 16V31M14 16V31M26 16V31M31 16V31" />
          <path d="M7 31H16M24 31H33" />
          <circle cx="20" cy="10" r="1.5" />
        </svg>
      );

    case "skills":
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true" {...common}>
          <path d="m6 5 6 1 4 5-5 5-5-4-1-6Z" />
          <path d="m11 16 15 15 5-5-15-15" />
          <path d="m20 10 7-7a6 6 0 0 1 8 8l-7 7" />
          <path d="m5 35 9-3-6-6-3 9Z" />
          <path d="m8 26 20-20" />
          <path d="m30 28 4 4a4 4 0 0 1-6 6l-5-5" />
        </svg>
      );

    case "roi":
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true" {...common}>
          <path d="M8 3H25L34 12V23H8Z" />
          <path d="M25 3V12H34M12 17H30V28H12Z" />
          <path d="M15 20V25M18 20V25M21 20V25M24 20V25" />
          <path d="M8 28H34V37H8Z" />
          <path d="M12 32H30M12 35H26" />
        </svg>
      );

    case "data":
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true" {...common}>
          <ellipse cx="17" cy="7" rx="13" ry="4" />
          <path d="M4 7V27C4 29 10 31 17 31C20 31 23 30.5 26 29.5" />
          <path d="M30 7V22M4 17C4 19 10 21 17 21C22 21 26 20 29 19" />
          <rect x="25" y="25" width="5" height="12" rx="1" />
          <rect x="33" y="20" width="4" height="17" rx="1" />
        </svg>
      );
  }
}

export default function EnterpriseAIDilemma() {
  return (
    <section
      className="enterprise-ai-dilemma"
      aria-labelledby="enterprise-ai-dilemma-title"
    >
      <div className="enterprise-ai-dilemma__container">
        <header className="enterprise-ai-dilemma__header">
          <p className="enterprise-ai-dilemma__eyebrow">
            The Enterprise AI Dilemma
          </p>

          <h2
            id="enterprise-ai-dilemma-title"
            className="enterprise-ai-dilemma__title"
          >
            Most enterprises are scaling AI access.
            <br className="enterprise-ai-dilemma__desktop-break" />
            Not AI outcomes.
          </h2>

          <p className="enterprise-ai-dilemma__lead">
            Most enterprises are scaling AI access. Not AI outcomes.
          </p>

          <p className="enterprise-ai-dilemma__description">
            AI investments are growing, but technology alone doesn’t create
            enterprise value. Without the right practices, governance and
            operating model, AI initiatives often struggle to scale and
            deliver measurable impact.
          </p>
        </header>

        <h3 className="enterprise-ai-dilemma__subheading">
          The Enterprise AI Gap
        </h3>

        <div className="enterprise-ai-gap-grid">
          {gapCards.map((card) => (
            <article
              key={card.icon}
              className={`enterprise-gap-card ${card.className}`}
            >
              <div className="enterprise-gap-card__content">
                <div className="enterprise-gap-card__icon">
                  <GapIcon name={card.icon} />
                </div>

                <h4 className="enterprise-gap-card__title">
                  {card.title}
                </h4>

                <p className="enterprise-gap-card__description">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
