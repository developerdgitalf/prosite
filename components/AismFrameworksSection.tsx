
import Image from "next/image";
import Link from "next/link";
import "./AismFrameworksSection.css";

export default function AismFrameworksSection() {
  return (
    <section
      className="aism-frameworks"
      aria-labelledby="aism-frameworks-title"
    >
      {/* Top heading */}
      <header className="aism-frameworks__header">
        <h2 id="aism-frameworks-title">
          Proprietary Intelligence. Prescriptive Frameworks.
        </h2>

        <p className="aism-frameworks__subtitle">
          Frameworks that turn AI ambition into enterprise intelligence.
        </p>

        <p className="aism-frameworks__intro">
          Our expert-built frameworks bring structure to the complexity of
          enterprise AI — helping organisations assess, architect, govern and
          scale.
        </p>
      </header>

      {/* Existing SVG — framework diagram, descriptions and connector lines */}
      <div className="aism-frameworks__visual">
        <Image
          src="/images/frame.svg"
          alt="PROSIGHT frameworks: GREAI, AISWITCH, CHIP2EXPERIENCE and AISTATE"
          width={1200}
          height={520}
          sizes="(max-width: 900px) 100vw, 90vw"
          className="aism-frameworks__image"
        />
      </div>

      {/* Bottom button */}
      <div className="aism-frameworks__footer">
        <Link
          href="/frameworks"
          className="aism-frameworks__button"
        >
          <span>Explore All Frameworks</span>

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
    </section>
  );
}
