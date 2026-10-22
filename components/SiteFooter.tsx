
import Image from "next/image";
import Link from "next/link";
import "./SiteFooter.css";



const footerGroups = [
  {
    title: "Company",
    links: [
      { label: "About PROSIGHT™", href: "/about" },
      { label: "Third Eye Advisory", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "AI Strategy", href: "/services" },
      { label: "AI Practice", href: "/services" },
      { label: "AI Engineering", href: "/services" },
      { label: "AI Technology Management & GRC", href: "/services" },
      { label: "AI Adoption@Scale", href: "/services" },
      { label: "AI ROI & Metrics", href: "/services" },
    ],
  },
  {
    title: "Frameworks",
    links: [
      { label: "AISWITCH™", href: "/frameworks" },
      { label: "AISTATE™", href: "/frameworks" },
      { label: "GREAI™", href: "/frameworks" },
      { label: "CHIP2EXPERIENCE™", href: "/frameworks" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "AI for CXOs", href: "/resources" },
      { label: "AI Storytelling", href: "/resources" },
      { label: "Platform Engineering", href: "/resources" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="prosight-footer">
      <div className="prosight-footer__container">
        {/* Brand logo */}
        <Link
          href="/"
          className="prosight-footer__brand"
          aria-label="PROSIGHT homepage"
        >
          <Image
            src="/images/prosight-logo.svg"
            alt="PROSIGHT — AI Engineering Capabilities Study"
            width={250}
            height={112}
            className="prosight-footer__logo"
          />
        </Link>

        {/* Footer navigation */}
        <div className="prosight-footer__grid">
          <div className="prosight-footer__brand-copy">
            <h2>PROSIGHT™</h2>
            <p>
              Engineer. Operationalize. Scale.
              <br />
              Enterprise AI.
            </p>
          </div>

          {footerGroups.map((group) => (
            <nav
              key={group.title}
              className="prosight-footer__group"
              aria-label={group.title}
            >
              <h2>{group.title}</h2>

              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </footer>
  );
}
