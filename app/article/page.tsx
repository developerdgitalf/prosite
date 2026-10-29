import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import "./article.css";

function ArticleCover() {
  return (
    <div className="article-cover-stage" aria-label="Article cover preview">
      <div className="article-cover-shadow" aria-hidden="true" />
      <div className="article-cover">
        <div className="article-cover__topline">
          <div className="article-cover__brand">
            <span className="article-cover__brand-main">DIGITALFABRIC®</span>
            <span className="article-cover__brand-sub">AISWITCH™</span>
          </div>
          <div className="article-cover__logo">prosight<span>▲</span></div>
        </div>

        <div className="article-cover__rule" />
        <span className="article-cover__series">SERIES: AI STORYTELLING</span>
        <h2>The AI-FIRST CEO/CXO: Why AI Must Be CEO-Led</h2>
        <p className="article-cover__kicker">Leadership perspective</p>

        <svg
          className="article-cover__wave"
          viewBox="0 0 560 330"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 13 }, (_, index) => (
            <path
              key={index}
              d={`M -35 ${70 + index * 12} C 95 ${5 + index * 8}, 180 ${240 + index * 2}, 310 ${190 + index * 5} S 470 ${100 + index * 7}, 610 ${235 + index * 5}`}
              stroke={index % 3 === 0 ? "#4fd6e6" : "#4285d8"}
              strokeOpacity={0.18 + index * 0.025}
              strokeWidth="1.1"
            />
          ))}
        </svg>

        <div className="article-cover__footer">
          <span>FOCUS AREAS</span>
          <p>Leadership · Enterprise AI · Business outcomes</p>
          <span className="article-cover__url">prosight-aism.com</span>
        </div>
      </div>
    </div>
  );
}

export default function AiFirstCeoArticlePage() {
  return (
    <>
      <div className="ai-article__site-header">
        <SiteHeader />
      </div>

      <main className="ai-article">
        <div className="ai-article__container">
          <nav className="ai-article__breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/resources">Resources</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">AI Storytelling</span>
          </nav>

          <section className="ai-article__hero" aria-labelledby="ai-article-title">
            <div className="ai-article__copy">
              <div className="ai-article__eyebrow-row">
                <span className="ai-article__category">AI Storytelling</span>
                <span className="ai-article__type">Leadership perspective</span>
              </div>

              <h1 id="ai-article-title">
                The AI-FIRST CEO/CXO: Why AI Must Be CEO-Led
              </h1>

              <p className="ai-article__lead">
                In an era where AI is rapidly reshaping industries, customer expectations,
                and the competitive landscape, enterprise leadership’s role in AI adoption
                has never been more critical. Yet, many organizations still treat AI as an
                IT / digital project or siloed innovation experiments in functional pockets.
              </p>

              <div className="ai-article__actions">
                <a
                  className="prosight-btn prosight-btn--dark ai-article__download"
                  href="/documents/the-ai-first-ceo-cxo-why-ai-must-be-ceo-led.pdf"
                  download
                >
                  <span>Download article</span>
                  <svg className="prosight-btn__arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="2" />
                    <path d="M10 7.8L14.2 12L10 16.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a className="ai-article__read-link" href="#article-overview">
                  Read overview <span aria-hidden="true">↓</span>
                </a>
              </div>

              <div className="ai-article__metadata" aria-label="Resource information">
                <span><span className="ai-article__meta-dot" /> PROSIGHT Perspective</span>
                <span>Executive leadership</span>
                <span>AI strategy</span>
              </div>
            </div>

            <div className="ai-article__visual">
              <div className="ai-article__visual-glow" aria-hidden="true" />
              <ArticleCover />
              <div className="ai-article__visual-caption">
                <span className="ai-article__caption-icon" aria-hidden="true">PDF</span>
                <div>
                  <strong>Featured perspective</strong>
                  <span>AI leadership and enterprise outcomes</span>
                </div>
              </div>
            </div>
          </section>

          <section className="ai-article__overview" id="article-overview" aria-labelledby="article-overview-title">
            <div className="ai-article__overview-heading">
              <span className="ai-article__section-label">THE BIG PICTURE</span>
              <h2 id="article-overview-title">AI leadership starts at the top.</h2>
            </div>
            <div className="ai-article__overview-body">
              <p>
                AI creates enterprise value when it is connected to business strategy,
                leadership accountability, operating practices, and measurable outcomes—not
                treated as an isolated technology experiment.
              </p>
              <div className="ai-article__takeaways">
                <article className="ai-article__takeaway">
                  <span className="ai-article__takeaway-number">01</span>
                  <h3>Set direction</h3>
                  <p>Connect AI ambition to enterprise priorities and strategic decisions.</p>
                </article>
                <article className="ai-article__takeaway">
                  <span className="ai-article__takeaway-number">02</span>
                  <h3>Align the organisation</h3>
                  <p>Bring business, technology, people, and governance into the same plan.</p>
                </article>
                <article className="ai-article__takeaway">
                  <span className="ai-article__takeaway-number">03</span>
                  <h3>Measure outcomes</h3>
                  <p>Focus on accountable progress and the value AI delivers to the business.</p>
                </article>
              </div>
              <p className="ai-article__note">
                This page provides an overview of the resource. Download the full article
                for the complete perspective.
              </p>
              <a
                className="prosight-btn prosight-btn--primary ai-article__download-bottom"
                href="/documents/the-ai-first-ceo-cxo-why-ai-must-be-ceo-led.pdf"
                download
              >
                <span>Download the full article</span>
                <svg className="prosight-btn__arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="2" />
                  <path d="M10 7.8L14.2 12L10 16.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
