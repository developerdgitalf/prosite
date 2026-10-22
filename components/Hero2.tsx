
import Image from "next/image";
import Link from "next/link";
import "./Hero2.css";

export default function Hero2() {
  return (
    <section className="prosight-hero2" aria-labelledby="prosight-hero2-title">
      {/* Hero heading and content */}
      <div className="prosight-hero2__content">
        <h1 id="prosight-hero2-title">
          AI ambition is everywhere.
          <br />
          AI value isn’t.
        </h1>

        <p className="prosight-hero2__description">
          PROSIGHT™ combines AI practitioner expertise with prescriptive
          <br className="prosight-hero2__desktop-break" />
          frameworks to turn AI ambition into sustainable business value.
        </p>

        <Link href="/services" className="prosight-hero2__cta">
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

      {/* Three separate image spaces */}
      <div className="prosight-hero2__visual">
        {/* Left image */}
        <div className="prosight-hero2__image-slot prosight-hero2__image-slot--left">
          <Image
            src="/images/hero-left.png"
            alt="Abstract blue AI technology artwork"
            fill
            priority
            sizes="(max-width: 640px) 45vw, 28vw"
            className="prosight-hero2__image prosight-hero2__image--side"
          />
        </div>

        {/* Centre landscape image */}
        <div className="prosight-hero2__image-slot prosight-hero2__image-slot--centre">
          <Image
            src="/images/hero-centre.png"
            alt="PROSIGHT featured abstract artwork"
            fill
            priority
            sizes="(max-width: 640px) 90vw, 40vw"
            className="prosight-hero2__image prosight-hero2__image--centre"
          />
        </div>

        {/* Right image */}
        <div className="prosight-hero2__image-slot prosight-hero2__image-slot--right">
          <Image
            src="/images/hero-right.png"
            alt="Abstract purple AI technology artwork"
            fill
            priority
            sizes="(max-width: 640px) 45vw, 28vw"
            className="prosight-hero2__image prosight-hero2__image--side"
          />
        </div>
      </div>
    </section>
  );
}
