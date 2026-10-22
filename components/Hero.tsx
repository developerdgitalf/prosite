
import Link from "next/link";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="prosight-hero" aria-labelledby="prosight-hero-title">
      <div className="prosight-hero__content">
        <h1 id="prosight-hero-title">
          AI ambition is everywhere.
          <br />
          AI value isn’t.
        </h1>

        <p className="prosight-hero__description">
          PROSIGHT™ combines AI practitioner expertise with prescriptive
          <br className="prosight-hero__desktop-break" />
          frameworks to turn AI ambition into sustainable business value.
        </p>

        <Link href="/services" className="prosight-hero__cta">
          <span>Explore Our Offering</span>
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
              d="M10 8l4 4-4 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* Connected image layout */}
      <div className="prosight-hero__visual">

        {/* LEFT: Two image boxes with a curved connector */}
        <div className="prosight-hero__cluster prosight-hero__cluster--left">
          <svg
            className="prosight-hero__connector"
            viewBox="0 0 360 280"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M88 65 C155 65 155 190 245 190"
              fill="none"
              stroke="#d9f0f3"
              strokeWidth="76"
              strokeLinecap="round"
            />
          </svg>

          <div className="prosight-hero__tile prosight-hero__tile--left-top" />
          <div className="prosight-hero__tile prosight-hero__tile--left-bottom" />
        </div>

        {/* CENTRE: One wide image box */}
        <div className="prosight-hero__tile prosight-hero__tile--centre" />

        {/* RIGHT: Two image boxes with a mirrored curved connector */}
        <div className="prosight-hero__cluster prosight-hero__cluster--right">
          <svg
            className="prosight-hero__connector"
            viewBox="0 0 360 280"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M272 65 C205 65 205 190 115 190"
              fill="none"
              stroke="#d9f0f3"
              strokeWidth="76"
              strokeLinecap="round"
            />
          </svg>

          <div className="prosight-hero__tile prosight-hero__tile--right-top" />
          <div className="prosight-hero__tile prosight-hero__tile--right-bottom" />
        </div>

      </div>
    </section>
  );
}
