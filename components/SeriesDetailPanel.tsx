"use client";

import { useEffect, useMemo, useState } from "react";
type TopicBlog = {
  id: string;
  title: string;
  documentPath: string;
  format: "docx";
  contentId: string;
  relatedTopicIds: string[];
  relatedBlogIds?: string[];
};

type IntelligenceTopic = {
  id: string;
  title: string;
  category: string;
  description: string;
  detail: string;
  relatedTopicIds: string[];
  tags: string[];
  source?: string;
  parentTopic?: string;
  seriesNumber?: number;
  blogs?: TopicBlog[];
};
import "./SeriesDetailPanel.css";

type BlogBlock =
  | { type: "heading" | "paragraph" | "listItem"; text: string }
  | { type: "table"; rows: string[][] };
type BlogContent = {
  id: string;
  title: string;
  seriesNumber: number;
  blocks: BlogBlock[];
};

type Props = {
  topic: IntelligenceTopic;
  allTopics: IntelligenceTopic[];
  onSelectTopic: (topicId: string) => void;
};

export default function SeriesDetailPanel({ topic, allTopics, onSelectTopic }: Props) {
  const [selectedBlog, setSelectedBlog] = useState<TopicBlog | null>(null);
  const [blogContent, setBlogContent] = useState<BlogContent | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    setSelectedBlog(null);
    setBlogContent(null);
    setLoadError("");
  }, [topic.id]);

  useEffect(() => {
    if (!selectedBlog) return;
    let cancelled = false;
    setLoading(true);
    setLoadError("");
    fetch("/data/prosight-blog-content.json")
      .then((response) => {
        if (!response.ok) throw new Error(`Unable to load blog content (${response.status})`);
        return response.json();
      })
      .then((data: Record<string, BlogContent>) => {
        if (!cancelled) {
          const article = data[selectedBlog.contentId];
          if (!article) throw new Error("This blog's full text is not available in the content catalogue.");
          setBlogContent(article);
        }
      })
      .catch((error: unknown) => {
        if (!cancelled) setLoadError(error instanceof Error ? error.message : "Unable to load this blog.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [selectedBlog]);

  const connectedTopics = useMemo(() => {
    const ids = selectedBlog?.relatedTopicIds ?? topic.relatedTopicIds;
    const lookup = new Map(allTopics.map((item) => [item.id, item]));
    return ids.map((id) => lookup.get(id)).filter((item): item is IntelligenceTopic => Boolean(item));
  }, [selectedBlog, topic, allTopics]);

  const relatedBlogs = useMemo(() => {
    if (!selectedBlog?.relatedBlogIds?.length) return [];
    const allBlogs = allTopics.flatMap((item) => item.blogs ?? []);
    const lookup = new Map(allBlogs.map((blog) => [blog.id, blog]));
    return selectedBlog.relatedBlogIds.map((id) => lookup.get(id)).filter((item): item is TopicBlog => Boolean(item));
  }, [selectedBlog, allTopics]);

  if (selectedBlog) {
    return (
      <aside className="series-panel" aria-label="Blog details">
        <button className="series-panel__back" type="button" onClick={() => { setSelectedBlog(null); setBlogContent(null); }}>
          ← Back to {topic.title}
        </button>
        <div className="series-panel__hero">
          <span className="series-panel__eyebrow">SERIES {String(topic.seriesNumber ?? "").padStart(2, "0")} · BLOG</span>
          <h2>{selectedBlog.title}</h2>
          <p>{topic.title}</p>
        </div>
        <div className="series-panel__article">
          {loading && <p className="series-panel__status">Loading the full article…</p>}
          {loadError && <p className="series-panel__error">{loadError}</p>}
          {blogContent && blogContent.blocks.map((block, index) => {
            if (block.type === "heading") return <h3 key={index}>{block.text}</h3>;
            if (block.type === "listItem") return <p className="series-panel__list-item" key={index}>{block.text}</p>;
            if (block.type === "table") return (
              <div className="series-panel__table-wrap" key={index}>
                <table><tbody>{block.rows.map((row, ri) => <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>)}</tbody></table>
              </div>
            );
            return <p key={index}>{block.text}</p>;
          })}
          {selectedBlog.documentPath && (
            <a className="series-panel__document-link" href={selectedBlog.documentPath} target="_blank" rel="noreferrer">
              Download original Word document ↗
            </a>
          )}
        </div>
        {connectedTopics.length > 0 && (
          <section className="series-panel__section">
            <h3>Relevant topics</h3>
            <div className="series-panel__chips">
              {connectedTopics.map((item) => <button type="button" key={item.id} onClick={() => onSelectTopic(item.id)}>{item.title} ↗</button>)}
            </div>
          </section>
        )}
        {relatedBlogs.length > 0 && (
          <section className="series-panel__section">
            <h3>Related blogs in this series</h3>
            <div className="series-panel__blog-list">
              {relatedBlogs.map((blog) => <button type="button" key={blog.id} onClick={() => { setSelectedBlog(blog); setBlogContent(null); }}>{blog.title} ↗</button>)}
            </div>
          </section>
        )}
      </aside>
    );
  }

  return (
    <aside className="series-panel" aria-label="Series details">
      <div className="series-panel__hero">
        <span className="series-panel__eyebrow">{topic.category}</span>
        <h2>{topic.title}</h2>
        <p>{topic.source ?? "PROSIGHT Series Catalogue"}</p>
      </div>
      <div className="series-panel__body">
        <p>{topic.description}</p>
        <h3>Explore this series</h3>
        <p>{topic.detail}</p>
        {topic.blogs?.length ? (
          <section className="series-panel__section">
            <div className="series-panel__section-heading">
              <h3>Blogs in this series</h3>
              <span>{topic.blogs.length} articles</span>
            </div>
            <div className="series-panel__blog-list">
              {topic.blogs.map((blog, index) => (
                <button type="button" key={blog.id} onClick={() => setSelectedBlog(blog)}>
                  <span className="series-panel__blog-number">{String(index + 1).padStart(2, "0")}</span>
                  <span>{blog.title}</span>
                  <span aria-hidden="true">↗</span>
                </button>
              ))}
            </div>
          </section>
        ) : null}
      </div>
      {connectedTopics.length > 0 && (
        <section className="series-panel__section">
          <h3>Connected series</h3>
          <div className="series-panel__chips">
            {connectedTopics.map((item) => <button type="button" key={item.id} onClick={() => onSelectTopic(item.id)}>{item.title} ↗</button>)}
          </div>
        </section>
      )}
      {topic.parentTopic && (
        <section className="series-panel__section">
          <h3>Parent topic</h3>
          <span className="series-panel__parent">{topic.parentTopic}</span>
        </section>
      )}
      <section className="series-panel__section series-panel__curation">
        <h3>Curation</h3>
        <p>This series is part of the PROSIGHT knowledge map. Its connected themes help visitors explore relationships across leadership, technology, workforce, data, research and business value.</p>
        <small>{(topic.tags ?? []).join(" · ")}</small>
      </section>
    </aside>
  );
}
