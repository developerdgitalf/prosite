
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navigationBeforeResources = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Framework", href: "/frameworks" },
   { label: "Discover", href: "/discover" },
];

const navigationAfterResources = [
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Perspectives", href: "/resources" },
  {
    label: "AI Maturity Assessment",
    href: "/aiswitch-assessment",
  },
];

export default function SiteHeader() {
  // Both state variables must be declared inside this component.
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setResourcesOpen(false);
  };

  return (
    <header className="prosight-header">
      <div className="prosight-header__container">
        {/* Brand logo */}
        <Link
          href="/"
          className="prosight-brand"
          aria-label="PROSIGHT homepage"
          onClick={closeMenu}
        >
          <Image
            src="/images/prosight-logo.svg"
            alt="PROSIGHT — AI Engineering Capabilities Study"
            width={140}
            height={55}
            priority
            className="prosight-brand__logo"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="prosight-nav" aria-label="Main navigation">
          {navigationBeforeResources.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="prosight-nav__link"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}

          {/* Resources dropdown */}
          <div
            className={`prosight-nav__dropdown ${
              resourcesOpen ? "is-open" : ""
            }`}
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
            onFocus={() => setResourcesOpen(true)}
            onBlur={(event) => {
              const nextTarget = event.relatedTarget;

              if (
                !(nextTarget instanceof Node) ||
                !event.currentTarget.contains(nextTarget)
              ) {
                setResourcesOpen(false);
              }
            }}
          >
            <button
              type="button"
              className="prosight-nav__link prosight-nav__dropdown-trigger"
              aria-expanded={resourcesOpen}
              aria-controls="prosight-resources-submenu"
              onClick={() => setResourcesOpen(true)}
            >
              <span>Resources</span>

              <svg
                className="prosight-nav__dropdown-chevron"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="m6 9 6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              id="prosight-resources-submenu"
              className="prosight-nav__submenu"
            >
              {resourceLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="prosight-nav__submenu-link"
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>

                  <span
                    className="prosight-nav__submenu-arrow"
                    aria-hidden="true"
                  >
                    
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {navigationAfterResources.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="prosight-nav__link"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          type="button"
          className={`prosight-menu-button ${
            menuOpen ? "is-open" : ""
          }`}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="prosight-mobile-menu"
          onClick={() => {
            setMenuOpen((open) => !open);
            setResourcesOpen(false);
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile navigation */}
      <nav
        id="prosight-mobile-menu"
        className={`prosight-mobile-menu ${
          menuOpen ? "is-visible" : ""
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        {navigationBeforeResources.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="prosight-mobile-menu__link"
            onClick={closeMenu}
          >
            <span>{item.label}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        ))}

        {/* Mobile Resources submenu toggle */}
        <button
          type="button"
          className="prosight-mobile-menu__link prosight-mobile-menu__resources-toggle"
          aria-expanded={resourcesOpen}
          aria-controls="prosight-mobile-resources-submenu"
          onClick={() => setResourcesOpen((open) => !open)}
        >
          <span>Resources</span>

          <span
            className="prosight-mobile-menu__resources-icon"
            aria-hidden="true"
          >
            {resourcesOpen ? "−" : "+"}
          </span>
        </button>

        {resourcesOpen && (
          <div
            id="prosight-mobile-resources-submenu"
            className="prosight-mobile-menu__submenu"
          >
            {resourceLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="prosight-mobile-menu__sublink"
                onClick={closeMenu}
              >
                <span>{item.label}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        )}

        {navigationAfterResources.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="prosight-mobile-menu__link"
            onClick={closeMenu}
          >
            <span>{item.label}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
