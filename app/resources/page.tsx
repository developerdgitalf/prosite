
"use client";

import { useState, type CSSProperties } from "react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import "./resources.css";

type Resource = {
  id: string;
  category: string;
  title: string;
  image: string;
  theme: string;
};

const categories = [
  "All Categories",
  "AI for CXO",
  "AI Storytelling",
  "Platform Engineering",
];

const resources: Resource[] = [
  {
    id: "ai-first-ceo",
    category: "AI for CXO",
    title: "The AI-FIRST CEO/CXO: Why AI Must Be CEO-Led-PROSIGHT",
    image: "/images/resources/ai-first-ceo.webp",
    theme: "network",
  },
  {
    id: "ai-narrative-checklist",
    category: "AI Storytelling",
    title: "CHECKLIST AI NARRATIVE-PROSIGHT",
    image: "/images/resources/ai-narrative.webp",
    theme: "editorial",
  },
  {
    id: "unique-ai-stories",
    category: "AI Storytelling",
    title: "UNIQUE AI STORIES- PROSIGHT",
    image: "/images/resources/unique-ai-stories.webp",
    theme: "technology",
  },
  {
    id: "five-cs-ai-data-cloud",
    category: "AI Storytelling",
    title: "THE 5 CS OF AI-DATA-CLOUD-PROSIGHT",
    image: "/images/resources/ai-data-cloud.webp",
    theme: "datacenter",
  },
  {
    id: "ai-story",
    category: "AI Storytelling",
    title: "WHAT'S YOUR AI STORY-PROSIGHT",
    image: "/images/resources/ai-story.webp",
    theme: "robotics",
  },
  {
    id: "ai-cloud-change",
    category: "AI Storytelling",
    title: "AI-CLOUD CHANGE PILOT-PROSIGHT",
    image: "/images/resources/ai-cloud-change.webp",
    theme: "network",
  },
  {
    id: "gestalt-storytelling",
    category: "AI Storytelling",
    title: "GESTALT'S PRINCIPLES IN AI STORYTELLING- PROSIGHT",
    image: "/images/resources/gestalt-storytelling.webp",
    theme: "editorial",
  },
  {
    id: "your-platform",
    category: "Platform Engineering",
    title: "WHAT'S YOUR PLATFORM-PROSIGHT",
    image: "/images/resources/your-platform.webp",
    theme: "platform",
  },
  {
    id: "platformizing-businesses",
    category: "Platform Engineering",
    title: "PLATFORMIZING BUSINESSES-PROSIGHT",
    image: "/images/resources/platformizing-businesses.webp",
    theme: "architecture",
  },
  {
    id: "greenprinting-platforms",
    category: "Platform Engineering",
    title: "GREENPRINTING PLATFORMS-PROSIGHT",
    image: "/images/resources/greenprinting-platforms.webp",
    theme: "planning",
  },
  {
    id: "win-on-platforms",
    category: "Platform Engineering",
    title: "How to Win on Platforms-PROSIGHT",
    image: "/images/resources/win-on-platforms.webp",
    theme: "strategy",
  },
  {
    id: "service-providers",
    category: "AI for CXO",
    title:
      "How AI-First CEOs must align with the Right Service Providers (SPS)-PROSIGHT",
    image: "/images/resources/service-providers.webp",
    theme: "code",
  },
  {
    id: "agentic-genai-coe",
    category: "AI for CXO",
    title:
      "Building a Future-Ready Agentic & GenAI Centre of Excellence (CoE)-PROSIGHT",
    image: "/images/resources/agentic-genai-coe.webp",
    theme: "architecture",
  },
  {
    id: "ai-cloud-partners",
    category: "AI for CXO",
    title: "How CEOs Must Select the Right AI-Cloud Partners-PROSIGHT",
    image: "/images/resources/ai-cloud-partners.webp",
    theme: "cloud",
  },
];


function ResourceCard({ resource }: { resource: Resource }) {
  const imageStyle = {
    "--resource-image": `url("${resource.image}")`,
  } as CSSProperties;

  return (
    <article className="resource-card">
      <div
        className={`resource-card__image resource-card__image--${resource.theme}`}
        style={imageStyle}
        role="img"
        aria-label={`Image for ${resource.title}`}
      >
        <span className="resource-card__category">
          {resource.category}
        </span>
      </div>

      <div className="resource-card__body">
        <h2>{resource.title}</h2>
      </div>
    </article>
  );
}


export default function ResourcesPage() {
  const [categoryDraft, setCategoryDraft] =
    useState("All Categories");
  const [queryDraft, setQueryDraft] = useState("");

  const [appliedCategory, setAppliedCategory] =
    useState("All Categories");
  const [appliedQuery, setAppliedQuery] = useState("");

  const applyFilters = () => {
    setAppliedCategory(categoryDraft);
    setAppliedQuery(queryDraft.trim());
  };

  const clearFilters = () => {
    setCategoryDraft("All Categories");
    setQueryDraft("");
    setAppliedCategory("All Categories");
    setAppliedQuery("");
  };

  const normalizedQuery = appliedQuery.toLowerCase();

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      appliedCategory === "All Categories" ||
      resource.category === appliedCategory;

    const matchesSearch =
      normalizedQuery.length === 0 ||
      `${resource.title} ${resource.category}`
        .toLowerCase()
        .includes(normalizedQuery);

    return matchesCategory && matchesSearch;
  });

  const hasActiveFilters =
    appliedCategory !== "All Categories" || appliedQuery.length > 0;

  return (
    <>
      <div className="resources-page__header">
        <SiteHeader />
      </div>

      <main className="prosight-resources-page">
        {/* Resources page introduction */}
        <section
          className="resources-hero"
          aria-labelledby="resources-page-title"
        >
          <p className="resources-hero__eyebrow">PROSIGHT INSIGHTS</p>

          <h1 id="resources-page-title">Resources</h1>

          <p className="resources-hero__subtitle">Perspectives</p>
        </section>

        {/* Resource library */}
        <section
          className="resources-library"
          aria-label="Browse PROSIGHT resources"
        >
          <div className="resources-library__panel">
            <form
              className="resources-toolbar"
              onSubmit={(event) => {
                event.preventDefault();
                applyFilters();
              }}
            >
              <div className="resources-toolbar__select-wrap">
                <label
                  className="resources-sr-only"
                  htmlFor="resource-category"
                >
                  Filter by category
                </label>

                <select
                  id="resource-category"
                  className="resources-toolbar__select"
                  value={categoryDraft}
                  onChange={(event) =>
                    setCategoryDraft(event.target.value)
                  }
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <svg
                  className="resources-toolbar__chevron"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="m6 9 6 6 6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="resources-toolbar__search-wrap">
                <svg
                  className="resources-toolbar__search-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    cx="10.8"
                    cy="10.8"
                    r="6.8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="m16 16 4.5 4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>

                <label
                  className="resources-sr-only"
                  htmlFor="resource-search"
                >
                  Search resources
                </label>

                <input
                  id="resource-search"
                  className="resources-toolbar__search"
                  type="search"
                  placeholder="Search..."
                  value={queryDraft}
                  onChange={(event) =>
                    setQueryDraft(event.target.value)
                  }
                />
              </div>

              <button
                className="resources-toolbar__filter"
                type="submit"
              >
                Filter
              </button>
            </form>

            <div className="resources-library__meta" aria-live="polite">
              <span>
                {filteredResources.length}{" "}
                {filteredResources.length === 1
                  ? "resource"
                  : "resources"}
              </span>

              {hasActiveFilters && (
                <button
                  type="button"
                  className="resources-library__reset"
                  onClick={clearFilters}
                >
                  Clear filters
                </button>
              )}
            </div>

            {filteredResources.length > 0 ? (
              <div className="resources-grid">
                {filteredResources.map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    resource={resource}
                  />
                ))}
              </div>
            ) : (
              <div className="resources-empty">
                <h2>No resources found</h2>
                <p>
                  Try a different keyword or choose another category.
                </p>

                <button type="button" onClick={clearFilters}>
                  Show all resources
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
