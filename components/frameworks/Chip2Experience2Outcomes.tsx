
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
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

/*
 * Three copies provide cards on both sides of the loop.
 * The middle copy is the normal operating range.
 */
const repeatedCapabilityGroups = [
  ...capabilityGroups,
  ...capabilityGroups,
  ...capabilityGroups,
];

/* =========================================
   MAIN COMPONENT
========================================= */

export default function Chip2Experience2Outcomes() {
  // Start at card 1, in the middle copy.
  const [activeVirtualIndex, setActiveVirtualIndex] = useState(
    GROUP_COUNT
  );

  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  const activeIndexRef = useRef(GROUP_COUNT);
  const skipSmoothRef = useRef(false);

  const scrollTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  /*
   * Update the React state and its synchronous reference together.
   * This prevents rapid arrow clicks from reading stale indices.
   */
  const setVirtualIndex = useCallback(
    (index: number, instant = false) => {
      if (instant) {
        skipSmoothRef.current = true;
      }

      activeIndexRef.current = index;
      setActiveVirtualIndex(index);
    },
    []
  );

  const activeIndex =
    ((activeVirtualIndex % GROUP_COUNT) + GROUP_COUNT) %
    GROUP_COUNT;

  /* =========================================
     CENTRE THE ACTIVE CARD
  ========================================= */

  useEffect(() => {
    const track = trackRef.current;
    const card = cardRefs.current[activeVirtualIndex];

    if (!track || !card) return;

    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    const targetLeft =
      track.scrollLeft +
      cardRect.left -
      trackRect.left -
      (track.clientWidth - card.clientWidth) / 2;

    const maxScroll = track.scrollWidth - track.clientWidth;

    track.scrollTo({
      left: Math.max(0, Math.min(targetLeft, maxScroll)),
      behavior: skipSmoothRef.current ? "auto" : "smooth",
    });

    skipSmoothRef.current = false;
  }, [activeVirtualIndex]);

  /* =========================================
     SEAMLESS LOOP NORMALISATION
  ========================================= */

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    /*
     * Once scrolling settles, move cloned cards back into the
     * equivalent position in the middle copy.
     *
     * The reset is instant and retains the same visible card,
     * so the visitor does not see a jump from card 5 to card 1.
     */
    const normalisePosition = () => {
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
        scrollTimerRef.current = null;
      }

      const currentIndex = activeIndexRef.current;

      // Already inside the middle copy.
      if (
        currentIndex >= GROUP_COUNT &&
        currentIndex < GROUP_COUNT * 2
      ) {
        return;
      }

      const logicalIndex =
        ((currentIndex % GROUP_COUNT) + GROUP_COUNT) %
        GROUP_COUNT;

      setVirtualIndex(GROUP_COUNT + logicalIndex, true);
    };

    /*
     * The scrollend listener provides the primary path.
     * The debounced scroll listener is a fallback for browsers
     * where scrollend is unavailable or not fired.
     */
    const handleScroll = () => {
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }

      scrollTimerRef.current = setTimeout(
        normalisePosition,
        180
      );
    };

    track.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    track.addEventListener(
      "scrollend",
      normalisePosition as EventListener
    );

    return () => {
      track.removeEventListener("scroll", handleScroll);
      track.removeEventListener(
        "scrollend",
        normalisePosition as EventListener
      );

      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
        scrollTimerRef.current = null;
      }
    };
  }, [setVirtualIndex]);

  /* =========================================
     CARD SELECTION
  ========================================= */

  const activateCard = (virtualIndex: number) => {
    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = null;
    }

    setVirtualIndex(virtualIndex);
  };

  /* =========================================
     NEXT — CARD 5 CONTINUES TO CARD 1
  ========================================= */

  const goNext = () => {
    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = null;
    }

    setVirtualIndex(activeIndexRef.current + 1);
  };

  /* =========================================
     PREVIOUS — CARD 1 CONTINUES TO CARD 5
  ========================================= */

  const goPrevious = () => {
    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = null;
    }

    setVirtualIndex(activeIndexRef.current - 1);
  };

  /* =========================================
     KEYBOARD NAVIGATION
  ========================================= */

  const handleCardKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    virtualIndex: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activateCard(virtualIndex);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrevious();
    }
  };

  /* =========================================
     RENDER
  ========================================= */

  return (
    <section
      className="chip2-outcomes"
      aria-labelledby="chip2-outcomes-title"
    >
      <div className="chip2-outcomes__container">
        {/* Header */}

        <header className="chip2-outcomes__header">
          <p className="chip2-outcomes__eyebrow">
            FROM INFRASTRUCTURE TO IMPACT
          </p>

          <h2 id="chip2-outcomes-title">
            CHIP2EXPERIENCE2OUTCOMES™
          </h2>

          <p className="chip2-outcomes__intro">
            <strong>Chip2Experience2Outcomes™</strong> is an intelligent
            enterprise fabric architecture with two layers:
            Chip2Experience, converting technology into user experiences,
            and Experience2Outcomes, turning those experiences into business
            value. Achieving outcomes requires a top-down strategic approach
            driven by the C-suite, rather than a bottom-up,
            technology-first one.
          </p>

          <div className="chip2-outcomes__legend">
            <span className="chip2-outcomes__legend-dot" />
            Select a capability to bring it into focus
          </div>
        </header>

        {/* Current slide and navigation */}

        <div className="chip2-outcomes__controls">
          <span
            className="chip2-outcomes__counter"
            aria-live="polite"
            aria-atomic="true"
          >
            <strong>
              {String(activeIndex + 1).padStart(2, "0")}
            </strong>

            <span>
              {" "}/ {String(GROUP_COUNT).padStart(2, "0")}
            </span>
          </span>

          <div className="chip2-outcomes__arrows">
            <button
              type="button"
              className="chip2-outcomes__arrow"
              aria-label="Previous capability"
              onClick={goPrevious}
            >
              <span aria-hidden="true">←</span>
            </button>

            <button
              type="button"
              className="chip2-outcomes__arrow"
              aria-label="Next capability"
              onClick={goNext}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* Horizontal looping slider */}

        <div
          className="chip2-outcomes__track"
          ref={trackRef}
          role="region"
          aria-label="CHIP2EXPERIENCE2OUTCOMES capability cards"
        >
          {repeatedCapabilityGroups.map((group, virtualIndex) => {
            const isActive =
              virtualIndex === activeVirtualIndex;

            const logicalIndex = virtualIndex % GROUP_COUNT;

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
                ].join(" ")}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                aria-label={`${group.title}${isActive ? ", active card" : ", activate card"}`}
                onClick={() => activateCard(virtualIndex)}
                onKeyDown={(event) =>
                  handleCardKeyDown(event, virtualIndex)
                }
              >
                {/* Card header */}

                <div className="chip2-outcomes__card-header">
                  <span className="chip2-outcomes__card-index">
                    {String(logicalIndex + 1).padStart(2, "0")}
                  </span>

                  <span className="chip2-outcomes__card-kicker">
                    CAPABILITY GROUP
                  </span>

                  <h3>{group.title}</h3>
                </div>

                {/* Numbered capability items */}

                <div className="chip2-outcomes__items">
                  {group.items.map((item) => (
                    <div
                      className="chip2-outcomes__item"
                      key={item.number}
                    >
                      <span className="chip2-outcomes__number">
                        {String(item.number).padStart(2, "0")}
                      </span>

                      <div className="chip2-outcomes__item-content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card footer */}

                <div className="chip2-outcomes__card-footer">
                  <span>
                    {String(group.items.length).padStart(2, "0")}{" "}
                    {group.items.length === 1
                      ? "CAPABILITY"
                      : "CAPABILITIES"}
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

        {/* Pagination */}

        <div
          className="chip2-outcomes__pagination"
          aria-label="Choose capability group"
        >
          {capabilityGroups.map((group, index) => (
            <button
              key={group.id}
              type="button"
              aria-label={`Show ${group.title}`}
              aria-current={
                index === activeIndex ? "true" : undefined
              }
              className={[
                "chip2-outcomes__pagination-dot",
                index === activeIndex ? "is-active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() =>
                activateCard(GROUP_COUNT + index)
              }
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
