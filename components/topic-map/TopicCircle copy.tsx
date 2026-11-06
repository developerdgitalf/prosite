"use client";

import type { KeyboardEvent } from "react";
import type { IntelligenceTopic } from "./topics";

type TopicCircleProps = {
  topics: IntelligenceTopic[];
  selectedTopic: IntelligenceTopic;
  relatedTopics: IntelligenceTopic[];
  onSelectTopic: (topicId: string) => void;
};

type Point = { x: number; y: number };

const CX = 500;
const CY = 500;
const OUTER_RADIUS = 327;
const OUTER_LABEL_RADIUS = 385;
const INNER_RADIUS = 192;
const CENTER_RADIUS = 105;

// Normalize calculated SVG coordinates so Node.js and the browser generate
// exactly the same markup during server rendering and hydration. Tiny
// Math.sin/Math.cos floating-point differences can otherwise trigger a
// React hydration mismatch (for example, 789.0088375222988 vs .2989).
function roundSvgCoordinate(value: number): number {
  return Math.round(value * 1000) / 1000;
}

function pointAt(radius: number, angleDegrees: number): Point {
  const radians = (angleDegrees * Math.PI) / 180;
  return {
    x: roundSvgCoordinate(CX + Math.cos(radians) * radius),
    y: roundSvgCoordinate(CY + Math.sin(radians) * radius),
  };
}

function wrapLabel(title: string, maxLength = 15): string[] {
  const words = title.split(/\s+/);
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;

    if (candidate.length > maxLength && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }

  if (line) lines.push(line);
  return lines.slice(0, 3);
}

function shortMonogram(title: string): string {
  const words = title
    .replace(/[’']/g, "")
    .split(/\s+/)
    .filter((word) => !["and", "the", "of", "to"].includes(word.toLowerCase()));

  if (words.length === 1) return words[0].slice(0, 3).toUpperCase();
  return words.slice(0, 3).map((word) => word[0]).join("").toUpperCase();
}

function handleTopicKeyDown(
  event: KeyboardEvent<SVGGElement>,
  topicId: string,
  onSelectTopic: (topicId: string) => void
) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    onSelectTopic(topicId);
  }
}

export default function TopicCircle({
  topics,
  selectedTopic,
  relatedTopics,
  onSelectTopic,
}: TopicCircleProps) {
  const safeRelated = relatedTopics.slice(0, 7);
  const relatedPoints = safeRelated.map((topic, index) => ({
    topic,
    index,
    angle: -90 + (index * 360) / Math.max(safeRelated.length, 1),
    point: pointAt(INNER_RADIUS, -90 + (index * 360) / Math.max(safeRelated.length, 1)),
  }));

  const outerPoints = topics.map((topic, index) => {
    const angle = -90 + (index * 360) / topics.length;
    return {
      topic,
      index,
      angle,
      point: pointAt(OUTER_RADIUS, angle),
      labelPoint: pointAt(OUTER_LABEL_RADIUS, angle),
    };
  });

  const relatedIndexById = new Map(
    relatedPoints.map((item) => [item.topic.id, item.index])
  );

  const connectionPaths: Array<{
    key: string;
    d: string;
    emphasized: boolean;
  }> = [];

  outerPoints.forEach((outer) => {
    const matchedRelated = relatedPoints.filter(
      (inner) =>
        outer.topic.id === inner.topic.id ||
        outer.topic.relatedTopicIds.includes(inner.topic.id) ||
        inner.topic.relatedTopicIds.includes(outer.topic.id)
    );

    const fallbackIndexes = [
      outer.index % Math.max(relatedPoints.length, 1),
      (outer.index * 3 + 2) % Math.max(relatedPoints.length, 1),
    ];

    const lines = matchedRelated.length
      ? matchedRelated
      : fallbackIndexes
          .map((index) => relatedPoints[index])
          .filter((item): item is (typeof relatedPoints)[number] => Boolean(item));

    lines.forEach((inner, lineIndex) => {
      const bendX = roundSvgCoordinate(CX + (outer.point.x - CX) * 0.35);
      const bendY = roundSvgCoordinate(CY + (outer.point.y - CY) * 0.35);

      connectionPaths.push({
        key: `${outer.topic.id}-${inner.topic.id}-${lineIndex}`,
        d: `M ${outer.point.x} ${outer.point.y} Q ${bendX} ${bendY} ${inner.point.x} ${inner.point.y}`,
        emphasized:
          outer.topic.id === selectedTopic.id ||
          outer.topic.id === inner.topic.id ||
          selectedTopic.relatedTopicIds.includes(outer.topic.id),
      });
    });
  });

  const centralTitleLines = wrapLabel(selectedTopic.title, 18).slice(0, 3);
  const titleStartY = CY + (centralTitleLines.length === 1 ? 30 : centralTitleLines.length === 2 ? 18 : 6);

  return (
    <div className="topic-circle" aria-label="Interactive connected topic map">
      <svg
        className="topic-circle__svg"
        viewBox="0 0 1000 1000"
        role="group"
        aria-label={`Topic network centred on ${selectedTopic.title}`}
      >
        <defs>
          <radialGradient id="topic-map-center-gradient" cx="35%" cy="20%" r="85%">
            <stop offset="0%" stopColor="#2a83c7" />
            <stop offset="53%" stopColor="#143c69" />
            <stop offset="100%" stopColor="#091626" />
          </radialGradient>
          <linearGradient id="topic-map-center-shine" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <clipPath id="topic-map-center-clip">
            <circle cx={CX} cy={CY} r={CENTER_RADIUS - 4} />
          </clipPath>
          <filter id="topic-map-node-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        {/* Outer ring */}
        <circle
          className="topic-circle__outer-ring"
          cx={CX}
          cy={CY}
          r={OUTER_RADIUS}
        />

        {/* Quiet inner ring */}
        <circle
          className="topic-circle__inner-ring"
          cx={CX}
          cy={CY}
          r={INNER_RADIUS + 35}
        />

        {/* Network connections */}
        <g className="topic-circle__connections" aria-hidden="true">
          {connectionPaths.map((connection) => (
            <path
              key={connection.key}
              d={connection.d}
              className={connection.emphasized ? "is-emphasized" : ""}
            />
          ))}

          {relatedPoints.map(({ topic, point }) => (
            <path
              key={`center-${topic.id}`}
              d={`M ${CX} ${CY} L ${point.x} ${point.y}`}
              className="topic-circle__center-connection"
            />
          ))}
        </g>

        {/* All topics on the outside of the circle */}
        <g className="topic-circle__outer-topics">
          {outerPoints.map(({ topic, index, angle, point, labelPoint }) => {
            const active = topic.id === selectedTopic.id;
            const normalizedAngle = (angle + 360) % 360;
            let rotation = angle;
            if (normalizedAngle > 90 && normalizedAngle < 270) {
              rotation += 180;
            }
            const lines = wrapLabel(topic.title, 15);
            const startY = labelPoint.y - ((lines.length - 1) * 6);

            return (
              <g
                key={topic.id}
                className={`topic-circle__outer-topic ${active ? "is-active" : ""}`}
                role="button"
                tabIndex={0}
                aria-label={`Select topic: ${topic.title}`}
                aria-pressed={active}
                onClick={() => onSelectTopic(topic.id)}
                onKeyDown={(event) =>
                  handleTopicKeyDown(event, topic.id, onSelectTopic)
                }
              >
                <circle
                  className="topic-circle__outer-hit-area"
                  cx={point.x}
                  cy={point.y}
                  r="19"
                />
                {active && (
                  <circle
                    className="topic-circle__outer-glow"
                    cx={point.x}
                    cy={point.y}
                    r="12"
                    filter="url(#topic-map-node-glow)"
                  />
                )}
                <circle
                  className="topic-circle__outer-node"
                  cx={point.x}
                  cy={point.y}
                  r={active ? 10.5 : 8.8}
                />
                <text
                  className="topic-circle__outer-label"
                  x={labelPoint.x}
                  y={startY}
                  transform={`rotate(${rotation} ${labelPoint.x} ${labelPoint.y})`}
                  textAnchor="middle"
                >
                  {lines.map((line, lineIndex) => (
                    <tspan
                      key={`${topic.id}-label-${lineIndex}`}
                      x={labelPoint.x}
                      dy={lineIndex === 0 ? 0 : 13}
                    >
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}
        </g>

        {/* Inner, currently relevant topics */}
        <g className="topic-circle__related-topics">
          {relatedPoints.map(({ topic, index, angle, point }) => {
            const active = topic.id === selectedTopic.id;
            const labelPoint = pointAt(INNER_RADIUS + 43, angle);
            const labelLines = wrapLabel(topic.title, 17).slice(0, 2);
            const anchor = labelPoint.x < CX ? "end" : "start";
            const xOffset = labelPoint.x < CX ? -9 : 9;
            const labelY = labelPoint.y - ((labelLines.length - 1) * 7);

            return (
              <g
                key={`related-${topic.id}-${index}`}
                className={`topic-circle__related-topic ${active ? "is-selected" : ""}`}
                role="button"
                tabIndex={0}
                aria-label={`Explore related topic: ${topic.title}`}
                onClick={() => onSelectTopic(topic.id)}
                onKeyDown={(event) =>
                  handleTopicKeyDown(event, topic.id, onSelectTopic)
                }
              >
                <circle
                  className="topic-circle__related-hit-area"
                  cx={point.x}
                  cy={point.y}
                  r="28"
                />
                <circle
                  className="topic-circle__related-node"
                  cx={point.x}
                  cy={point.y}
                  r={active ? 15 : 12.5}
                />
                <text
                  className="topic-circle__related-label"
                  x={labelPoint.x + xOffset}
                  y={labelY}
                  textAnchor={anchor}
                >
                  {labelLines.map((line, lineIndex) => (
                    <tspan
                      key={`${topic.id}-inner-${lineIndex}`}
                      x={labelPoint.x + xOffset}
                      dy={lineIndex === 0 ? 0 : 15}
                    >
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}
        </g>

        {/* Centre topic visual */}
        <g className="topic-circle__center">
          <circle
            className="topic-circle__center-halo"
            cx={CX}
            cy={CY}
            r={CENTER_RADIUS + 13}
          />
          <circle
            cx={CX}
            cy={CY}
            r={CENTER_RADIUS}
            fill="url(#topic-map-center-gradient)"
          />

          {selectedTopic.image && (
            <image
              href={selectedTopic.image}
              x={CX - CENTER_RADIUS + 4}
              y={CY - CENTER_RADIUS + 4}
              width={(CENTER_RADIUS - 4) * 2}
              height={(CENTER_RADIUS - 4) * 2}
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#topic-map-center-clip)"
            />
          )}

          {/* Abstract network artwork remains visible without a supplied image */}
          {!selectedTopic.image && (
            <g className="topic-circle__center-art" clipPath="url(#topic-map-center-clip)">
              <circle cx={CX - 28} cy={CY - 43} r="75" fill="url(#topic-map-center-shine)" />
              {[0, 1, 2, 3, 4].map((index) => (
                <line
                  key={`art-line-${index}`}
                  x1={CX - 95 + index * 32}
                  y1={CY - 55 + (index % 2) * 12}
                  x2={CX - 50 + index * 30}
                  y2={CY + 70 - (index % 3) * 18}
                />
              ))}
              {[
                [CX - 54, CY - 30],
                [CX + 15, CY - 52],
                [CX + 52, CY + 5],
                [CX - 16, CY + 45],
                [CX - 68, CY + 36],
                [CX + 18, CY + 58],
              ].map(([x, y], index) => (
                <circle key={`art-node-${index}`} cx={x} cy={y} r="4.5" />
              ))}
            </g>
          )}

          <circle
            cx={CX}
            cy={CY}
            r={CENTER_RADIUS}
            className="topic-circle__center-overlay"
          />

          <text
            className="topic-circle__center-monogram"
            x={CX}
            y={CY - (centralTitleLines.length > 2 ? 18 : 8)}
            textAnchor="middle"
          >
            {shortMonogram(selectedTopic.title)}
          </text>

          <text
            className="topic-circle__center-title"
            x={CX}
            y={titleStartY}
            textAnchor="middle"
          >
            {centralTitleLines.map((line, index) => (
              <tspan
                key={`center-title-${index}`}
                x={CX}
                dy={index === 0 ? 0 : 23}
              >
                {line}
              </tspan>
            ))}
          </text>
        </g>
      </svg>
    </div>
  );
}
