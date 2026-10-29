
import Image from "next/image";
import Link from "next/link";
import "./FinalCTASection.css";

export default function FinalCTASection() {
  return (
    <section
      className="prosight-final-cta"
      aria-labelledby="prosight-final-cta-title"
    >
      <div className="prosight-final-cta__container">
        {/* Left: CTA content */}
        <div className="prosight-final-cta__content">
          <p className="prosight-final-cta__eyebrow">
            READY TO TURN AI AMBITION
            <br />
            INTO REAL VALUE?
          </p>

          <h2 id="prosight-final-cta-title">
            Let’s build a brighter
            <br className="prosight-final-cta__desktop-break" />
            tomorrow, together.
          </h2>

          <p className="prosight-final-cta__description">
            Turn AI ambition into sustainable business value
            with the right strategy, practice, frameworks and
            capabilities.
          </p>

          <p className="prosight-final-cta__statement">
            Your AI ambition needs an operating model.
          </p>

          <Link
            href="/contact"
            className="prosight-final-cta__button"
          >
            <span>Start a Conversation</span>

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

        {/* Right: AI illustration */}
        <div className="prosight-final-cta__visual">
          <Image
            src="/images/ai-cta-illustration-prosite.png"
            alt="AI chip with connected technology, analytics and gears"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1000px) 48vw, 560px"
            className="prosight-final-cta__image"
          />
        </div>
      </div>
    </section>
  );
}
