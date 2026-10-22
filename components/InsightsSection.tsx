
import Link from "next/link";
import "./InsightsSection.css";

const insights = [
  {
    title: "AI for CXOs",
    description:
      "Perspectives for business leaders shaping AI strategy and enterprise transformation.",
    href: "/resources",
  },
  {
    title: "AI Storytelling",
    description:
      "Ideas and frameworks for communicating AI with clarity, relevance and impact.",
    href: "/resources",
  },
  {
    title: "Platform Engineering",
    description:
      "Perspectives on building and evolving platforms for the intelligent enterprise.",
    href: "/resources",
  },
];

export default function InsightsSection() {
  return (
    <section
      className="prosight-insights"
      aria-labelledby="prosight-insights-title"
    >
      <div className="prosight-insights__container">
        <header className="prosight-insights__header">
          <p className="prosight-insights__eyebrow">INSIGHTS</p>

          <h2 id="prosight-insights-title">
            Ideas for leaders navigating the intelligent enterprise.
          </h2>

          <p className="prosight-insights__intro">
            Expert perspectives, frameworks and practical guidance on AI
            strategy, adoption and transformation.
          </p>
        </header>

        <h3 className="prosight-insights__subheading">
          Explore by Perspective
        </h3>

        <div className="prosight-insights__grid">
          {insights.map((insight) => (
            <Link
              key={insight.title}
              href={insight.href}
              className="prosight-insight-card"
              aria-label={`Explore ${insight.title} insights`}
            >
              <h4>{insight.title}</h4>
              <p>{insight.description}</p>
            </Link>
          ))}
        </div>

        <div className="prosight-insights__footer">
          <Link
            href="/resources"
            className="prosight-insights__button"
          >
            <span>Explore All Insights</span>

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="m10 8 4 4-4 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
