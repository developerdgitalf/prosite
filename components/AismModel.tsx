
import Image from "next/image";
import "./AismModel.css";

export default function AismModel() {
  return (
    <section
      className="aism-model-section"
      aria-labelledby="aism-model-heading"
    >
      <div className="aism-model-section__container">
        {/* LEFT: Your complete SVG diagram */}
        <div className="aism-model-section__visual">
          <Image
            src="/images/aism-model-diagram.svg"
            alt="AISM model illustrating the six dimensions of AI capability"
            width={1200}
            height={1000}
            priority={false}
            className="aism-model__svg-image"
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 65vw, 65vw"
          />
        </div>

        {/* RIGHT: Existing heading and description */}
        <div className="aism-model-section__content">
          <p className="aism-model-section__eyebrow">
            THE AISM™ MODEL
          </p>

          <h2 id="aism-model-heading">
            Six dimensions.
            <br />
            A smarter
            <br />
            enterprise.
          </h2>

          <p className="aism-model-section__description">
            AISM™ connects the dimensions that determine whether AI can
            scale responsibly and create business value.
          </p>
        </div>
      </div>
    </section>
  );
}
