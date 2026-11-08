import Image from "next/image";
import "./AismModel.css";

export default function AismModel() {
  return (
    <section
      className="aism-model-section"
      aria-labelledby="aism-model-heading"
    >
      <div className="aism-model-section__container">
        {/* The graphic is placed on the right on desktop and below the copy on mobile. */}
        <div className="aism-model-section__visual">
          <Image
            src="/images/aism-model-diagram.svg"
            alt="AISM model illustrating the six dimensions of AI capability"
            width={4200}
            height={4200}
            priority={false}
            className="aism-model__svg-image"
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 92vw, 68vw"
          />
        </div>

        <div className="aism-model-section__content">
  <p className="aism-model__eyebrow">
    THE AISM™ MODEL
  </p>

  <h2 id="aism-model-heading" className="aism-model__heading">
    <span>Six dimensions.</span>
    <span className="aism-model__heading-line">
      A smarterd enterprise.
    </span>
  </h2>

  <p className="aism-model__summary">
    AISM™ connects the dimensions that determine whether AI can
    scale responsibly and create business value.
  </p>
</div>
      </div>
    </section>
  );
}
