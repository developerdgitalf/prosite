"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./admin-resources.css";

type ResourceStatus = "Published" | "Draft";
type Category = "AI for CXO" | "AI Storytelling" | "Platform Engineering";
type ResourceItem = {
  id: string;
  title: string;
  category: Category;
  description: string;
  tags: string[];
  status: ResourceStatus;
  thumbnailName: string;
  thumbnailUrl: string;
  documentName: string;
  updatedAt: string;
};

const CATEGORY_OPTIONS: Category[] = ["AI for CXO", "AI Storytelling", "Platform Engineering"];

const initialResources: ResourceItem[] = [
  {
    id: "res-001",
    title: "The AI-FIRST CEO/CXO: Why AI Must Be CEO-Led",
    category: "AI for CXO",
    description: "A leadership perspective on executive ownership of enterprise AI adoption.",
    tags: ["Leadership", "AI strategy"],
    status: "Published",
    thumbnailName: "ai-first-ceo.webp",
    thumbnailUrl: "",
    documentName: "the-ai-first-ceo-cxo.pdf",
    updatedAt: "Oct 26, 2026",
  },
  {
    id: "res-002",
    title: "Checklist: AI Narrative",
    category: "AI Storytelling",
    description: "A practical checklist for shaping a clear AI transformation narrative.",
    tags: ["Storytelling", "Checklist"],
    status: "Published",
    thumbnailName: "ai-narrative.webp",
    thumbnailUrl: "",
    documentName: "ai-narrative-checklist.pdf",
    updatedAt: "Oct 24, 2026",
  },
  {
    id: "res-003",
    title: "What's Your Platform?",
    category: "Platform Engineering",
    description: "A guide to platform thinking, business alignment, and engineering foundations.",
    tags: ["Platform", "Engineering"],
    status: "Draft",
    thumbnailName: "your-platform.webp",
    thumbnailUrl: "",
    documentName: "your-platform.pdf",
    updatedAt: "Oct 22, 2026",
  },
  {
    id: "res-004",
    title: "Building a Future-Ready Agentic & GenAI Centre of Excellence",
    category: "AI for CXO",
    description: "Considerations for establishing an enterprise-ready GenAI centre of excellence.",
    tags: ["GenAI", "CoE"],
    status: "Draft",
    thumbnailName: "agentic-genai-coe.webp",
    thumbnailUrl: "",
    documentName: "agentic-genai-coe.pdf",
    updatedAt: "Oct 20, 2026",
  },
];

const emptyForm = {
  title: "",
  category: "AI for CXO" as Category,
  description: "",
  tags: "",
  status: "Draft" as ResourceStatus,
};

function Icon({ name }: { name: string }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "grid": return <svg {...common}><rect x="3" y="3" width="7" height="7" rx="1.3"/><rect x="14" y="3" width="7" height="7" rx="1.3"/><rect x="3" y="14" width="7" height="7" rx="1.3"/><rect x="14" y="14" width="7" height="7" rx="1.3"/></svg>;
    case "file": return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/></svg>;
    case "chart": return <svg {...common}><path d="M4 19V5M4 19h17"/><path d="m7 15 4-4 3 2 5-7"/></svg>;
    case "settings": return <svg {...common}><circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.2.9-1.2 2.1-1.4-.6a8 8 0 0 1-1.7 1l-.2 1.5h-2.4l-.3-1.5a8 8 0 0 1-1.8-1l-1.4.6-1.2-2.1 1.2-.9a7 7 0 0 1 0-2l-1.2-.9 1.2-2.1 1.4.6a8 8 0 0 1 1.8-1l.3-1.5h2.4l.2 1.5a8 8 0 0 1 1.7 1l1.4-.6 1.2 2.1-1.2.9a7 7 0 0 1 0 2Z" transform="translate(-1 -1) scale(1.04)"/></svg>;
    case "search": return <svg {...common}><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>;
    case "plus": return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    case "upload": return <svg {...common}><path d="M12 16V4m-4 4 4-4 4 4"/><path d="M4 15v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4"/></svg>;
    case "external": return <svg {...common}><path d="M14 3h7v7M10 14 21 3"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>;
    case "close": return <svg {...common}><path d="m18 6-12 12M6 6l12 12"/></svg>;
    case "trash": return <svg {...common}><path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6M10 10v6m4-6v6"/></svg>;
    case "edit": return <svg {...common}><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/></svg>;
    default: return <svg {...common}><circle cx="12" cy="12" r="8"/></svg>;
  }
}

export default function AdminResourcesPage() {
  const [resources, setResources] = useState<ResourceItem[]>(initialResources);
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All categories");
  const [statusFilter, setStatusFilter] = useState("All status");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [documentFile, setDocumentFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [formError, setFormError] = useState("");
  const [notice, setNotice] = useState("");

  const filteredResources = useMemo(() => resources.filter((resource) => {
    const searchText = `${resource.title} ${resource.category} ${resource.tags.join(" ")}`.toLowerCase();
    return searchText.includes(query.toLowerCase())
      && (categoryFilter === "All categories" || resource.category === categoryFilter)
      && (statusFilter === "All status" || resource.status === statusFilter);
  }), [resources, query, categoryFilter, statusFilter]);

  const publishedCount = resources.filter((resource) => resource.status === "Published").length;
  const draftCount = resources.filter((resource) => resource.status === "Draft").length;

  function openNewForm() {
    setEditingId(null);
    setForm(emptyForm);
    setThumbnailFile(null);
    setDocumentFile(null);
    setThumbnailPreview("");
    setFormError("");
    setIsFormOpen(true);
  }

  function openEditForm(resource: ResourceItem) {
    setEditingId(resource.id);
    setForm({ title: resource.title, category: resource.category, description: resource.description, tags: resource.tags.join(", "), status: resource.status });
    setThumbnailFile(null);
    setDocumentFile(null);
    setThumbnailPreview(resource.thumbnailUrl);
    setFormError("");
    setIsFormOpen(true);
  }

  function handleThumbnailChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setFormError("Please choose an image file for the thumbnail.");
      event.target.value = "";
      return;
    }
    setThumbnailFile(file);
    setThumbnailPreview(URL.createObjectURL(file));
    setFormError("");
  }

  function handleDocumentChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    if (!file) return;
    const isPdf = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
    if (!isPdf) {
      setFormError("Please upload a PDF document.");
      event.target.value = "";
      return;
    }
    setDocumentFile(file);
    setFormError("");
  }

  function saveResource(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.title.trim()) { setFormError("Enter a resource title."); return; }
    if (!editingId && !thumbnailFile) { setFormError("Upload a thumbnail image before saving this resource."); return; }
    if (!editingId && !documentFile) { setFormError("Upload the PDF document before saving this resource."); return; }

    const current = editingId ? resources.find((item) => item.id === editingId) : undefined;
    const resource: ResourceItem = {
      id: editingId ?? `res-${Date.now()}`,
      title: form.title.trim(),
      category: form.category,
      description: form.description.trim(),
      tags: form.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
      status: form.status,
      thumbnailName: thumbnailFile?.name ?? current?.thumbnailName ?? "thumbnail",
      thumbnailUrl: thumbnailPreview || current?.thumbnailUrl || "",
      documentName: documentFile?.name ?? current?.documentName ?? "document.pdf",
      updatedAt: "Just now",
    };
    setResources((currentResources) => editingId
      ? currentResources.map((item) => item.id === editingId ? resource : item)
      : [resource, ...currentResources]);
    setIsFormOpen(false);
    setNotice(editingId ? "Resource updated in this preview." : "Resource added to this preview.");
    window.setTimeout(() => setNotice(""), 3500);
  }

  function deleteResource(resource: ResourceItem) {
    if (!window.confirm(`Delete “${resource.title}” from this preview?`)) return;
    setResources((items) => items.filter((item) => item.id !== resource.id));
    setNotice("Resource removed from this preview.");
    window.setTimeout(() => setNotice(""), 3500);
  }

  return (
    <main className="pa-admin">
      <aside className="pa-sidebar">
        <Link className="pa-brand" href="/resources" aria-label="PROSIGHT public website">
          <span className="pa-brand-word">prosight<span className="pa-brand-mark">▲</span></span>
          <span className="pa-brand-caption">AI Engineering Capabilities Study</span>
        </Link>
        <div className="pa-sidebar-label">WORKSPACE</div>
        <nav className="pa-nav" aria-label="Admin navigation">
          <a className="pa-nav-link" href="#overview"><Icon name="grid"/><span>Overview</span></a>
          <a className="pa-nav-link active" href="#resources"><Icon name="file"/><span>Resources</span><span className="pa-nav-count">{resources.length}</span></a>
          <a className="pa-nav-link" href="#analytics"><Icon name="chart"/><span>Analytics</span><span className="pa-nav-soon">Soon</span></a>
        </nav>
        <div className="pa-sidebar-bottom">
          <div className="pa-admin-user-avatar">PA</div>
          <div className="pa-admin-user-copy"><strong>PROSIGHT Admin</strong><span>Content manager</span></div>
          <button className="pa-icon-button pa-user-settings" aria-label="Account settings" type="button"><Icon name="settings"/></button>
        </div>
      </aside>

      <section className="pa-main" id="overview">
        <header className="pa-topbar">
          <div className="pa-breadcrumb"><span>Workspace</span><span className="pa-breadcrumb-slash">/</span><strong>Resources</strong></div>
          <div className="pa-topbar-actions">
            <span className="pa-preview-label"><span className="pa-preview-dot"/>Admin preview</span>
            <Link className="pa-view-site" href="/resources" target="_blank"><Icon name="external"/> View website</Link>
            <div className="pa-top-avatar">PA</div>
          </div>
        </header>

        <div className="pa-content" id="resources">
          <div className="pa-page-heading">
            <div>
              <p className="pa-eyebrow">CONTENT MANAGEMENT</p>
              <h1>Resources</h1>
              <p className="pa-page-subtitle">Manage the articles, insights and downloadable documents on your website.</p>
            </div>
            <button className="pa-primary-button" type="button" onClick={openNewForm}><Icon name="plus"/> Add resource</button>
          </div>

          <div className="pa-stat-grid">
            <article className="pa-stat-card"><div className="pa-stat-top"><span>Total resources</span><span className="pa-stat-icon pa-blue"><Icon name="file"/></span></div><strong>{resources.length}</strong><small>All resources in this preview</small></article>
            <article className="pa-stat-card"><div className="pa-stat-top"><span>Published</span><span className="pa-stat-icon pa-green"><span className="pa-status-dot"/></span></div><strong>{publishedCount}</strong><small>Visible to website visitors</small></article>
            <article className="pa-stat-card"><div className="pa-stat-top"><span>Drafts</span><span className="pa-stat-icon pa-amber"><Icon name="edit"/></span></div><strong>{draftCount}</strong><small>Not shown on the public site</small></article>
            <article className="pa-stat-card pa-storage-card"><div className="pa-stat-top"><span>Content library</span><span className="pa-stat-icon pa-violet"><Icon name="upload"/></span></div><strong>PDF + images</strong><small>Upload assets to each resource</small></article>
          </div>

          <section className="pa-library-panel" aria-label="Resource library">
            <div className="pa-library-heading">
              <div><h2>All resources</h2><p>Organise and update your published content.</p></div>
              <span className="pa-record-count">{filteredResources.length} records</span>
            </div>
            <div className="pa-filters">
              <label className="pa-search-box"><Icon name="search"/><span className="pa-sr-only">Search resources</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by title, category or tag…"/></label>
              <label className="pa-select-wrap"><span className="pa-sr-only">Filter by category</span><select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}><option>All categories</option>{CATEGORY_OPTIONS.map((category) => <option key={category}>{category}</option>)}</select></label>
              <label className="pa-select-wrap pa-status-select"><span className="pa-sr-only">Filter by status</span><select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}><option>All status</option><option>Published</option><option>Draft</option></select></label>
            </div>
            <div className="pa-table-scroll">
              <table className="pa-resource-table">
                <thead><tr><th>RESOURCE</th><th>CATEGORY</th><th>STATUS</th><th>DOCUMENT</th><th>LAST UPDATED</th><th><span className="pa-sr-only">Actions</span></th></tr></thead>
                <tbody>
                  {filteredResources.map((resource, index) => <tr key={resource.id}>
                    <td><div className="pa-resource-cell"><div className={`pa-thumb pa-thumb-${index % 4}`}>{resource.thumbnailUrl ? <img src={resource.thumbnailUrl} alt=""/> : <span>{resource.category === "AI for CXO" ? "AI" : resource.category === "AI Storytelling" ? "ST" : "PE"}</span>}</div><div className="pa-resource-copy"><strong>{resource.title}</strong><span>{resource.tags.length ? resource.tags.join(" · ") : "No tags"}</span></div></div></td>
                    <td><span className="pa-category-pill">{resource.category}</span></td>
                    <td><span className={`pa-status-pill ${resource.status === "Published" ? "is-published" : "is-draft"}`}><span className="pa-status-dot"/>{resource.status}</span></td>
                    <td><div className="pa-file-cell"><span className="pa-pdf-icon">PDF</span><span title={resource.documentName}>{resource.documentName}</span></div></td>
                    <td className="pa-date-cell">{resource.updatedAt}</td>
                    <td><div className="pa-row-actions"><button type="button" className="pa-icon-button" onClick={() => openEditForm(resource)} aria-label={`Edit ${resource.title}`} title="Edit"><Icon name="edit"/></button><button type="button" className="pa-icon-button pa-delete-button" onClick={() => deleteResource(resource)} aria-label={`Delete ${resource.title}`} title="Delete"><Icon name="trash"/></button></div></td>
                  </tr>)}
                  {filteredResources.length === 0 && <tr><td colSpan={6}><div className="pa-empty-state"><span className="pa-empty-icon"><Icon name="search"/></span><strong>No resources found</strong><p>Try changing your search or filters.</p><button type="button" className="pa-text-button" onClick={() => { setQuery(""); setCategoryFilter("All categories"); setStatusFilter("All status"); }}>Clear filters</button></div></td></tr>}
                </tbody>
              </table>
            </div>
            <div className="pa-table-footer"><span>Showing <strong>{filteredResources.length}</strong> of <strong>{resources.length}</strong> resources</span><span className="pa-demo-note"><span/> Local preview data</span></div>
          </section>
          <div className="pa-footer-note">PROSIGHT Content Studio <span>·</span> Admin interface preview</div>
        </div>
      </section>

      {notice && <div className="pa-toast" role="status"><span className="pa-toast-check">✓</span>{notice}</div>}

      {isFormOpen && <div className="pa-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsFormOpen(false); }}>
        <section className="pa-resource-modal" role="dialog" aria-modal="true" aria-labelledby="pa-form-title">
          <header className="pa-modal-header"><div><p className="pa-eyebrow">RESOURCE LIBRARY</p><h2 id="pa-form-title">{editingId ? "Edit resource" : "Add a new resource"}</h2><p>Complete the details below to prepare a resource for your website.</p></div><button type="button" className="pa-icon-button pa-modal-close" aria-label="Close form" onClick={() => setIsFormOpen(false)}><Icon name="close"/></button></header>
          <form className="pa-resource-form" onSubmit={saveResource}>
            <div className="pa-form-main">
              <div className="pa-form-section-title"><span>01</span><div><strong>Resource details</strong><small>Give the resource a clear title and description.</small></div></div>
              <label className="pa-field"><span>Resource title <i>*</i></span><input required maxLength={180} value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} placeholder="e.g. The AI-First CEO: Why AI Must Be CEO-Led"/><small>This title will appear on the public Resources page.</small></label>
              <div className="pa-form-two-col">
                <label className="pa-field"><span>Category <i>*</i></span><select required value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value as Category })}>{CATEGORY_OPTIONS.map((category) => <option key={category}>{category}</option>)}</select></label>
                <label className="pa-field"><span>Publication status</span><select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value as ResourceStatus })}><option>Draft</option><option>Published</option></select><small>Drafts are not displayed publicly.</small></label>
              </div>
              <label className="pa-field"><span>Short description</span><textarea rows={4} maxLength={500} value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} placeholder="Summarise the value of this article or document…"/><small>{form.description.length}/500 characters</small></label>
              <label className="pa-field"><span>Tags</span><input value={form.tags} onChange={(event) => setForm({ ...form, tags: event.target.value })} placeholder="Leadership, AI strategy, Enterprise AI"/><small>Separate each tag with a comma.</small></label>
            </div>

            <div className="pa-form-assets">
              <div className="pa-form-section-title"><span>02</span><div><strong>Resource files</strong><small>Add a thumbnail and the downloadable document.</small></div></div>
              <div className="pa-upload-block"><div className="pa-upload-heading"><span>Thumbnail image <i>*</i></span><span className="pa-file-hint">WEBP, PNG or JPG</span></div>
                <label className={`pa-image-drop ${thumbnailPreview ? "has-preview" : ""}`}>
                  <input type="file" accept="image/png,image/jpeg,image/webp,image/avif" onChange={handleThumbnailChange}/>
                  {thumbnailPreview ? <><img className="pa-thumbnail-preview" src={thumbnailPreview} alt="Thumbnail preview"/><span className="pa-change-image"><Icon name="upload"/> Change image</span></> : <><span className="pa-upload-cloud"><Icon name="upload"/></span><strong>Click to upload thumbnail</strong><span>Choose an image from your computer</span><small>Recommended: landscape, 1200 × 800 px</small></>}
                </label>
                {thumbnailFile && <div className="pa-selected-file"><span className="pa-selected-file-icon">IMG</span><span><strong>{thumbnailFile.name}</strong><small>{(thumbnailFile.size / 1024 / 1024).toFixed(2)} MB</small></span><button type="button" aria-label="Remove thumbnail" onClick={() => { setThumbnailFile(null); setThumbnailPreview(""); }}><Icon name="close"/></button></div>}
              </div>
              <div className="pa-upload-block"><div className="pa-upload-heading"><span>Document file <i>*</i></span><span className="pa-file-hint">PDF only</span></div>
                <label className={`pa-document-drop ${documentFile ? "has-file" : ""}`}><input type="file" accept="application/pdf,.pdf" onChange={handleDocumentChange}/><span className="pa-pdf-large">PDF</span><span className="pa-document-copy"><strong>{documentFile?.name ?? (editingId ? "Choose a replacement PDF" : "Upload resource document")}</strong><small>{documentFile ? `${(documentFile.size / 1024 / 1024).toFixed(2)} MB · Ready to save` : "Click to browse your files · PDF format"}</small></span><span className="pa-upload-action"><Icon name="upload"/></span></label>
                {!documentFile && editingId && <p className="pa-existing-file-note">Current file: {resources.find((resource) => resource.id === editingId)?.documentName}. Choose another file to replace it.</p>}
              </div>
              <div className="pa-upload-tip"><span>i</span><p>File selection is a front-end preview. The files will be uploaded to secure media storage after the Django API is connected.</p></div>
            </div>
            {formError && <div className="pa-form-error" role="alert">{formError}</div>}
            <footer className="pa-modal-footer"><span><i>*</i> Required fields</span><div><button type="button" className="pa-secondary-button" onClick={() => setIsFormOpen(false)}>Cancel</button><button type="submit" className="pa-primary-button"><Icon name="check"/>{editingId ? "Save changes" : form.status === "Published" ? "Publish resource" : "Save as draft"}</button></div></footer>
          </form>
        </section>
      </div>}
    </main>
  );
}
