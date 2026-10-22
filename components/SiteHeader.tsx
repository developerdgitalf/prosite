
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Framework", href: "/frameworks" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="prosight-header">
      <div className="prosight-header__container">
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

        <nav className="prosight-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="prosight-nav__link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

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
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="prosight-mobile-menu"
        className={`prosight-mobile-menu ${
          menuOpen ? "is-visible" : ""
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        {navigation.map((item) => (
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
