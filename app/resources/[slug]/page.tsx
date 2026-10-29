import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";

import {
  resources,
  getResourceById,
} from "../resource-data";

import "./resource-detail.css";
export const instant = false;

type ResourceDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* Generate detail routes for all resources. */
export function generateStaticParams() {
  return resources.map((resource) => ({
    slug: resource.id,
  }));
}

export default async function ResourceDetailPage({
  params,
}: ResourceDetailProps) {
  const { slug } = await params;

  const resource = getResourceById(slug);

  if (!resource) {
    notFound();
  }

  const pdfPath = resource.pdfPath;
  const coverImage = resource.coverImage ?? resource.image;

  return (
    <>
      <SiteHeader />

      <main className="resource-detail">
        <div className="resource-detail__container">
          {/* =========================================
              BREADCRUMBS
          ========================================= */}
          <nav
            className="resource-detail__breadcrumbs"
            aria-label="Breadcrumb"
          >
            <Link href="/">Home</Link>

            <span aria-hidden="true">/</span>

            <Link href="/resources">Resources</Link>

            <span aria-hidden="true">/</span>

            <span aria-current="page">
              {resource.title}
            </span>
          </nav>

          {/* =========================================
              FEATURED RESOURCE
          ========================================= */}
          <section className="resource-detail__hero">
            <div className="resource-detail__copy">
              <span className="resource-detail__category">
                {resource.category}
              </span>

              <h1>{resource.title}</h1>

              <p>
                View this PROSIGHT resource online or
                download its PDF document for reading
                and sharing.
              </p>

              <div className="resource-detail__actions">
                {pdfPath ? (
                  <a
                    className="resource-detail__button resource-detail__button--primary"
                    href={pdfPath}
                    download
                  >
                    Download PDF
                    <span aria-hidden="true">↓</span>
                  </a>
                ) : (
                  <span className="resource-detail__button resource-detail__button--disabled">
                    PDF unavailable
                  </span>
                )}

                <Link
                  className="resource-detail__button resource-detail__button--secondary"
                  href="/resources"
                >
                  Back to resources
                </Link>
              </div>
            </div>

            {/* Portrait book cover */}
            <div className="resource-detail__cover">
              <Image
                src={coverImage}
                alt={`${resource.title} book cover`}
                fill
                priority
                sizes="(max-width: 800px) 80vw, 360px"
                className="resource-detail__cover-image"
              />
            </div>
          </section>

          {/* =========================================
              PDF DOCUMENT VIEWER
          ========================================= */}
          <section
            className="resource-detail__document"
            aria-labelledby="resource-document-title"
          >
            <div className="resource-detail__document-heading">
              <div>
                <p className="resource-detail__eyebrow">
                  DOCUMENT VIEWER
                </p>

                <h2 id="resource-document-title">
                  Read the resource
                </h2>
              </div>

              {pdfPath && (
                <a
                  href={pdfPath}
                  className="resource-detail__text-link"
                  download
                >
                  Download PDF
                  <span aria-hidden="true"> ↓</span>
                </a>
              )}
            </div>

            {pdfPath ? (
              <div className="resource-detail__pdf-frame">
                <iframe
                  src={`${pdfPath}#page=1&view=FitH`}
                  title={`PDF viewer for ${resource.title}`}
                  width="100%"
                  height="800"
                />

                <div className="resource-detail__pdf-fallback">
                  <p>
                    If the PDF is not displayed in your browser,
                    open the document directly.
                  </p>

                  <a
                    href={pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open PDF in a new tab
                  </a>
                </div>
              </div>
            ) : (
              <div className="resource-detail__pdf-unavailable">
                <p>
                  The PDF document has not been mapped for
                  this resource yet.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}