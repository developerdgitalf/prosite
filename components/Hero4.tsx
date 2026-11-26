
"use client";

import { useRef, useState } from "react";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import Link from "next/link";
import "./Hero4.css";

type Dimension = {
  id: string;
  label: string;
  icon: "human" | "strategy" | "workforce" | "information" | "culture" | "technology";
};

const dimensions: Dimension[] = [
  {
    id: "human-augment",
    label: "Human Augment",
    icon: "human",
  },
  {
    id: "strategy",
    label: "Strategy",
    icon: "strategy",
  },
  {
    id: "workforce",
    label: "Workforce",
    icon: "workforce",
  },
  {
    id: "information",
    label: "Information",
    icon: "information",
  },
  {
    id: "culture",
    label: "Culture",
    icon: "culture",
  },
  {
    id: "technology",
    label: "Technology",
    icon: "technology",
  },
];

/* =====================================================
   DIMENSION ICONS
===================================================== */

function DimensionIcon({ type }: { type: Dimension["icon"] }) {
  switch (type) {
    case "human":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="7" r="3" />
          <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
        </svg>
      );

    case "strategy":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" />
          <path d="m14 10 6-6M16 4h4v4" />
        </svg>
      );

    case "workforce":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3 21v-2a6 6 0 0 1 12 0v2M16 15a5 5 0 0 1 5 5v1" />
        </svg>
      );

    case "information":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 20V10h4v10M10 20V5h4v15M16 20V2h4v18" />
        </svg>
      );

    case "culture":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="9" y="2" width="6" height="6" rx="1.5" />
          <rect x="2" y="16" width="6" height="6" rx="1.5" />
          <rect x="16" y="16" width="6" height="6" rx="1.5" />
          <path d="M12 8v4H5v4M12 12h7v4" />
        </svg>
      );

    case "technology":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4M7 9h10M7 13h6" />
        </svg>
      );

    default:
      return null;
  }
}

/* =====================================================
   ARROW ICON
===================================================== */

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m10 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =====================================================
   HERO 4 — INTERACTIVE AISM™ SIX DIMENSIONS
===================================================== */

export default function Hero4() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useRef<{
    pointerId: number;
    startAngle: number;
    startRotation: number;
  } | null>(null);

  /* Get pointer angle relative to the diagram centre */

  const getPointerAngle = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    return (
      Math.atan2(
        event.clientY - centerY,
        event.clientX - centerX
      ) *
      (180 / Math.PI)
    );
  };

  /* Start manual rotation */

  const handlePointerDown = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    const startAngle = getPointerAngle(event);

    dragRef.current = {
      pointerId: event.pointerId,
      startAngle,
      startRotation: rotation,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  /* Rotate the six dimensions while dragging */

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    const drag = dragRef.current;

    if (!drag || drag.pointerId !== event.pointerId) {
      return;
    }

    const currentAngle = getPointerAngle(event);

    let difference = currentAngle - drag.startAngle;

    if (difference > 180) difference -= 360;
    if (difference < -180) difference += 360;

    setRotation(drag.startRotation + difference);
  };

  /* Stop rotation */

  const handlePointerEnd = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    if (dragRef.current?.pointerId !== event.pointerId) {
      return;
    }

    dragRef.current = null;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  /* Manual arrow controls */

  const rotateLeft = () => {
    setRotation((current) => current - 15);
  };

  const rotateRight = () => {
    setRotation((current) => current + 15);
  };

  return (
    <section className="hero4" aria-labelledby="hero4-title">
      <div className="hero4__container">

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="hero4__content">

          <p className="hero4__eyebrow">
            AI ENGINEERING CAPABILITIES STUDY
          </p>

          <h1 id="hero4-title" className="hero4__title">
            AI ambition is
            <br />
            everywhere.
            <br />
            <span>AI value isn’t.</span>
          </h1>

          <p className="hero4__description">
            PROSIGHT™ combines AI practitioner expertise with
            prescriptive frameworks to turn AI ambition into
            sustainable business value.
          </p>

          <Link
            href="/frameworks"
            className="hero4__cta"
          >
            <span>Explore our offerings</span>

            <span className="hero4__cta-arrow">
              <ArrowIcon />
            </span>
          </Link>

          <div className="hero4__highlights">
            <span>AI Strategy</span>
            <span>Enterprise Transformation</span>
            <span>Sustainable Business Value</span>
          </div>

        </div>

        {/* =========================================
            RIGHT INTERACTIVE DIAGRAM
        ========================================= */}

        <div className="hero4__visual">

          <div
            className={`hero4__orbit-stage ${
              isDragging ? "is-dragging" : ""
            }`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            role="group"
            aria-label="Interactive AISM six dimensions diagram. Drag to rotate the dimensions."
          >

            {/* OUTER ORBIT */}

            <div className="hero4__orbit hero4__orbit--outer" />

            {/* INNER ORBIT */}

            <div className="hero4__orbit hero4__orbit--inner" />

            {/* CENTRAL AISM CIRCLE */}

            <div className="hero4__core">
              <div className="hero4__core-content">
                <span className="hero4__core-name">
                  AISM™
                </span>

                <span className="hero4__core-subtitle">
                  SIX DIMENSIONS
                </span>
              </div>
            </div>

            {/* SIX ROTATABLE DIMENSION BOXES */}

            {dimensions.map((dimension, index) => {
              const angle =
                (index * 60 - 90 + rotation) * (Math.PI / 180);

              const positionStyle: CSSProperties = {
                left: `${50 + Math.cos(angle) * 34}%`,
                top: `${50 + Math.sin(angle) * 34}%`,
              };

              return (
                <div
                  key={dimension.id}
                  className="hero4__dimension"
                  style={positionStyle}
                  aria-label={dimension.label}
                >
                  <span className="hero4__dimension-icon">
                    <DimensionIcon type={dimension.icon} />
                  </span>

                  <span className="hero4__dimension-label">
                    {dimension.label}
                  </span>
                </div>
              );
            })}

          </div>

          {/* MANUAL ROTATION CONTROLS */}

         {/*   <div className="hero4__rotation-controls">

            <button
              type="button"
              className="hero4__rotate-button"
              onClick={rotateLeft}
              aria-label="Rotate dimensions anticlockwise"
              title="Rotate anticlockwise"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M19 12H5M5 12l6-6M5 12l6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

      <!--    <button
              type="button"
              className="hero4__rotate-button"
              onClick={rotateRight}
              aria-label="Rotate dimensions clockwise"
              title="Rotate clockwise"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14m0 0-6-6m6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button> --> 

          

          </div>*/}

         

        </div>
      </div>
    </section>
  );
}
