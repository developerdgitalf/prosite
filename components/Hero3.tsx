

import Image from "next/image";
import Link from "next/link";
import "./Hero3.css";

type Hero3Props = {
  imageSrc?: string;
  imageAlt?: string;
};

export default function Hero3({
  imageSrc = "/images/home-hero-visual.png",
  imageAlt = "PROSIGHT AI engineering and technology visual",
}: Hero3Props) {
  return (
    <section className="hero3">
      <div className="hero3__container">

        {/* LEFT SIDE — CONTENT */}
        <div className="hero3__content">

          <span className="hero3__eyebrow">
            AI ENGINEERING CAPABILITIES STUDY
          </span>

          <h1 className="hero3__title">
            AI ambition is everywhere.
            <span>AI value isn&apos;t.</span>
          </h1>

          <p className="hero3__description">
            PROSIGHT™ combines AI practitioner expertise
            with prescriptive frameworks to turn AI ambition
            into sustainable business value.
          </p>

          {/* CTA BUTTON */}
          <div className="hero3__actions">
            <Link
              href="/services"
              className="hero3__button"
            >
              <span>Explore Our Offering</span>

              <span className="hero3__button-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M10 8L14 12L10 16"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* SUPPORTING HIGHLIGHTS */}
          <div className="hero3__highlights">

            <span>
              <i />
              AI Strategy
            </span>

            <span>
              <i />
              Enterprise Transformation
            </span>

            <span>
              <i />
              Sustainable Business Value
            </span>

          </div>

        </div>

        {/* RIGHT SIDE — AI VISUAL */}
        <div className="hero3__visual">

          {/* IMAGE CONTAINER */}
          <div className="hero3__image-frame">

            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              quality={95}
              sizes="(max-width: 768px) 100vw, 52vw"
              className="hero3__image"
            />

          </div>

          {/* BACKGROUND ACCENTS */}
          <div
            className="hero3__accent hero3__accent--blue"
            aria-hidden="true"
          />

          <div
            className="hero3__accent hero3__accent--purple"
            aria-hidden="true"
          />

          {/* FLOATING INFORMATION CARD */}
          <div className="hero3__floating-label">

            <span className="hero3__floating-icon">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 18V6M10 18V10M16 18V4M22 18V8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

            </span>

            <div className="hero3__floating-text">
              <strong>AI Engineering</strong>
              <span>From ambition to business value</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
