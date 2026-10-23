"use client";

import { useState } from "react";
import type { IntelligenceTopic } from "./topics";

type TopicDetailPanelProps = {
  topic: IntelligenceTopic;
  relatedTopics: IntelligenceTopic[];
  onSelectTopic: (topicId: string) => void;
};

function makeSummary(topic: IntelligenceTopic) {
  return topic.description;
}

export default function TopicDetailPanel({
  topic,
  relatedTopics,
  onSelectTopic,
}: TopicDetailPanelProps) {
  const [expanded, setExpanded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const visualClass = `topic-detail__visual topic-detail__visual--${topic.category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <aside className="topic-detail" aria-label={`${topic.title} details`}>
      <div className={visualClass}>
        {topic.image && !imageFailed ? (
          <img
            className="topic-detail__image"
            src={topic.image}
            alt=""
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="topic-detail__art" aria-hidden="true">
            <span className="topic-detail__art-orbit topic-detail__art-orbit--one" />
            <span className="topic-detail__art-orbit topic-detail__art-orbit--two" />
            <span className="topic-detail__art-node topic-detail__art-node--one" />
            <span className="topic-detail__art-node topic-detail__art-node--two" />
            <span className="topic-detail__art-node topic-detail__art-node--three" />
            <span className="topic-detail__art-monogram">
              {topic.title
                .split(/\s+/)
                .filter((word) => !["and", "the", "of", "to"].includes(word.toLowerCase()))
                .slice(0, 3)
                .map((word) => word[0])
                .join("")
                .toUpperCase()}
            </span>
          </div>
        )}

        <div className="topic-detail__visual-shade" />
        <div className="topic-detail__visual-copy">
          <span className="topic-detail__category">{topic.category}</span>
          <h2>{topic.title}</h2>
          <p>Curation: {topic.source ?? "PROSIGHT Topic Map"}</p>
        </div>
      </div>

      <div className="topic-detail__body">
        <p className="topic-detail__lead">{makeSummary(topic)}</p>

        <div className="topic-detail__section">
          <h3>Explore this topic</h3>
          <p className={expanded ? "" : "topic-detail__detail--collapsed"}>
            {topic.detail}
          </p>
          <button
            className="topic-detail__read-toggle"
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? "Read less" : "Read more"}
            <span aria-hidden="true">{expanded ? "−" : "+"}</span>
          </button>
        </div>

        {relatedTopics.length > 0 && (
          <div className="topic-detail__section">
            <h3>Connected topics</h3>
            <div className="topic-detail__related-list">
              {relatedTopics.map((related) => (
                <button
                  type="button"
                  key={related.id}
                  className={`topic-detail__related-chip ${
                    related.id === topic.id ? "is-current" : ""
                  }`}
                  onClick={() => {
                    setExpanded(false);
                    setImageFailed(false);
                    onSelectTopic(related.id);
                  }}
                >
                  {related.title}
                  <span aria-hidden="true">↗</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {topic.parentTopic && (
          <div className="topic-detail__section topic-detail__parent">
            <h3>Parent topic</h3>
            <span className="topic-detail__parent-pill">
              {topic.parentTopic}
            </span>
          </div>
        )}

        <div className="topic-detail__curation">
          <h3>Curation</h3>
          <p>
            This topic is part of the PROSIGHT interactive intelligence map.
            The connected themes are intended to help explore relationships
            across technology, industry, society and the global economy.
          </p>
          <span>Topic catalogue · {topic.tags.join(" · ")}</span>
        </div>
      </div>
    </aside>
  );
}
