
import Link from "next/link";
import "./InsightsSection.css";

type Insight = {
  id: string;
  category: string;
  title: string;
  description: string;
  theme: "light" | "blue" | "white";
  icon: "leadership" | "communication" | "engineering";
  href: string;
};

const insights: Insight[] = [
  {
    id: "ai-for-cxos",
    category: "Leadership",
    title: "AI for CXOs",
    description:
      "Perspectives for business leaders shaping AI strategy and enterprise transformation.",
    theme: "light",
    icon: "leadership",
    href: "/insights?category=leadership",
  },
  {
    id: "ai-storytelling",
    category: "Communication",
    title: "AI Storytelling",
    description:
      "Ideas and frameworks for communicating AI with clarity, relevance and impact.",
    theme: "blue",
    icon: "communication",
    href: "/insights?category=storytelling",
  },
  {
    id: "platform-engineering",
    category: "Engineering",
    title: "Platform Engineering",
    description:
      "Perspectives on building and evolving platforms for the intelligent enterprise.",
    theme: "white",
    icon: "engineering",
    href: "/insights?category=engineering",
  },
];

function InsightIcon({ type }: { type: Insight["icon"] }) {
  if (type === "leadership") {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="14" r="6" />
        <circle cx="10" cy="19" r="4.5" />
        <circle cx="38" cy="19" r="4.5" />
        <path d="M13 36v-4a11 11 0 0 1 22 0v4H13Z" />
        <path d="M3 35v-3a7 7 0 0 1 9-6.7M45 35v-3a7 7 0 0 0-9-6.7" />
      </svg>
    );
  }

  if (type === "communication") {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M8 11h32a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H22l-10 6v-6H8a4 4 0 0 1-4-4V15a4 4 0 0 1 4-4Z" />
        <circle cx="16" cy="24" r="1.5" />
        <circle cx="24" cy="24" r="1.5" />
        <circle cx="32" cy="24" r="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="m24 5 19 10-19 10L5 15 24 5Z" />
      <path d="m7 23 17 9 17-9" />
      <path d="m7 31 17 10 17-10" />
    </svg>
  );
}

/* Circular chevron icon matching your reference button */

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m10 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


export default function InsightsSection() {
  return (
    <section
      className="prosight-insights"
      aria-labelledby="prosight-insights-title"
    >
      <div className="prosight-insights__container">
        <header className="prosight-insights__header">
          <div className="prosight-insights__heading">
            <p className="prosight-insights__eyebrow">
              <span aria-hidden="true" />
              INSIGHTS &amp; PERSPECTIVES
            </p>

            <h2 id="prosight-insights-title">
              Ideas that shape the
              <br className="prosight-insights__desktop-break" />
              intelligent enterprise.
            </h2>
          </div>

          <div className="prosight-insights__intro">
            <p>
              Expert perspectives, practical frameworks and
              emerging ideas for leaders navigating enterprise AI.
            </p>

            <span
              className="prosight-insights__intro-line"
              aria-hidden="true"
            />
          </div>
        </header>

        <div className="prosight-insights__section-heading">
          <h3>Explore by perspective</h3>
        </div>

        <div className="prosight-insights__grid">
          {insights.map((insight) => (
            <article
              key={insight.id}
              className={`insights-card insights-card--${insight.theme}`}
            >
              <div className="insights-card__top">
                <div className="insights-card__icon">
                  <InsightIcon type={insight.icon} />
                </div>

                <span className="insights-card__category">
                  {insight.category}
                </span>
              </div>

              <div className="insights-card__content">
                <h4>{insight.title}</h4>
                <p>{insight.description}</p>
              </div>

              <Link
                className="insights-card__link"
                href={insight.href}
                aria-label={`Explore ${insight.title}`}
              >
                <span>Explore perspective</span>

                <span className="insights-card__arrow">
                  <ArrowIcon />
                </span>
              </Link>
            </article>
          ))}
        </div>

        <footer className="prosight-insights__footer">
          <Link
            className="prosight-insights__button"
            href="/insights"
          >
            <span>Explore all insights</span>

            <span className="prosight-insights__button-arrow">
              <ArrowIcon />
            </span>
          </Link>
        </footer>
      </div>
    </section>
  );
}
