
import Image from "next/image";
import Link from "next/link";
import "./GREAIFramework.css";

export default function GREAIFramework() {
  return (
    <section
      className="great-framework"
      aria-labelledby="great-framework-title"
    >
      <div className="great-framework__container">
        {/* Left: Framework content */}
        <div className="great-framework__content">
          <h2 id="great-framework-title">GREAT™</h2>

          <h3>Green, Responsible &amp; Ethical</h3>

          <p>
            GREAT™ is a framework for developing and deploying artificial
            intelligence responsibly, focusing on Green, Responsible and
            Ethical engineering principles. It aims to integrate
            sustainability and ethics throughout the entire AI lifecycle,
            from design to implementation, to mitigate potential negative
            impacts on society and the environment.
          </p>

          <Link
            href="/contact"
            className="great-framework__button"
          >
            <span>Explore more</span>

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

        {/* Right: Globe illustration */}
        <div className="great-framework__visual">
          <Image
            src="/images/great-globe.png"
            alt="Earth surrounded by green natural elements and connected technology"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1000px) 48vw, 500px"
            className="great-framework__image"
          />
        </div>
      </div>
    </section>
  );
}
