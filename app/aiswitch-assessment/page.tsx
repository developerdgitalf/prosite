
"use client";

import { useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import "./assessment.css";

/* =========================================
   ASSESSMENT TYPES
========================================= */

type AssessmentQuestion = {
  id: string;
  prompt: string;
  options: [string, string, string, string];
};

type AssessmentDimension = {
  id: string;
  title: string;
  chartLabel: string;
  questions: AssessmentQuestion[];
};

type DimensionScore = {
  id: string;
  label: string;
  score: number;
};

/* =========================================
   AISWITCH PREVIEW QUESTIONS
   Four maturity choices per question
========================================= */

const dimensions: AssessmentDimension[] = [
  {
    id: "strategy",
    title: "AI Strategy",
    chartLabel: "Strategy",
    questions: [
      {
        id: "1.1",
        prompt:
          "Do you have a structured, formal AI Strategy formulation and review process and practices in place that are widely practiced across the enterprise and partner ecosystems?",
        options: [
          "No formal AI strategy formulation and review process exists.",
          "AI strategy is discussed informally but is not documented.",
          "A documented AI strategy formulation process exists and is shared with key stakeholders.",
          "Clear, well-documented AI strategy formulation and review practices are fully functional, integrated with overall business strategy, and communicated across the enterprise and its ecosystems.",
        ],
      },
      {
        id: "1.2",
        prompt:
          "Do you have a formal and functional AI financial management process to track and benchmark AI services and use-case total cost of ownership, cost and ROI?",
        options: [
          "Minimal to no visibility into AI financials.",
          "Project-level cost visibility only.",
          "Input costs, such as API, computing and service costs, are tracked.",
          "A full-fledged AI financial management process continuously monitors costs versus benefits and benchmarks AI outcomes and ROI against business KPIs.",
        ],
      },
      {
        id: "1.3",
        prompt:
          "Do you have a formal and fully implemented AI risk management process across the organisation and partner ecosystems?",
        options: [
          "No formal AI risk management process.",
          "Ad-hoc, project-by-project AI risk management.",
          "Centralised basic risk management for AI experimentation exists.",
          "A detailed, formal AI risk management process is practised across the organisation and its ecosystems, covering GRC, security and legal requirements.",
        ],
      },
      {
        id: "1.4",
        prompt:
          "Do you have a formal AI Strategic Outcomes management process to measure, benchmark and discover best practices for AI impact across financial, customer, internal and knowledge dimensions?",
        options: [
          "Success is not formally measured.",
          "Only technical metrics, such as model accuracy, are measured.",
          "Limited project-level business outcomes, such as cost savings, are measured.",
          "A well-practised strategic outcomes process measures business impact, transformation and market outcomes, with peer benchmarking and board-level visibility through value dashboards.",
        ],
      },
    ],
  },
  {
    id: "workforce",
    title: "AI Workforce",
    chartLabel: "Workforce",
    questions: [
      {
        id: "2.1",
        prompt:
          "Do you have a formal AI Centre of Excellence (CoE) setup and review process, with resources planned and allocated using industry best practices?",
        options: [
          "No formal AI CoE setup.",
          "A small experimental AI CoE exists, but there is no formal mandate, funding or resource plan.",
          "A centralised CoE is in place with adequate resources and funding.",
          "A well-governed, unified data and AI CoE has clear sponsorship, funding, leadership and board visibility, is integrated with risk and governance offices, and regularly reviews and improves its practices.",
        ],
      },
      {
        id: "2.2",
        prompt:
          "What is the state of your AI upskilling, cross-skilling and resource management process?",
        options: [
          "No formal process exists.",
          "Some point solutions and programmes are delivered and run by partners and providers.",
          "A formal, well-practised AI skills management process identifies relevant training, certification needs and resources in collaboration with business and technology teams.",
          "A scalable, dynamic, needs-based skills process scans new technology and competitive opportunities and proactively trains the relevant workforce.",
        ],
      },
      {
        id: "2.3",
        prompt:
          "Do you have an established role, KPI, KRA and career roadmapping process within the AI CoE and enterprise AI practice?",
        options: [
          "No formal process.",
          "Basic roles are in place for the AI CoE.",
          "A formal AI role, KPI, KRA and career management process exists, but peer benchmarking is limited.",
          "Robust AI role enhancement and career mapping processes operate across the CoE and enterprise, benchmarked against peer practices and advisory ecosystems.",
        ],
      },
      {
        id: "2.4",
        prompt:
          "Do you have an established process for AI workforce cost management?",
        options: [
          "No visibility into AI-related workforce and talent costs.",
          "Project-level resource visibility exists.",
          "A standardised resource cost model is available.",
          "AI workforce cost management covers acquisition, training, certifications, impact, rewards and retention, using industry benchmarks across the CoE and enterprise ecosystem.",
        ],
      },
    ],
  },
  {
    id: "information",
    title: "Information (Data)",
    chartLabel: "Information",
    questions: [
      {
        id: "3.1",
        prompt:
          "What is the status of your AI information and data security management process?",
        options: [
          "No specific AI information security management process.",
          "Basic data security systems are in place, but accountability is not clearly defined.",
          "Enterprise data security systems and roles exist, but visibility into data catalogues, ownership, privacy and GRC is limited.",
          "A robust AI information security process operates across AI applications and DataOps, with CISO/GRC integration, recognised standards and clear accountability for data incidents.",
        ],
      },
      {
        id: "3.2",
        prompt:
          "How robust is your information and data relevance, model latency and lifecycle management process?",
        options: [
          "No clear information relevance or lifecycle management process is in place.",
          "Basic DataOps and ModelOps tools exist, but processes and KPIs are not defined.",
          "AI CoE leaders have established functional DataOps and ModelOps processes and tools with clear accountability and auditability.",
          "Information relevance and lifecycle management processes and tools are widely adopted across all AI applications, the AI CoE and enterprise user communities.",
        ],
      },
      {
        id: "3.3",
        prompt:
          "What is the status of your AI information and data quality management process, including bias, noise and change management?",
        options: [
          "No clearly established data quality management process for AI.",
          "Project-specific data quality management.",
          "Data quality management tools are widely used, but quality assurance, audit results and impact visibility are limited.",
          "Formal data quality practices, tools and dashboards operate across AI development and applications, with clear accountability, bias/noise checks, red teaming and extreme testing.",
        ],
      },
    ],
  },
  {
    id: "technology",
    title: "Technology",
    chartLabel: "Technology",
    questions: [
      {
        id: "4.1",
        prompt:
          "Do you have a formal AI technology infrastructure and operations services management process covering availability, capacity, reliability, service-level management and business continuity/disaster recovery?",
        options: [
          "AI applications are managed like any other IT application.",
          "Specific processes and partner tools manage some critical AI infrastructure and operations in isolated silos.",
          "A full-fledged AI technology infrastructure and operations process is defined and operating across enterprise AI applications.",
          "A comprehensive process spans chips to services, leverages AIOps tools and uses AI for autonomous resolution, with human intervention for exceptions.",
        ],
      },
      {
        id: "4.2",
        prompt:
          "Do you have a green, energy-efficient AI technology infrastructure design and delivery process?",
        options: [
          "No established process promotes green AI.",
          "Developers know green AI techniques, but no formal process prioritises them.",
          "A clear process encourages developers, testers and users to select and optimise energy-efficient AI infrastructure.",
          "Green and responsible AI is mandated by a formally accountable and regularly audited process using energy-efficiency benchmarks and industry best practices.",
        ],
      },
      {
        id: "4.3",
        prompt:
          "Do you have an AI technology change and innovation management process?",
        options: [
          "No specific AI technology innovation or change management process exists.",
          "A basic AI technology change management process is in place.",
          "A proactive AI technology innovation and change management process is established for AI CoE leaders.",
          "The entire organisation proactively scans the technology landscape and adopts relevant innovations based on emerging technologies and competitive applications.",
        ],
      },
    ],
  },
  {
    id: "culture",
    title: "AI Culture",
    chartLabel: "Culture",
    questions: [
      {
        id: "5.1",
        prompt:
          "Have you established an AI organisational change management process?",
        options: [
          "No organisational change process associated with AI exists.",
          "Limited project-specific change initiatives are run by partners, but no formal, repeatable process exists.",
          "A formal AI-specific change management process is mandated and adopted, with responsibilities and accountabilities defined.",
          "A proactive AI change management process operates across the organisation and partner ecosystem, with clear accountability, board visibility and CXO KPIs/KRAs.",
        ],
      },
      {
        id: "5.2",
        prompt:
          "Do you have a formal process for AI adoption management and governance?",
        options: [
          "No AI adoption management process is in place.",
          "A basic AI adoption management process is in place but is not widely practised.",
          "A formal AI adoption management process exists, with clear accountability and governance.",
          "A comprehensive AI adoption management process operates with clear accountability, governance and metrics for adoption and impact.",
        ],
      },
      {
        id: "5.3",
        prompt:
          "Do you have a formal AI ethics and responsible AI process?",
        options: [
          "No formal AI ethics process exists.",
          "Basic AI ethics guidelines are available but not enforced.",
          "A formal AI ethics and responsible AI process is in place, with clear guidelines and governance.",
          "A comprehensive AI ethics and responsible AI process operates with clear guidelines, governance and metrics for compliance and impact.",
        ],
      },
    ],
  },
  {
    id: "augmentation",
    title: "Human AI Augmentation",
    chartLabel: "Augmentation",
    questions: [
      {
        id: "6.1",
        prompt:
          "Do you have a formal process for AI-human collaboration and augmentation?",
        options: [
          "No formal process exists.",
          "Basic AI-human collaboration guidelines are available but not enforced.",
          "A formal AI-human collaboration process is in place, with clear guidelines and governance.",
          "A comprehensive AI-human collaboration process operates with clear guidelines, governance and metrics for collaboration effectiveness and impact.",
        ],
      },
      {
        id: "6.2",
        prompt:
          "Do you have a formal process for AI-enabled decision making?",
        options: [
          "No formal process exists.",
          "Basic AI-enabled decision-making guidelines are available but not enforced.",
          "A formal AI-enabled decision-making process is in place, with clear guidelines and governance.",
          "A comprehensive AI-enabled decision-making process operates with clear guidelines, governance and metrics for decision quality and impact.",
        ],
      },
      {
        id: "6.3",
        prompt:
          "Do you have a formal process for AI-enabled innovation and creativity?",
        options: [
          "No formal process exists.",
          "Basic AI-enabled innovation guidelines are available but not enforced.",
          "A formal AI-enabled innovation process is in place, with clear guidelines and governance.",
          "A comprehensive AI-enabled innovation process operates with clear guidelines, governance and metrics for innovation effectiveness and impact.",
        ],
      },
    ],
  },
];

const QUESTION_COUNT = dimensions.reduce(
  (total, dimension) => total + dimension.questions.length,
  0
);

/* =========================================
   SCORING
   Four response levels map evenly from 1 to 5.
========================================= */

function calculateDimensionScore(
  dimension: AssessmentDimension,
  answers: Record<string, number>
): number {
  const levels = dimension.questions
    .map((question) => answers[question.id])
    .filter((answer): answer is number => answer !== undefined)
    .map((answer) => answer + 1);

  if (levels.length === 0) return 0;

  const averageLevel =
    levels.reduce((total, level) => total + level, 0) / levels.length;

  return Math.round((1 + ((averageLevel - 1) * 4) / 3) * 10) / 10;
}

/* =========================================
   SPIDER / RADAR CHART
========================================= */

type RadarChartProps = {
  scores: DimensionScore[];
  chartRef: React.RefObject<SVGSVGElement | null>;
};

function RadarChart({ scores, chartRef }: RadarChartProps) {
  const cx = 310;
  const cy = 245;
  const radius = 143;

  const getPoint = (index: number, value: number) => {
    const angle = ((-90 + index * 60) * Math.PI) / 180;
    const distance = (Math.max(0, Math.min(5, value)) / 5) * radius;

    return {
      x: cx + Math.cos(angle) * distance,
      y: cy + Math.sin(angle) * distance,
    };
  };

  const getRingPoints = (level: number) =>
    scores
      .map((_, index) => {
        const point = getPoint(index, level);
        return `${point.x},${point.y}`;
      })
      .join(" ");

  const scorePoints = scores
    .map((score, index) => getPoint(index, score.score))
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  return (
    <svg
      ref={chartRef}
      className="assessment-radar"
      viewBox="0 0 620 470"
      role="img"
      aria-label="Radar chart showing AI maturity scores out of five across six dimensions"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="620" height="470" fill="#f8fafc" />

      {/* Legend */}
      <rect
        x="184"
        y="19"
        width="24"
        height="11"
        fill="#3b82f6"
        fillOpacity="0.18"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <text
        x="217"
        y="29"
        fill="#626b78"
        fontSize="12"
        fontFamily="Arial, sans-serif"
      >
        Your AI Maturity Score (1–5)
      </text>

      {/* Hexagonal score grid */}
      {[1, 2, 3, 4, 5].map((level) => (
        <g key={level}>
          <polygon
            points={getRingPoints(level)}
            fill="none"
            stroke="#dce2e8"
            strokeWidth="1.2"
          />
          <text
            x={cx}
            y={cy - (radius * level) / 5 - 5}
            textAnchor="middle"
            fill="#737b87"
            fontSize="11"
            fontFamily="Arial, sans-serif"
          >
            {level}
          </text>
        </g>
      ))}

      {/* Axes */}
      {scores.map((score, index) => {
        const point = getPoint(index, 5);

        return (
          <line
            key={`axis-${score.id}`}
            x1={cx}
            y1={cy}
            x2={point.x}
            y2={point.y}
            stroke="#dce2e8"
            strokeWidth="1.2"
          />
        );
      })}

      {/* Score polygon */}
      <polygon
        points={scorePoints}
        fill="#3b82f6"
        fillOpacity="0.2"
        stroke="#3b82f6"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Score points */}
      {scores.map((score, index) => {
        const point = getPoint(index, score.score);

        return (
          <circle
            key={`point-${score.id}`}
            cx={point.x}
            cy={point.y}
            r="4.5"
            fill="#3b82f6"
            stroke="#ffffff"
            strokeWidth="2"
          />
        );
      })}

      {/* Dimension labels */}
      {scores.map((score, index) => {
        const point = getPoint(index, 6.1);
        const angle = (-90 + index * 60) * (Math.PI / 180);
        const cosine = Math.cos(angle);

        return (
          <text
            key={`label-${score.id}`}
            x={point.x}
            y={point.y + 4}
            textAnchor={
              cosine > 0.25
                ? "start"
                : cosine < -0.25
                  ? "end"
                  : "middle"
            }
            fill="#263344"
            fontSize="12"
            fontWeight="600"
            fontFamily="Arial, sans-serif"
          >
            {score.label}
          </text>
        );
      })}
    </svg>
  );
}

/* =========================================
   MAIN ASSESSMENT PAGE
========================================= */

export default function AISwitchAssessmentPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [openDimension, setOpenDimension] = useState("strategy");
  const [view, setView] = useState<"assessment" | "results">("assessment");
  const [feedback, setFeedback] = useState("");
  const [downloadMessage, setDownloadMessage] = useState("");

  const chartRef = useRef<SVGSVGElement>(null);

  const scoreRows = useMemo(
    () =>
      dimensions.map((dimension) => ({
        id: dimension.id,
        label: dimension.title,
        score: calculateDimensionScore(dimension, answers),
      })),
    [answers]
  );

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === QUESTION_COUNT;

  const chooseAnswer = (questionId: string, optionIndex: number) => {
    setAnswers((current) => ({
      ...current,
      [questionId]: optionIndex,
    }));
    setFeedback("");
  };

  const handleFinish = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const missingDimension = dimensions.find((dimension) =>
      dimension.questions.some(
        (question) => answers[question.id] === undefined
      )
    );

    if (missingDimension) {
      const firstMissing = missingDimension.questions.find(
        (question) => answers[question.id] === undefined
      );

      setOpenDimension(missingDimension.id);
      setFeedback(
        `Please answer every question before viewing your results. ${answeredCount} of ${QUESTION_COUNT} answered.`
      );

      if (firstMissing) {
        window.setTimeout(() => {
          document
            .getElementById(`question-${firstMissing.id.replace(".", "-")}`)
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }

      return;
    }

    setFeedback("");
    setView("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const downloadChart = () => {
    const svg = chartRef.current;

    if (!svg) return;

    setDownloadMessage("");

    const clonedSvg = svg.cloneNode(true) as SVGSVGElement;
    clonedSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    clonedSvg.setAttribute("width", "1240");
    clonedSvg.setAttribute("height", "940");

    const serializedSvg = new XMLSerializer().serializeToString(clonedSvg);
    const svgBlob = new Blob([serializedSvg], {
      type: "image/svg+xml;charset=utf-8",
    });

    const imageUrl = URL.createObjectURL(svgBlob);
    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1240;
      canvas.height = 940;

      const context = canvas.getContext("2d");

      if (!context) {
        URL.revokeObjectURL(imageUrl);
        setDownloadMessage("Your browser could not create the image.");
        return;
      }

      context.fillStyle = "#f8fafc";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        URL.revokeObjectURL(imageUrl);

        if (!blob) {
          setDownloadMessage("The image could not be downloaded. Please try again.");
          return;
        }

        const pngUrl = URL.createObjectURL(blob);
        const downloadLink = document.createElement("a");

        downloadLink.href = pngUrl;
        downloadLink.download = "aiswitch-maturity-assessment.png";
        downloadLink.click();

        URL.revokeObjectURL(pngUrl);
      }, "image/png");
    };

    image.onerror = () => {
      URL.revokeObjectURL(imageUrl);
      setDownloadMessage("The chart image could not be created in this browser.");
    };

    image.src = imageUrl;
  };

  const restartAssessment = () => {
    setAnswers({});
    setOpenDimension("strategy");
    setFeedback("");
    setDownloadMessage("");
    setView("assessment");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="assessment-page__header">
        <SiteHeader />
      </div>

      <main className="aiswitch-assessment">
        {view === "assessment" ? (
          <>
            {/* Assessment introduction */}
            <section className="assessment-hero">
              <p className="assessment-hero__eyebrow">AISWITCH™</p>

              <h1>AI Maturity Assessment (Preview)</h1>

              <p className="assessment-hero__description">
                Evaluate your organisation&apos;s AI Practice Competitive
                Leverage across six critical dimensions of the AISWITCH™
                Enterprise AISM framework: AI Strategy, Workforce,
                Information, Technology, Culture and Human AI Augmentation.
              </p>

              <p className="assessment-hero__note">
                <strong>NOTE:</strong> This is a preview assessment to give
                you an example. A full analyst-led assessment involves a
                comprehensive evaluation of your organisation&apos;s AI
                capabilities across People, Process, Tools and Outcomes
                (Metrics).
              </p>

              <div
                className="assessment-progress"
                aria-live="polite"
                aria-atomic="true"
              >
                <div className="assessment-progress__text">
                  <span>Assessment progress</span>
                  <strong>
                    {answeredCount} / {QUESTION_COUNT}
                  </strong>
                </div>

                <div
                  className="assessment-progress__track"
                  role="progressbar"
                  aria-label="Questions answered"
                  aria-valuemin={0}
                  aria-valuemax={QUESTION_COUNT}
                  aria-valuenow={answeredCount}
                >
                  <div
                    className="assessment-progress__value"
                    style={{
                      width: `${(answeredCount / QUESTION_COUNT) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </section>

            {/* Expandable dimensions and questions */}
            <form className="assessment-form" onSubmit={handleFinish}>
              <div className="assessment-dimensions">
                {dimensions.map((dimension, dimensionIndex) => {
                  const isOpen = openDimension === dimension.id;

                  const completedQuestions = dimension.questions.filter(
                    (question) => answers[question.id] !== undefined
                  ).length;

                  return (
                    <section
                      className={`assessment-dimension ${
                        isOpen ? "is-open" : ""
                      }`}
                      key={dimension.id}
                    >
                      <button
                        className="assessment-dimension__toggle"
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`dimension-panel-${dimension.id}`}
                        onClick={() =>
                          setOpenDimension(isOpen ? "" : dimension.id)
                        }
                      >
                        <span className="assessment-dimension__title">
                          <span>{dimensionIndex + 1}.</span>{" "}
                          {dimension.title}
                        </span>

                        <span className="assessment-dimension__status">
                          {completedQuestions > 0 && (
                            <span className="assessment-dimension__completed">
                              {completedQuestions}/{dimension.questions.length}
                            </span>
                          )}

                          <span
                            className="assessment-dimension__icon"
                            aria-hidden="true"
                          >
                            {isOpen ? "−" : "+"}
                          </span>
                        </span>
                      </button>

                      {isOpen && (
                        <div
                          className="assessment-dimension__panel"
                          id={`dimension-panel-${dimension.id}`}
                        >
                          {dimension.questions.map((question) => {
                            const selectedAnswer = answers[question.id];

                            return (
                              <article
                                className="assessment-question"
                                id={`question-${question.id.replace(".", "-")}`}
                                key={question.id}
                              >
                                <div className="assessment-question__heading">
                                  <span className="assessment-question__number">
                                    {question.id}
                                  </span>

                                  <h3>{question.prompt}</h3>
                                </div>

                                <div
                                  className="assessment-options"
                                  role="radiogroup"
                                  aria-label={`Question ${question.id}`}
                                >
                                  {question.options.map((option, optionIndex) => {
                                    const isSelected =
                                      selectedAnswer === optionIndex;

                                    return (
                                      <label
                                        className={`assessment-option ${
                                          isSelected ? "is-selected" : ""
                                        }`}
                                        key={optionIndex}
                                      >
                                        <input
                                          type="radio"
                                          name={`question-${question.id}`}
                                          value={optionIndex}
                                          checked={isSelected}
                                          onChange={() =>
                                            chooseAnswer(
                                              question.id,
                                              optionIndex
                                            )
                                          }
                                          aria-label={`Maturity level ${optionIndex + 1}: ${option}`}
                                        />

                                        <span className="assessment-option__radio" />

                                        <span className="assessment-option__text">
                                          {option}
                                        </span>
                                      </label>
                                    );
                                  })}
                                </div>
                              </article>
                            );
                          })}
                        </div>
                      )}
                    </section>
                  );
                })}
              </div>

              {feedback && (
                <p className="assessment-form__feedback" role="alert">
                  {feedback}
                </p>
              )}

              <div className="assessment-form__actions">
                <button
                  className="assessment-primary-button"
                  type="submit"
                >
                  <span>
                    {allAnswered
                      ? "View Assessment Results"
                      : "Please Answer All Questions"}
                  </span>

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
                </button>

                <p>
                  {answeredCount} of {QUESTION_COUNT} questions answered
                </p>
              </div>
            </form>
          </>
        ) : (
          /* =====================================
             DYNAMIC RESULTS PAGE
          ====================================== */
          <section className="assessment-results">
            <div className="assessment-results__brand-row">
              <span className="assessment-results__brand">
                prosight<span>™</span>
              </span>

              <span className="assessment-results__report-label">
                AISWITCH™ PREVIEW REPORT
              </span>
            </div>

            <header className="assessment-results__header">
              <p className="assessment-results__eyebrow">
                AISWITCH™
              </p>

              <h1>Your AI Maturity Assessment Results</h1>

              <p>
                Here&apos;s how your organisation scores across the six
                dimensions of the AISWITCH™ framework.
              </p>
            </header>

            <div className="assessment-results__analysis">
              <div className="assessment-results__chart">
                <RadarChart scores={scoreRows} chartRef={chartRef} />
              </div>

              <section
                className="assessment-results__scores"
                aria-labelledby="assessment-scores-title"
              >
                <h2 id="assessment-scores-title">
                  Your AI Maturity Scores
                </h2>

                <div className="assessment-results__table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Dimension</th>
                        <th scope="col">Score (out of 5)</th>
                      </tr>
                    </thead>

                    <tbody>
                      {scoreRows.map((row) => (
                        <tr key={row.id}>
                          <td>{row.label}</td>
                          <td>{row.score.toFixed(1)}</td>
                        </tr>
                      ))}
                    </tbody>

                    <tfoot>
                      <tr>
                        <th scope="row">Overall average</th>
                        <th>
                          {(
                            scoreRows.reduce(
                              (total, row) => total + row.score,
                              0
                            ) / scoreRows.length
                          ).toFixed(1)}
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <p className="assessment-results__scoring-note">
                  Scores are based on your selected maturity levels. The
                  four response levels are linearly mapped to a scale of
                  1–5; each dimension is averaged across its questions.
                  These results are illustrative and are not an
                  analyst-certified assessment.
                </p>
              </section>
            </div>

            <div className="assessment-results__actions">
              <button
                className="assessment-primary-button"
                type="button"
                onClick={downloadChart}
              >
                <span>Download as Image</span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 3v12m-5-5 5 5 5-5M5 18v3h14v-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <Link
                href="/contact"
                className="assessment-primary-button assessment-primary-button--secondary"
              >
                Enquire
              </Link>

              <button
                className="assessment-results__restart"
                type="button"
                onClick={restartAssessment}
              >
                Retake assessment
              </button>
            </div>

            {downloadMessage && (
              <p className="assessment-results__download-message" role="status">
                {downloadMessage}
              </p>
            )}

            <div className="assessment-results__thank-you">
              <h2>Thank You!</h2>

              <p>
                Thank you for taking the AISWITCH™ Preview Assessment.
                For a full, analyst-led AI Maturity Assessment, contact
                the PROSIGHT team.
              </p>

              <a href="mailto:info@prosight-aism.com">
                info@prosight-aism.com
              </a>
            </div>

            <p className="assessment-results__disclaimer">
              PROSIGHT™ is a pure-play AI Services Company. This preview
              provides indicative scores from your answers and is not a
              substitute for a comprehensive professional assessment.
            </p>
          </section>
        )}
      </main>

      <SiteFooter />
    </>
  );
}
