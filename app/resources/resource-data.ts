// =========================================================
// PROSIGHT — RESOURCE DATA
// File: app/resources/resource-data.ts
// =========================================================

export type ResourceCategory =
  | "AI for CXO"
  | "AI Storytelling"
  | "Platform Engineering";

export type Resource = {
  id: string;
  category: ResourceCategory;
  title: string;

  // Landscape thumbnail used on the Resources listing.
  image: string;

  // Portrait PNG book cover used on the detail page.
  coverImage?: string;

  // Thumbnail fallback theme.
  theme: string;

  // PDF path relative to the public directory.
  // Optional when the matching PDF is unavailable.
  pdfPath?: string;

  // Resource detail route.
  href: string;
};

// =========================================================
// RESOURCE CATEGORIES
// =========================================================

export const categories = [
  "All Categories",
  "AI for CXO",
  "AI Storytelling",
  "Platform Engineering",
] as const;

// =========================================================
// ALL 14 RESOURCES
// =========================================================

export const resources: Resource[] = [
  // -------------------------------------------------------
  // 1. THE AI-FIRST CEO/CXO
  // -------------------------------------------------------
  {
    id: "ai-first-ceo",
    category: "AI for CXO",
    title: "The AI-FIRST CEO/CXO: Why AI Must Be CEO-Led-PROSIGHT",

    image: "/images/resources/ai-first-ceo.jpg",

    coverImage:
      "/images/resource-covers/The-AI-FIRST-CEO-CXO-Why-AI-Must-Be-CEO-Led.png",

    theme: "network",

    pdfPath:
      "/documents/The-AI-FIRST-CEOCXO-Why-AI-Must-Be-CEO-Led-PROSIGHT-1.pdf",

    href: "/resources/ai-first-ceo",
  },

  // -------------------------------------------------------
  // 2. CHECKLIST AI NARRATIVE
  // -------------------------------------------------------
  {
    id: "ai-narrative-checklist",
    category: "AI Storytelling",
    title: "CHECKLIST AI NARRATIVE-PROSIGHT",

    image: "/images/resources/ai-narrative.jpg",

    coverImage:
      "/images/resource-covers/CHECKLISTS-FOR-AI-NARRATIVES-AND-THE-AGENTIC-AI-MANIFESTO.png",

    theme: "editorial",

    pdfPath:
      "/documents/CHECKLIST-AI-NARRATIVE-PROSIGHT.pdf",

    href: "/resources/ai-narrative-checklist",
  },

  // -------------------------------------------------------
  // 3. UNIQUE AI STORIES
  // -------------------------------------------------------
  {
    id: "unique-ai-stories",
    category: "AI Storytelling",
    title: "UNIQUE AI STORIES-PROSIGHT",

    image: "/images/resources/unique-ai-stories.jpg",

    // Matching portrait PNG not yet identified.
    theme: "technology",

    pdfPath:
      "/documents/UNIQUE-AI-STORIES-PROSIGHT.pdf",

    href: "/resources/unique-ai-stories",
  },

  // -------------------------------------------------------
  // 4. THE 5 CS OF AI-DATA-CLOUD
  // -------------------------------------------------------
  {
    id: "five-cs-ai-data-cloud",
    category: "AI Storytelling",
    title: "THE 5 CS OF AI-DATA-CLOUD-PROSIGHT",

    image: "/images/resources/ai-data-cloud.jpg",

    coverImage:
      "/images/resource-covers/THE-5-CS-OF-AI-DATA-CLOUD.png",

    theme: "datacenter",

    pdfPath:
      "/documents/THE-5-CS-OF-AI-DATA-CLOUD-PROSIGHT.pdf",

    href: "/resources/five-cs-ai-data-cloud",
  },

  // -------------------------------------------------------
  // 5. WHAT'S YOUR AI STORY
  // -------------------------------------------------------
  {
    id: "ai-story",
    category: "AI Storytelling",
    title: "WHAT'S YOUR AI STORY-PROSIGHT",

    image: "/images/resources/ai-story.jpg",

    coverImage:
      "/images/resource-covers/WHATS-YOUR-AI-STORY.png",

    theme: "robotics",

    pdfPath:
      "/documents/WHATS-YOUR-AI-STORY-PROSIGHT.pdf",

    href: "/resources/ai-story",
  },

  // -------------------------------------------------------
  // 6. AI-CLOUD CHANGE PILOT
  // -------------------------------------------------------
  {
    id: "ai-cloud-change",
    category: "AI Storytelling",
    title: "AI-CLOUD CHANGE PILOT-PROSIGHT",

    image: "/images/resources/ai-cloud-change.jpg",

    // Matching portrait PNG not yet identified.
    theme: "network",

    pdfPath:
      "/documents/AI-CLOUD-CHANGE-PILOT-PROSIGHT.pdf",

    href: "/resources/ai-cloud-change",
  },

  // -------------------------------------------------------
  // 7. GESTALT'S PRINCIPLES IN AI STORYTELLING
  // -------------------------------------------------------
  {
    id: "gestalt-storytelling",
    category: "AI Storytelling",
    title: "GESTALT'S PRINCIPLES IN AI STORYTELLING-PROSIGHT",

    image: "/images/resources/gestalt-storytelling.jpg",

    coverImage:
      "/images/resource-covers/GESTALTS-PRINCIPLES-IN-AI-STORYTELLING.png",

    theme: "editorial",

      pdfPath:
      "/documents/GREENPRINTING-PLATFORMS-PROSIGHT.pdf",

    href: "/resources/gestalt-storytelling",
  },

  // -------------------------------------------------------
  // 8. WHAT'S YOUR PLATFORM
  // -------------------------------------------------------
  {
    id: "your-platform",
    category: "Platform Engineering",
    title: "WHAT'S YOUR PLATFORM-PROSIGHT",

    image: "/images/resources/your-platform.jpg",

    coverImage:
      "/images/resource-covers/WHATS-YOUR-PLATFORM.png",

    theme: "platform",

    pdfPath:
      "/documents/WHATS-YOUR-PLATFORM-PROSIGHT.pdf",

    href: "/resources/your-platform",
  },

  // -------------------------------------------------------
  // 9. PLATFORMIZING BUSINESSES
  // -------------------------------------------------------
  {
    id: "platformizing-businesses",
    category: "Platform Engineering",
    title: "PLATFORMIZING BUSINESSES-PROSIGHT",

    image: "/images/resources/platformizing-businesses.jpg",

    coverImage:
      "/images/resource-covers/PLATFORMIZING-BUSINESSES.png",

    theme: "architecture",

    pdfPath:
      "/documents/PLATFORMIZING-BUSINESSES-PROSIGHT.pdf",

    href: "/resources/platformizing-businesses",
  },

  // -------------------------------------------------------
  // 10. GREENPRINTING PLATFORMS
  // -------------------------------------------------------
  {
    id: "greenprinting-platforms",
    category: "Platform Engineering",
    title: "GREENPRINTING PLATFORMS-PROSIGHT",

    image: "/images/resources/greenprinting-platforms.jpg",

    coverImage:
      "/images/resource-covers/GREENPRINTING-PLATFORMS.png",

    theme: "planning",

    pdfPath:
      "/documents/GREENPRINTING-PLATFORMS-PROSIGHT.pdf",

    href: "/resources/greenprinting-platforms",
  },

  // -------------------------------------------------------
  // 11. HOW TO WIN ON PLATFORMS
  // -------------------------------------------------------
  {
    id: "win-on-platforms",
    category: "Platform Engineering",
    title: "How to Win on Platforms-PROSIGHT",

    image: "/images/resources/win-on-platforms.jpg",

    coverImage:
      "/images/resource-covers/How-to-Win-on-Platforms.png",

    theme: "strategy",

    pdfPath:
      "/documents/How-to-Win-on-Platforms-PROSIGHT.pdf",

    href: "/resources/win-on-platforms",
  },

  // -------------------------------------------------------
  // 12. SERVICE PROVIDERS
  // -------------------------------------------------------
  {
    id: "service-providers",
    category: "AI for CXO",
    title:
      "How AI-First CEOs must align with the Right Service Providers (SPS)-PROSIGHT",

    image: "/images/resources/service-providers.jpg",

    // Verify this PNG's cover title matches the resource.
    coverImage:
      "/images/resource-covers/AI-FIRST-PDF-004.png",

    theme: "code",

    pdfPath:
      "/documents/How-AI-First-CEOs-must-align-with-the-Right-Service-Providers-SPs-PROSIGHT-1.pdf",

    href: "/resources/service-providers",
  },

  // -------------------------------------------------------
  // 13. AGENTIC GENAI CENTRE OF EXCELLENCE
  // -------------------------------------------------------
  {
    id: "agentic-genai-coe",
    category: "AI for CXO",
    title:
      "Building a Future-Ready Agentic & GenAI Centre of Excellence (CoE)-PROSIGHT",

    image: "/images/resources/agentic-genai-coe.jpg",

    coverImage:
      "/images/resource-covers/Building-a-Future-Ready-Agentic-GenAI-Centre-of-Excellence-CoE-PROSIGHT.png",

    theme: "architecture",

    pdfPath:
      "/documents/Building-a-Future-Ready-Agentic-GenAI-Centre-of-Excellence-CoE-PROSIGHT.pdf",

    href: "/resources/agentic-genai-coe",
  },

  // -------------------------------------------------------
  // 14. AI-CLOUD PARTNERS
  // -------------------------------------------------------
  {
    id: "ai-cloud-partners",
    category: "AI for CXO",
    title: "How CEOs Must Select the Right AI-Cloud Partners-PROSIGHT",

    image: "/images/resources/ai-cloud-partners.jpg",

    coverImage:
      "/images/resource-covers/How-CEOs-Must-Select-the-Right-AI-Cloud-Partners-2.png",

    theme: "cloud",

    pdfPath:
      "/documents/How-AI-First-CEOs-must-align-with-the-Right-Service-Providers-SPs-PROSIGHT-1.pdf",

    // No matching PDF was visible in the latest screenshot.

    href: "/resources/ai-cloud-partners",
  },
];

// =========================================================
// FIND RESOURCE BY ID
// =========================================================

export function getResourceById(
  id: string,
): Resource | undefined {
  return resources.find(
    (resource) => resource.id === id,
  );
}