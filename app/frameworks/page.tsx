
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import "./frameworks.css";

const frameworks = [
  {
    id: "aiswitch",
    name: "DIGITALFABRIC® AISWITCH™",
    subtitle: "",
    description:
      "DIGITALFABRIC® AISWITCH™ is an industry-agnostic AI practice governance framework that helps enterprises with AI practice assessment, benchmarking, strategic planning and a roadmap.",
    imageSide: "right",
    cta: "Explore more",
    href: "/contact",
  },
  {
    id: "aistate",
    name: "DIGITALFABRIC® AISTATE™",
    subtitle: "AI Practice Maturity Assessment",
    description:
      "AISTATE™ AI Practice Maturity Assessment service offering provides a comprehensive evaluation of an organization's AI capabilities across key dimensions, including People, Process, Tools, and Outcomes (Metrics). The assessment focuses on five key processes within the AI Strategy module and spans six critical modes, collectively referred to as AI SWITCH.",
    imageSide: "left",
    cta: "Explore more",
    href: "/contact",
  },
  {
    id: "greai",
    name: "GREAI™",
    subtitle: "Green, Responsible & Ethical",
    description:
      "GREAI™ is a framework for developing and deploying artificial intelligence responsibly, focusing on Green, Responsible and Ethical engineering principles. It aims to integrate sustainability and ethics throughout the entire AI lifecycle, from design to implementation, to mitigate potential negative impacts on society and the environment.",
    imageSide: "right",
    cta: "Explore more",
    href: "/contact",
  },
] as const;

function FrameworkFeature({
  framework,
}: {
  framework: (typeof frameworks)[number];
}) {
  const image = (
    <div
      className={`frameworks-page__visual frameworks-page__visual--${framework.id}`}
      role="img"
      aria-label={`${framework.name} illustration placeholder`}
    >
      <span className="frameworks-page__visual-label">
        Image placeholder
      </span>
    </div>
  );

  const content = (
    <div className="frameworks-page__content">
      <h2 id={`framework-${framework.id}`}>
        {framework.name}
      </h2>

      {framework.subtitle && (
        <h3>{framework.subtitle}</h3>
      )}

      <p>{framework.description}</p>

      <Link
        className="frameworks-page__button"
        href={framework.href}
      >
        <span>{framework.cta}</span>

        <svg viewBox="0 0 24 24" aria-hidden="true">
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
  );

  return (
    <section
      className={`frameworks-page__feature frameworks-page__feature--${framework.imageSide}`}
      aria-labelledby={`framework-${framework.id}`}
    >
      {framework.imageSide === "left" ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </section>
  );
}

export default function FrameworksPage() {
  return (
    <>
      <div className="frameworks-page__header">
        <SiteHeader />
      </div>

      <section
        className="frameworks-page__hero"
        aria-labelledby="frameworks-page-title"
      >
        <div className="frameworks-page__hero-container">
          <h1 id="frameworks-page-title">Our Frameworks</h1>
        </div>
      </section>

      <main className="frameworks-page">
        <div className="frameworks-page__container">
          {frameworks.map((framework) => (
            <FrameworkFeature
              key={framework.id}
              framework={framework}
            />
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
