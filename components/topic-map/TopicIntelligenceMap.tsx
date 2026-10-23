"use client";

import { useMemo, useState } from "react";
import TopicCircle from "./TopicCircle";
import TopicDetailPanel from "./TopicDetailPanel";
import {
  defaultTopicId,
  getRelatedTopics,
  getTopicById,
  topics,
} from "./topics";
import "./TopicIntelligenceMap.css";

export default function TopicIntelligenceMap() {
  const [selectedTopicId, setSelectedTopicId] = useState(defaultTopicId);
  const [query, setQuery] = useState("");
  const [showAllTopics, setShowAllTopics] = useState(false);

  const selectedTopic = getTopicById(selectedTopicId) ?? topics[0];

  const relatedTopics = useMemo(
    () => getRelatedTopics(selectedTopic),
    [selectedTopic]
  );

  const filteredTopics = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return topics;

    return topics.filter((topic) => {
      const searchable = [
        topic.title,
        topic.category,
        topic.description,
        ...topic.tags,
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(normalized);
    });
  }, [query]);

  const selectTopic = (topicId: string) => {
    if (!getTopicById(topicId)) return;
    setSelectedTopicId(topicId);
    setShowAllTopics(false);
  };

  return (
    <main className="topic-intelligence">
      <section className="topic-intelligence__hero">
        <p className="topic-intelligence__eyebrow">DISCOVER · CONNECT · UNDERSTAND</p>
        <h1>Explore the connections shaping our world.</h1>
        <p>
          An interactive map of global issues, emerging technologies and
          industry shifts. Select any topic to reveal its connected themes
          and explore the wider context.
        </p>
      </section>

      <div className="topic-intelligence__toolbar">
        <div className="topic-intelligence__selection">
         
          <span></span>
          <strong>{selectedTopic.title}</strong>
        </div>

        <label className="topic-intelligence__search">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.8" cy="10.8" r="6.8" />
            <path d="m16 16 4.5 4.5" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => {
              const nextQuery = event.target.value;
              setQuery(nextQuery);
              setShowAllTopics(Boolean(nextQuery.trim()));
            }}
            placeholder="Search topics..."
            aria-label="Search topics"
          />
          {query && (
            <button
              type="button"
              aria-label="Clear topic search"
              onClick={() => {
                setQuery("");
                setShowAllTopics(false);
              }}
            >
              ×
            </button>
          )}
        </label>
      </div>

      {query.trim() && (
        <div className="topic-intelligence__search-results" aria-live="polite">
          <div className="topic-intelligence__search-results-heading">
            <span>{filteredTopics.length} matching topics</span>
            <button type="button" onClick={() => setQuery("")}>Clear search</button>
          </div>
          {filteredTopics.length > 0 ? (
            <div className="topic-intelligence__search-list">
              {filteredTopics.slice(0, 12).map((topic) => (
                <button
                  key={topic.id}
                  type="button"
                  className={topic.id === selectedTopic.id ? "is-current" : ""}
                  onClick={() => selectTopic(topic.id)}
                >
                  <span>{topic.title}</span>
                  <small>{topic.category}</small>
                </button>
              ))}
            </div>
          ) : (
            <p className="topic-intelligence__empty">No topics match your search.</p>
          )}
        </div>
      )}

      <div className="topic-intelligence__layout">
        <section className="topic-intelligence__map-panel" aria-label="Interactive topic network">
          <div className="topic-intelligence__map-topline">
          
          </div>

          <TopicCircle
            topics={topics}
            selectedTopic={selectedTopic}
            relatedTopics={relatedTopics}
            onSelectTopic={selectTopic}
          />

        <div className="topic-intelligence__map-footer">
  <span>
    
    
  </span>

  <span>
 
   
  </span>

  <button
    type="button"
    onClick={() => setShowAllTopics((value) => !value)}
    aria-expanded={showAllTopics}
  >
    {showAllTopics ? "Hide topic index" : "Browse all topics"}
    {" >"}
  </button>
</div>

          {showAllTopics && !query.trim() && (
            <div className="topic-intelligence__topic-index">
              {topics.map((topic) => (
                <button
                  type="button"
                  key={topic.id}
                  className={topic.id === selectedTopic.id ? "is-current" : ""}
                  onClick={() => selectTopic(topic.id)}
                >
                  {topic.title}
                </button>
              ))}
            </div>
          )}
        </section>

        <TopicDetailPanel
          topic={selectedTopic}
          relatedTopics={relatedTopics}
          onSelectTopic={selectTopic}
        />
      </div>

      <footer className="topic-intelligence__page-note">
        <span>PROSIGHT™ · Interactive Intelligence Map</span>
        <span>Select a node, connected theme or topic in the search results to explore.</span>
      </footer>
    </main>
  );
}
