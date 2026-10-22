
import Image from "next/image";
import Link from "next/link";
import "./AIMaturityAssessment.css";

export default function AIMaturityAssessment() {
  return (
    <section
      className="ai-maturity"
      aria-labelledby="ai-maturity-title"
    >
      <div className="ai-maturity__container">
        {/* Left: Your image */}
        <div className="ai-maturity__visual">
          <Image
            src="/images/ai-maturity-assessment.png"
            alt="Professional using immersive AI technology"
            fill
            sizes="(max-width: 640px) 100vw, 42vw"
            className="ai-maturity__image"
          />
        </div>

        {/* Right: Assessment content */}
        <div className="ai-maturity__content">
          <p className="ai-maturity__eyebrow">
            AI MATURITY ASSESSMENT
          </p>

          <h2 id="ai-maturity-title">
            How AI-ready is your
            <br className="ai-maturity__desktop-break" />
            organisation?
          </h2>

          <p className="ai-maturity__paragraph">
            Evaluate your organisation’s AI Practice Competitive Leverage
            across the six critical dimensions of AISWITCH™.
          </p>

          <p className="ai-maturity__paragraph">
            Understand where your organisation stands across the
            capabilities, practices and structures required to manage and
            scale enterprise AI.
          </p>

          <p className="ai-maturity__closing">
            Know where you stand. Know what comes next.
          </p>

          <Link
            href="/frameworks"
            className="ai-maturity__button"
          >
            <span>Explore</span>

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
