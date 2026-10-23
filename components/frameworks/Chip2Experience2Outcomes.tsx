"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type {
  CSSProperties,
  KeyboardEvent,
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
} from "react";

import "./Chip2Experience2Outcomes.css";

/* =========================================
   CAPABILITY DATA
========================================= */

type Capability = {
  number: number;
  title: string;
  description: string;
};

type CapabilityGroup = {
  id: string;
  title: string;
  items: Capability[];
};

const capabilityGroups: CapabilityGroup[] = [
  {
    id: "hybrid-cloud",
    title: "Secure Agile Hybrid Cloud",
    items: [
      {
        number: 1,
        title: "Virtualized Hybrid Infrastructure Layer",
        description:
          "Horizontal and modular sandboxes supporting multi-cloud, on- and off-premises integration, SDX layers, infrastructure hardening, orchestrators and accelerators.",
      },
      {
        number: 2,
        title: "Compute & Data Infrastructure Security",
        description:
          "Chip-level hardware security, including SGX and gated processors, secure storage hardware, SDX modules, cloud compliance assurance, GRC and ESG modules.",
      },
    ],
  },
  {
    id: "integrated-network",
    title: "Secure Agile Integrated Network",
    items: [
      {
        number: 3,
        title: "Virtualized Network Infrastructure Layer",
        description:
          "Modular SDN and NFV modules, multi-modal cloud networks and optimizer functions designed to improve speed, resilience, cost and performance.",
      },
      {
        number: 4,
        title: "Infrastructure & Data Network Security",
        description:
          "Network and data protection across modular SDN, NFV and multi-modal cloud environments, supporting resilient, cost-effective and secure infrastructure.",
      },
    ],
  },
  {
    id: "output-outcomes",
    title: "Output → Outcomes",
    items: [
      {
        number: 5,
        title: "Infrastructure Performance Management",
        description:
          "Tools and bundles supporting integrated configurations, sandbox stacks, microservices and reusable component building blocks.",
      },
      {
        number: 6,
        title: "Dynamic Infrastructure Cost Optimisation",
        description:
          "Cost orchestrators, resilience and performance optimizers, predictive ML capabilities, knowledge bases and plug-ins for multi-cloud and hybrid hyperscaler cost management.",
      },
      {
        number: 7,
        title: "Quality of Experience (QoE)",
        description:
          "Metrics, benchmarks, dashboards, predictive ML tools and real-time experience orchestrators. Examples include CUDA user-persona performance, edge endpoints, process TATs, response times, availability and SRE metrics.",
      },
    ],
  },
  {
    id: "operational-outcomes",
    title: "Operational Outcomes",
    items: [
      {
        number: 8,
        title: "Operational Outcomes Layer",
        description:
          "Business and functional gains measured through productivity, CSAT, NPS, turnaround time, end-to-end process costs, business uptime and service availability.",
      },
      {
        number: 9,
        title: "Strategic Outcomes Layer",
        description:
          "Measure AI contributions to P&L, balance sheets, revenue statements, stock performance, CAGR, ROCE, EBITDA and operating margins to understand competitive positioning.",
      },
    ],
  },
  {
    id: "business-outcomes",
    title: "Business Outcomes",
    items: [
      {
        number: 10,
        title: "Cumulative Business Value",
        description:
          "Assess the direct and indirect financial impact of AI investments, connecting enterprise capabilities and customer experiences to measurable business value.",
      },
    ],
  },
];

const GROUP_COUNT = capabilityGroups.length;
const MIDDLE_COPY_START = GROUP_COUNT;
const repeatedGroups = [
  ...capabilityGroups,
  ...capabilityGroups,
  ...capabilityGroups,
];
const VISIBLE_RADIUS = 2;
const DRAG_THRESHOLD = 55;
const NORMALISE_DELAY = 720;

 type DragState = {
  active: boolean;
  pointerId: number;
  startX: number;
  deltaX: number;
  moved: boolean;
};

const initialDragState: DragState = {
  active: false,
  pointerId: -1,
  startX: 0,
  deltaX: 0,
  moved: false,
};

function getLogicalIndex(index: number) {
  return ((index % GROUP_COUNT) + GROUP_COUNT) % GROUP_COUNT;
}

function formatNumber(value: number) {
  return String(value).padStart(2, "0");
}

/* =========================================
   MAIN COMPONENT
========================================= */

export default function Chip2Experience2Outcomes() {
  const [activeVirtualIndex, setActiveVirtualIndex] = useState(
    MIDDLE_COPY_START
  );
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isRebasing, setIsRebasing] = useState(false);
  const [cardStepPercent, setCardStepPercent] = useState(15);

  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const activeIndexRef = useRef(MIDDLE_COPY_START);
  const dragRef = useRef<DragState>({ ...initialDragState });
  const suppressClickRef = useRef(false);
  const normaliseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const suppressClickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const logicalActiveIndex = getLogicalIndex(activeVirtualIndex);

  const updateActiveIndex = useCallback((index: number) => {
    activeIndexRef.current = index;
    setActiveVirtualIndex(index);
  }, []);

  const clearNormaliseTimer = useCallback(() => {
    if (normaliseTimerRef.current) {
      clearTimeout(normaliseTimerRef.current);
      normaliseTimerRef.current = null;
    }
  }, []);

  const clearSuppressClickTimer = useCallback(() => {
    if (suppressClickTimerRef.current) {
      clearTimeout(suppressClickTimerRef.current);
      suppressClickTimerRef.current = null;
    }
    suppressClickRef.current = false;
  }, []);

  /*
   * Measure once per resize, not on every active-card change.
   * This keeps the slot positions stable and prevents visual jitter.
   */
  useEffect(() => {
    const stage = stageRef.current;
    const sizingCard = cardRefs.current[MIDDLE_COPY_START];
    if (!stage || !sizingCard) return;

    const updateStep = () => {
      const stageWidth = stage.clientWidth;
      const cardWidth = sizingCard.getBoundingClientRect().width;
      if (!stageWidth || !cardWidth) return;

      const nextStep = (cardWidth * 0.62 * 100) / stageWidth;
      setCardStepPercent((previous) =>
        Math.abs(previous - nextStep) > 0.15 ? nextStep : previous
      );
    };

    updateStep();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateStep);
      return () => window.removeEventListener("resize", updateStep);
    }

    const observer = new ResizeObserver(updateStep);
    observer.observe(stage);
    observer.observe(sizingCard);

    return () => observer.disconnect();
  }, []);

  /*
   * Once a full transition has finished, rebase the loop to the
   * middle copy without animating the duplicate-card swap.
   */
  useEffect(() => {
    activeIndexRef.current = activeVirtualIndex;

    if (
      activeVirtualIndex >= MIDDLE_COPY_START &&
      activeVirtualIndex < MIDDLE_COPY_START + GROUP_COUNT
    ) {
      return;
    }

    clearNormaliseTimer();
    const normalisedIndex =
      MIDDLE_COPY_START + getLogicalIndex(activeVirtualIndex);

    normaliseTimerRef.current = setTimeout(() => {
      setIsRebasing(true);
      activeIndexRef.current = normalisedIndex;
      setActiveVirtualIndex(normalisedIndex);
      normaliseTimerRef.current = null;

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setIsRebasing(false));
      });
    }, NORMALISE_DELAY);

    return clearNormaliseTimer;
  }, [activeVirtualIndex, clearNormaliseTimer]);

  useEffect(() => {
    return () => {
      clearNormaliseTimer();
      clearSuppressClickTimer();
    };
  }, [clearNormaliseTimer, clearSuppressClickTimer]);

  const moveBy = useCallback(
    (amount: number) => {
      clearNormaliseTimer();
      updateActiveIndex(activeIndexRef.current + amount);
    },
    [clearNormaliseTimer, updateActiveIndex]
  );

  const moveToLogicalIndex = useCallback(
    (targetLogicalIndex: number) => {
      const currentLogical = getLogicalIndex(activeIndexRef.current);
      let difference = targetLogicalIndex - currentLogical;

      if (difference > GROUP_COUNT / 2) difference -= GROUP_COUNT;
      if (difference < -GROUP_COUNT / 2) difference += GROUP_COUNT;

      moveBy(difference);
    },
    [moveBy]
  );

  const activateCard = useCallback(
    (virtualIndex: number) => {
      if (dragRef.current.moved || suppressClickRef.current) return;
      clearNormaliseTimer();
      updateActiveIndex(virtualIndex);
    },
    [clearNormaliseTimer, updateActiveIndex]
  );

  /* =========================================
     POINTER DRAG
     Only the centre card follows the pointer.
     The side cards stay still until release.
  ========================================= */

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    const target = event.target;
    if (
      target instanceof Element &&
      target.closest("button, a, input, select, textarea")
    ) {
      return;
    }

    clearNormaliseTimer();
    clearSuppressClickTimer();

    dragRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      deltaX: 0,
      moved: false,
    };

    setIsDragging(true);

    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Continue with pointer events even if capture is unavailable.
    }
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.active || drag.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - drag.startX;
    drag.deltaX = deltaX;
    if (Math.abs(deltaX) > 5) drag.moved = true;

    if (drag.moved) {
      // Only the active card receives this offset in its inline style.
      setDragOffset(deltaX);
      if (event.cancelable) event.preventDefault();
    }
  };

  const finishDrag = (
    event: ReactPointerEvent<HTMLDivElement>,
    cancelled = false
  ) => {
    const drag = dragRef.current;
    if (!drag.active || drag.pointerId !== event.pointerId) return;

    const deltaX = drag.deltaX;
    const didMove = drag.moved;

    dragRef.current = { ...initialDragState };
    setIsDragging(false);
    setDragOffset(0);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      try {
        event.currentTarget.releasePointerCapture(event.pointerId);
      } catch {
        // The browser may already have released pointer capture.
      }
    }

    if (cancelled || !didMove) return;

    suppressClickRef.current = true;
    suppressClickTimerRef.current = setTimeout(() => {
      suppressClickRef.current = false;
      suppressClickTimerRef.current = null;
    }, 300);

    if (deltaX <= -DRAG_THRESHOLD) {
      moveBy(1);
    } else if (deltaX >= DRAG_THRESHOLD) {
      moveBy(-1);
    }
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    finishDrag(event);
  };

  const handlePointerCancel = (event: ReactPointerEvent<HTMLDivElement>) => {
    finishDrag(event, true);
  };

  const handleLostPointerCapture = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    const drag = dragRef.current;
    if (!drag.active || drag.pointerId !== event.pointerId) return;

    dragRef.current = { ...initialDragState };
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleClickCapture = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!suppressClickRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    clearSuppressClickTimer();
  };

  const handleCardKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    virtualIndex: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activateCard(virtualIndex);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      moveBy(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveBy(-1);
    }
  };

  return (
    <section
      className="chip2-outcomes"
      aria-labelledby="chip2-outcomes-title"
    >
      <div className="chip2-outcomes__container">
        <header className="chip2-outcomes__header">
          <p className="chip2-outcomes__eyebrow">
            FROM INFRASTRUCTURE TO IMPACT
          </p>
          <h2 id="chip2-outcomes-title">
            CHIP2EXPERIENCE2OUTCOMES™
          </h2>
          <p className="chip2-outcomes__intro">
            <strong>Chip2Experience2Outcomes™</strong> is an intelligent
            enterprise fabric architecture with two layers: Chip2Experience,
            converting technology into user experiences, and Experience2Outcomes,
            turning those experiences into business value. Achieving outcomes
            requires a top-down strategic approach driven by the C-suite, rather
            than a bottom-up, technology-first one.
          </p>
          <div className="chip2-outcomes__legend">
            <span className="chip2-outcomes__legend-dot" />
            Drag the centre card or select a capability to bring it into focus
          </div>
        </header>

        <div className="chip2-outcomes__controls">
          <span
            className="chip2-outcomes__counter"
            aria-live="polite"
            aria-atomic="true"
          >
            <strong>{formatNumber(logicalActiveIndex + 1)}</strong>
            <span> / {formatNumber(GROUP_COUNT)}</span>
          </span>

          <div className="chip2-outcomes__arrows">
            <button
              type="button"
              className="chip2-outcomes__arrow"
              aria-label="Previous capability"
              onClick={() => moveBy(-1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className="chip2-outcomes__arrow"
              aria-label="Next capability"
              onClick={() => moveBy(1)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div
          ref={stageRef}
          className={[
            "chip2-outcomes__stage",
            isDragging ? "is-dragging" : "",
            isRebasing ? "is-rebasing" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          role="region"
          aria-label="CHIP2EXPERIENCE2OUTCOMES capability carousel"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onLostPointerCapture={handleLostPointerCapture}
          onClickCapture={handleClickCapture}
          onDragStart={(event) => event.preventDefault()}
        >
          {repeatedGroups.map((group, virtualIndex) => {
            const offset = virtualIndex - activeVirtualIndex;
            const visible = Math.abs(offset) <= VISIBLE_RADIUS;
            const isActive = offset === 0;
            const distance = Math.abs(offset);
            const scale = isActive ? 1 : distance === 1 ? 0.9 : 0.8;
            const opacity = isActive ? 1 : distance === 1 ? 0.8 : 0.42;
            const logicalIndex = getLogicalIndex(virtualIndex);
            const activeDragOffset = isActive && isDragging ? dragOffset : 0;

            const cardStyle: CSSProperties = {
              left: `${50 + offset * cardStepPercent}%`,
              transform: `translate3d(calc(-50% + ${activeDragOffset}px), -50%, 0) scale(${scale})`,
              zIndex: 20 - distance,
              opacity: visible ? opacity : 0,
              visibility: visible ? "visible" : "hidden",
              pointerEvents: visible ? "auto" : "none",
            };

            return (
              <article
                key={`${group.id}-${virtualIndex}`}
                ref={(element) => {
                  cardRefs.current[virtualIndex] = element;
                }}
                className={[
                  "chip2-outcomes__card",
                  `chip2-outcomes__card--${group.id}`,
                  isActive ? "is-active" : "is-inactive",
                  distance === 1 ? "is-neighbour" : "",
                  distance === 2 ? "is-outer" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={cardStyle}
                role="button"
                tabIndex={visible ? 0 : -1}
                aria-pressed={isActive}
                aria-hidden={!visible}
                aria-label={`${group.title}${
                  isActive ? ", active capability" : ", select capability"
                }`}
                onClick={() => activateCard(virtualIndex)}
                onKeyDown={(event) =>
                  handleCardKeyDown(event, virtualIndex)
                }
              >
                <div className="chip2-outcomes__card-header">
                  <span className="chip2-outcomes__card-index">
                    {formatNumber(logicalIndex + 1)}
                  </span>
                  <span className="chip2-outcomes__card-kicker">
                    CAPABILITY GROUP
                  </span>
                  <h3>{group.title}</h3>
                </div>

                <div className="chip2-outcomes__items">
                  {group.items.map((item) => (
                    <div
                      className="chip2-outcomes__item"
                      key={item.number}
                    >
                      <span className="chip2-outcomes__number">
                        {formatNumber(item.number)}
                      </span>
                      <div className="chip2-outcomes__item-content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="chip2-outcomes__card-footer">
                  <span>
                    {formatNumber(group.items.length)}{" "}
                    {group.items.length === 1 ? "CAPABILITY" : "CAPABILITIES"}
                  </span>
                  <span
                    className="chip2-outcomes__card-action"
                    aria-hidden="true"
                  >
                    {isActive ? "IN FOCUS +" : "EXPLORE ↗"}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div
          className="chip2-outcomes__pagination"
          aria-label="Choose capability group"
        >
          {capabilityGroups.map((group, index) => (
            <button
              key={group.id}
              type="button"
              className={`chip2-outcomes__pagination-dot ${
                index === logicalActiveIndex ? "is-active" : ""
              }`}
              aria-label={`Show ${group.title}`}
              aria-current={
                index === logicalActiveIndex ? "true" : undefined
              }
              onClick={() => moveToLogicalIndex(index)}
            />
          ))}
        </div>

        <p className="chip2-outcomes__footer-note">
          From secure infrastructure to measurable enterprise value.
        </p>
      </div>
    </section>
  );
}
