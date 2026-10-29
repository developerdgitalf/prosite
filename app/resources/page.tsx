"use client";

import Link from "next/link";
import { useMemo, useState, type CSSProperties } from "react";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

import {
  categories,
  resources,
  type Resource,
} from "./resource-data";

import "./resources.css";

type ResourceCategory = (typeof categories)[number];

function ResourceCard({ resource }: { resource: Resource }) {
  const imageStyle: CSSProperties & {
    "--resource-image": string;
  } = {
    "--resource-image": `url("${resource.image}")`,
  };

  return (
    <Link
      href={resource.href}
      className="resource-card"
      aria-label={`Open resource: ${resource.title}`}
    >
      {/* Resource thumbnail: no decorative arrow overlay */}
      <div
        className={`resource-card__image resource-card__image--${resource.theme}`}
        style={imageStyle}
        role="img"
        aria-label={`Thumbnail for ${resource.title}`}
      >
        <span className="resource-card__category">
          {resource.category}
        </span>
      </div>

      {/* Resource title and visual action */}
      <div className="resource-card__body">
        <h2 className="resource-card__title">
          {resource.title}
        </h2>

        {/*
          This is intentionally a span, not a Link.
          The outer card Link already makes the entire card clickable.
        */}
        <span
          className="resource-card__link"
          aria-hidden="true"
        >
          <span className="resource-card__link-text">
            View resource
          </span>

          <span className="resource-card__link-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function ResourcesPage() {
  const [categoryDraft, setCategoryDraft] =
    useState<ResourceCategory>("All Categories");

  const [queryDraft, setQueryDraft] = useState("");

  const [appliedCategory, setAppliedCategory] =
    useState<ResourceCategory>("All Categories");

  const [appliedQuery, setAppliedQuery] = useState("");

  const filteredResources = useMemo(() => {
    const normalizedQuery = appliedQuery
      .trim()
      .toLowerCase();

    return resources.filter((resource) => {
      const matchesCategory =
        appliedCategory === "All Categories" ||
        resource.category === appliedCategory;

      const searchableText =
        `${resource.title} ${resource.category}`.toLowerCase();

      const matchesSearch =
        normalizedQuery.length === 0 ||
        searchableText.includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [appliedCategory, appliedQuery]);

  const hasActiveFilters =
    appliedCategory !== "All Categories" ||
    appliedQuery.length > 0;

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

  return (
    <>
      <div className="resources-page__header">
        <SiteHeader />
      </div>

      <main className="prosight-resources-page">
        {/* =========================================
            HERO
        ========================================= */}
        <section
          className="resources-hero"
          aria-labelledby="resources-page-title"
        >
          <p className="resources-hero__eyebrow">
            PROSIGHT INSIGHTS
          </p>

          <h1 id="resources-page-title">
            Resources
          </h1>

          <p className="resources-hero__subtitle">
            Perspectives
          </p>

          <p className="resources-hero__description">
            Explore practical perspectives, AI frameworks
            and resources for enterprise transformation.
          </p>
        </section>

        {/* =========================================
            RESOURCE LIBRARY
        ========================================= */}
        <section
          className="resources-library"
          aria-label="Browse PROSIGHT resources"
        >
          <div className="resources-library__panel">
            {/* Search and category filter */}
            <form
              className="resources-toolbar"
              onSubmit={(event) => {
                event.preventDefault();
                applyFilters();
              }}
            >
              {/* Category selector */}
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
                    setCategoryDraft(
                      event.target.value as ResourceCategory
                    )
                  }
                >
                  {categories.map((category) => (
                    <option
                      key={category}
                      value={category}
                    >
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

              {/* Search input */}
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
                  placeholder="Search articles and documents..."
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

            {/* Results count */}
            <div
              className="resources-library__meta"
              aria-live="polite"
            >
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

            {/* Browse all topics */}
            <div className="resources-all-topics">
              <Link
                href="/discover"
                className="resources-all-topics__button"
                aria-label="Browse all topics"
              >
                Browse All Topics
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            {/* Resource cards */}
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
                  Try a different keyword or choose another
                  category.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                >
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