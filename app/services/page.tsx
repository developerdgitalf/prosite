import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import "./services.css";

type ServiceCardData = {
  title: string;
  description: string;
};

type ServicesSectionProps = {
  id: string;
  title: string;
  description: string;
  cards: ServiceCardData[];
  variant: "engineering" | "practice" | "assessment";
};

/* Image paths must match the filenames inside public/images/services/. */
const serviceImages: Record<ServicesSectionProps["variant"], string[]> = {
  engineering: [
    "/images/services/AI-Engineering-Capabilities-Setup-1.jpg",
    "/images/services/AI-Engineering-Capabilities-Setup-2.jpg",
    "/images/services/AI-Engineering-Capabilities-Setup-3.jpg",
    "/images/services/AI-Engineering-Capabilities-Setup-4.jpg",
    "/images/services/AI-Engineering-Capabilities-Setup-5.jpg",
  ],
  practice: [
    "/images/services/AI-Practice-Setup-1.jpg",
    "/images/services/AI-Practice-Setup-2.jpg",
    "/images/services/AI-Practice-Setup-3.jpg",
    "/images/services/AI-Practice-Setup-4.jpg",
    "/images/services/AI-Practice-Setup-5.jpg",
  ],
  assessment: [
    "/images/services/AI-Assessment-and-Benchmarking-1.jpg",
    "/images/services/AI-Assessment-and-Benchmarking-2.jpg",
    "/images/services/AI-Assessment-and-Benchmarking-3.jpg",
    "/images/services/AI-Assessment-and-Benchmarking-4.jpg",
    "/images/services/AI-Assessment-and-Benchmarking-5.jpg",
  ],
};

/* =========================================
   SECTION 1 — AI ENGINEERING CAPABILITIES
========================================= */

const engineeringServices: ServiceCardData[] = [
  {
    title: "Build Your MLOps Foundation",
    description:
      "We will help you design and implement a scalable MLOps platform tailored to your needs, enabling automated and repeatable deployment of AI models.",
  },
  {
    title: "Defining and Designing the AI Engineering Lifecycle",
    description:
      "We will establish robust CI/CD/CT (Continuous Integration/Delivery/Training) pipelines to accelerate experimentation and ensure models in production are always current and performing optimally.",
  },
  {
    title: "Establish Governance Structure",
    description:
      "We will institute clear protocols for model versioning, monitoring, and quality assurance, ensuring your AI systems are reliable, secure, and auditable.",
  },
  {
    title: "Select the Right Products, Vendors and Platforms",
    description:
      "We will guide you through the complex landscape of AI tools to select, integrate, and configure the optimal technology stack that fits your budget and strategic goals.",
  },
  {
    title: "Empower Your Teams with Right Technofunctional Guidance",
    description:
      "We will help structure your engineering roles and provide targeted training on best practices, empowering your team to manage and scale your AI infrastructure independently.",
  },
];

/* =========================================
   SECTION 2 — AI PRACTICE SETUP
========================================= */

const practiceServices: ServiceCardData[] = [
  {
    title: "Align AI with Business Strategy",
    description:
      "We will work directly with your leadership to craft an AI vision and strategy that solves core business problems and creates a competitive advantage.",
  },
  {
    title: "Design Your Operating Model",
    description:
      "We will help you design a centralized Center of Excellence (CoE) or a federated AI practice, defining roles, responsibilities, and clear interaction models with business units.",
  },
  {
    title: "Create a Value-Driven Portfolio",
    description:
      "We will establish a structured process to identify, vet, and prioritize AI use cases with the highest potential return on investment (ROI), ensuring resources are focused on what matters most.",
  },
  {
    title: "Develop a Talent Strategy",
    description:
      "We will assist in defining AI roles, creating career paths, and outlining a plan for upskilling and recruiting the talent needed to drive your AI initiatives forward.",
  },
  {
    title: "Embed Responsible AI",
    description:
      "We will help you develop and implement practical Responsible AI best practices and frameworks to ensure your solutions are built and deployed ethically, fairly, and transparently.",
  },
];

/* =========================================
   SECTION 3 — AI ASSESSMENT AND BENCHMARKING
========================================= */

const assessmentServices: ServiceCardData[] = [
  {
    title: "Conduct a 360-Degree Audit",
    description:
      "We will perform a comprehensive evaluation of your current AI maturity across four key pillars: Strategy, Workforce, Information, People, Process, and Technology.",
  },
  {
    title: "Benchmark Against the Best",
    description:
      "We will measure your capabilities against industry peers and best-in-class organizations, providing a clear, objective view of your competitive standing.",
  },
  {
    title: "Pinpoint Gaps and Opportunities",
    description:
      "We will institute clear protocols for model versioning, monitoring, and quality assurance, ensuring your AI systems are reliable, secure, and auditable.",
  },
  {
    title: "Deliver an Actionable Roadmap",
    description:
      "We will provide a clear, prioritized, and time-bound roadmap with concrete initiatives and investment recommendations to elevate your AI maturity.",
  },
  {
    title: "Define Success Metrics",
    description:
      "We will help you establish relevant Key Performance Indicators (KPIs) and a measurement framework to track your progress and demonstrate the business value of your AI investments.",
  },
];

/* =========================================
   REUSABLE SERVICE CARD
========================================= */

function ServiceCard({
  card,
  image,
  imageIndex,
}: {
  card: ServiceCardData;
  image: string;
  imageIndex: number;
}) {
  return (
    <article className="services-card">
      <div
        className="services-card__image"
        style={{ backgroundImage: `url("${image}")` }}
        role="img"
        aria-label={`${card.title} image`}
      >
        <span className="services-card__image-count" aria-hidden="true">
          {String(imageIndex + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="services-card__content">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    </article>
  );
}

/* =========================================
   REUSABLE SERVICES SECTION
========================================= */

function ServicesSection({
  id,
  title,
  description,
  cards,
  variant,
}: ServicesSectionProps) {
  return (
    <section
      className={`services-section services-section--${variant}`}
      aria-labelledby={id}
    >
      <div className="services-section__container">
        <header className="services-section__header">
          <h2 id={id}>{title}</h2>
          <p>{description}</p>
        </header>

        <div className="services-section__grid">
          {cards.map((card, index) => (
            <ServiceCard
              key={card.title}
              card={card}
              image={serviceImages[variant][index]}
              imageIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   SERVICES PAGE
========================================= */

export default function ServicesPage() {
  return (
    <>
      <div className="services-page__header">
        <SiteHeader />
      </div>

      <section
        className="frameworks-page__hero"
        aria-labelledby="services-page-title"
      >
        <div className="frameworks-page__hero-container">
          <h1 id="services-page-title">Services</h1>
        </div>
      </section>

      <main className="prosight-services-page">
        <ServicesSection
          id="ai-engineering-setup"
          title="AI Engineering Capabilities Setup"
          description="PROSIGHT builds your complete AI engineering function by setting up foundational strategy for platforms and processes. We guide team structuring, select optimal tools, implement CI/CD for AI development, and establish a clear governance model for scalable, production-grade AI deployment."
          cards={engineeringServices}
          variant="engineering"
        />

        <ServicesSection
          id="ai-practice-setup"
          title="AI Practice Setup"
          description="PROSIGHT establishes your strategic AI practice or Center of Excellence (CoE), ensuring business alignment. We guide you through defining a clear vision, designing an operating model, prioritizing high-impact use cases, structuring talent development, and embedding ethical AI principles."
          cards={practiceServices}
          variant="practice"
        />

        <ServicesSection
          id="ai-assessment-benchmarking"
          title="AI Assessment and Benchmarking"
          description="PROSIGHT assesses your AI maturity against industry benchmarks to identify capability gaps. We deliver a strategic roadmap by evaluating current practices, defining key performance metrics, analyzing your technology stack, and outlining clear steps for advancing your AI initiatives."
          cards={assessmentServices}
          variant="assessment"
        />
      </main>

      <SiteFooter />
    </>
  );
}
