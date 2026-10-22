
import "./EnterpriseAIComparison.css";

const enterpriseAIItems = [
  { text: "Organised adoption of AI" },
  { text: "Build AI capability" },
  { text: "Deploy AI into workflows", subitem: true },
  { text: "Improve decisions & automation" },
  { text: "Create measurable outcomes" },
  { text: "Capability foundation" },
];

const AIEnterpriseItems = [
  "Enterprise re-architected around AI",
  "Architect AI foundation",
  "Redesign business & operating model",
  "Embed AI into the enterprise",
  "Transform workforce & culture",
  "Strategic transformation",
];

export default function EnterpriseAIComparison() {
  return (
    <section
      className="enterprise-ai-comparison"
      aria-labelledby="enterprise-ai-comparison-title"
    >
      <h2
        id="enterprise-ai-comparison-title"
        className="enterprise-ai-comparison__title"
      >
        Enterprise AI vs AI Enterprise
      </h2>

      <div className="enterprise-ai-comparison__grid">
        <article className="enterprise-comparison-card enterprise-comparison-card--traditional">
          <h3>ENTERPRISE AI</h3>

          <ul>
            {enterpriseAIItems.map((item) => (
              <li
                key={item.text}
                className={
                  item.subitem
                    ? "enterprise-comparison-card__subitem"
                    : undefined
                }
              >
                {item.text}
              </li>
            ))}
          </ul>
        </article>

        <article className="enterprise-comparison-card enterprise-comparison-card--transformed">
          <h3>AI ENTERPRISES</h3>

          <ul>
            {AIEnterpriseItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
