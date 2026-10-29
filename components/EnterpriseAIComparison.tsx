
import "./EnterpriseAIComparison.css";

const enterpriseAI = [
  "Organised adoption of AI",
  "Build AI capability",
  "Deploy AI into workflows",
  "Improve decisions & automation",
  "Create measurable outcomes",
  "Capability foundation",
];

const aiEnterprise = [
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
      <div className="enterprise-ai-comparison__container">
        <header className="enterprise-ai-comparison__header">
          <h2
            id="enterprise-ai-comparison-title"
            className="enterprise-ai-comparison__title"
          >
            Enterprise AI vs AI Enterprise
          </h2>
        </header>

        <div className="enterprise-ai-comparison__grid">
          <article className="enterprise-comparison-card enterprise-comparison-card--traditional">
            <h3>ENTERPRISE AI</h3>

            <ul>
              {enterpriseAI.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="enterprise-comparison-card enterprise-comparison-card--transformed">
            <h3>AI ENTERPRISES</h3>

            <ul>
              {aiEnterprise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
