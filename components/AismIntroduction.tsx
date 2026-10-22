import Image from "next/image";
import "./AismIntroduction.css";

export default function AismIntroduction() {
  return (
    <section
      className="aism-intro"
      aria-labelledby="aism-intro-title"
    >
      <div className="aism-intro__container">
        {/* Left: AISM introduction */}
        <div className="aism-intro__content">
          <h2
            id="aism-intro-title"
            className="aism-intro__eyebrow"
          >
            WHAT IS AISM™?
          </h2>

          <p>
            PROSIGHT™ AI Service Management (AISM™) refers to best
            practices and frameworks for managing AI Services in an
            enterprise.
          </p>

          <p>
            AISM™ brings together the practices required to manage AI
            across the enterprise — from strategy and use-case
            prioritisation to governance, technology, workforce,
            outcomes and culture.
          </p>

          <p>
            AISM™ brings together the practices required to manage AI
            across the enterprise — from strategy and use-case
            prioritisation to governance, technology, workforce,
            outcomes and culture.
          </p>
        </div>

        {/* Right: PNG illustration */}
        <div className="aism-intro__visual">
          <Image
            src="/images/aism-illustration.png"
            alt="AI professional working with artificial intelligence technology"
            fill
            sizes="(max-width: 560px) 100vw, (max-width: 760px) 48vw, 45vw"
            className="aism-intro__image"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}