// =========================================================
// PROSIGHT DISCOVER — SERIES AND BLOG CATALOGUE
// Generated from the supplied all-series.zip archive.
// Blog files are served from public/documents/series/.
// =========================================================

export type TopicBlog = {
  id: string;
  title: string;
  documentPath: string;
  format: "docx";
};

export type IntelligenceTopic = {
  id: string;
  title: string;
  category: string;
  description: string;
  detail: string;
  relatedTopicIds: string[];
  tags: string[];
  source?: string;
  parentTopic?: string;
  image?: string;
  seriesNumber?: number;
  acronymLetter?: string;
  blogs?: TopicBlog[];
};

const source = "PROSIGHT Series Catalogue";

export const topics: IntelligenceTopic[] = [
  {
    id: "prosight-knowledge-map",
    title: "PROSIGHT Knowledge Map",
    category: "PROSIGHT",
    description: "Explore PROSIGHT’s connected series across AI leadership, platform engineering, AI storytelling, AISWITCH management, practice research and value selling.",
    detail: "Select a series to explore its purpose and the original blog documents supplied for that series. The map connects leadership perspectives, platform thinking, storytelling methods, AI-SWITCH management disciplines, research and business value.",
    relatedTopicIds: ["series-1", "series-2", "series-3", "series-4", "series-5", "series-6", "series-7", "series-8", "series-9", "series-10", "series-11", "series-12", "series-14", "series-15"],
    tags: ["PROSIGHT", "AI", "AISWITCH", "Leadership", "Research", "Value Selling"],
    source,
    parentTopic: "PROSIGHT",
  },
  {
    id: "series-1",
    seriesNumber: 1,
    title: "The AI-First CEO/CXO Blogs",
    category: "Leadership and Strategy",
    description: "Leadership perspectives on CEO-led AI transformation, enterprise GenAI capabilities, AI-cloud partnerships and service-provider alignment.",
    detail: "Leadership perspectives that frame AI as an enterprise priority, including the GenAI Centre of Excellence and strategic partner choices.",
    relatedTopicIds: ["series-2", "series-6", "series-12", "series-15", "prosight-knowledge-map"],
    tags: ["AI Leadership", "CEO", "CXO", "Enterprise GenAI"],
    source,
    parentTopic: "PROSIGHT Knowledge Map",
    blogs: [
      {
        id: "s1-blog-01",
        title: "The AI-FIRST CEO/CXO: Why AI Must Be CEO-Led",
        documentPath: "/documents/series/series-01/series-01-blog-01.docx",
        format: "docx",
      },
      {
        id: "s1-blog-02",
        title: "Building a Future-Ready GenAI Centre of Excellence (CoE) for Large Enterprises",
        documentPath: "/documents/series/series-01/series-01-blog-02.docx",
        format: "docx",
      },
      {
        id: "s1-blog-03",
        title: "Why CEOs Must Select the Right AI-Cloud Partners to Power Enterprise GenAI Transformation",
        documentPath: "/documents/series/series-01/series-01-blog-03.docx",
        format: "docx",
      },
      {
        id: "s1-blog-04",
        title: "Aligning with the Right Service Providers (SPs) for AI-Powered CEOs",
        documentPath: "/documents/series/series-01/series-01-blog-04.docx",
        format: "docx",
      },
    ],
  },
  {
    id: "series-2",
    seriesNumber: 2,
    title: "Platform Engineering",
    category: "Platform Engineering",
    description: "Platform economy strategies, sustainable platform foundations, business platform definition and platform engineering.",
    detail: "Explore platform strategy from business models and greenprinting through platformization and enterprise-scale engineering.",
    relatedTopicIds: ["series-1", "series-5", "series-9", "series-12", "series-14", "series-15", "prosight-knowledge-map"],
    tags: ["Platform Economy", "Platform Engineering", "Business Platforms"],
    source,
    parentTopic: "PROSIGHT Knowledge Map",
    blogs: [
      {
        id: "s2-blog-01",
        title: "Winning in the Platform Economy: Strategies for Success",
        documentPath: "/documents/series/series-02/series-02-blog-01.docx",
        format: "docx",
      },
      {
        id: "s2-blog-02",
        title: "Greenprinting Platforms: Designing Sustainable Foundations for the Platform Economy",
        documentPath: "/documents/series/series-02/series-02-blog-02.docx",
        format: "docx",
      },
      {
        id: "s2-blog-03",
        title: "Platformizing Businesses: Transforming Enterprises for the Platform Economy",
        documentPath: "/documents/series/series-02/series-02-blog-03.docx",
        format: "docx",
      },
      {
        id: "s2-blog-04",
        title: "What's Your Platform? Identifying and Defining Your Business Platform for Success",
        documentPath: "/documents/series/series-02/series-02-blog-04.docx",
        format: "docx",
      },
      {
        id: "s2-blog-05",
        title: "Engineering the Future — Top 10 Platform Engineering Steps for Enterprise-Scale Transformation",
        documentPath: "/documents/series/series-02/series-02-blog-05.docx",
        format: "docx",
      },
    ],
  },
  {
    id: "series-3",
    seriesNumber: 3,
    title: "Introduction: What’s AI Storytelling",
    category: "AI Storytelling",
    description: "An introduction to AI storytelling through design principles, AI-cloud change, AI stories, data narratives and storytelling checklists.",
    detail: "Explore the foundations of AI storytelling, from Gestalt design principles and change narratives to AI stories, data-cloud narratives and storytelling methods.",
    relatedTopicIds: ["series-4", "series-5", "series-6", "prosight-knowledge-map"],
    tags: ["AI Storytelling", "AI Design", "AI Narratives"],
    source,
    parentTopic: "PROSIGHT Knowledge Map",
    blogs: [
      {
        id: "s3-blog-01",
        title: "Gestalt’s Principles in AI – Seeing the Whole in AI Design",
        documentPath: "/documents/series/series-03/series-03-blog-01.docx",
        format: "docx",
      },
      {
        id: "s3-blog-02",
        title: "AI-Cloud Change Pilot: U – Navigating Enterprise Transformation with the U Model",
        documentPath: "/documents/series/series-03/series-03-blog-02.docx",
        format: "docx",
      },
      {
        id: "s3-blog-03",
        title: "What's Your AI Story? – Crafting Impactful AI Narratives",
        documentPath: "/documents/series/series-03/series-03-blog-03.docx",
        format: "docx",
      },
      {
        id: "s3-blog-04",
        title: "The 5 C's of AI-Data-Cloud – Elevating Data Stories to Strategic AI Narratives",
        documentPath: "/documents/series/series-03/series-03-blog-04.docx",
        format: "docx",
      },
      {
        id: "s3-blog-05",
        title: "Unique AI Stories: How to Craft Narratives That Resonate",
        documentPath: "/documents/series/series-03/series-03-blog-05.docx",
        format: "docx",
      },
      {
        id: "s3-blog-06",
        title: "Checklist – AI Narrative",
        documentPath: "/documents/series/series-03/series-03-blog-06.docx",
        format: "docx",
      },
      {
        id: "s3-blog-07",
        title: "AI Storytelling with 5Ds",
        documentPath: "/documents/series/series-03/series-03-blog-07.docx",
        format: "docx",
      },
    ],
  },
  {
    id: "series-4",
    seriesNumber: 4,
    title: "Crafting 3-Minute AI Story Boilerplates",
    category: "AI Storytelling",
    description: "Practical methods and boilerplates for crafting concise, persuasive three-minute AI stories.",
    detail: "Explore the AISWITCH boilerplate and practical techniques for shaping, simplifying and presenting a strategic AI story in three minutes.",
    relatedTopicIds: ["series-3", "series-5", "series-6", "series-8", "series-15", "prosight-knowledge-map"],
    tags: ["Three-Minute Stories", "AISWITCH Boilerplate", "AI Strategy"],
    source,
    parentTopic: "PROSIGHT Knowledge Map",
    blogs: [
      {
        id: "s4-blog-01",
        title: "Why You Need an AI Story and Why 3 Minutes is All You’ve Got",
        documentPath: "/documents/series/series-04/series-04-blog-01.docx",
        format: "docx",
      },
      {
        id: "s4-blog-02",
        title: "How to Build a 3-Minute AI Story: A Step-by-Step Framework",
        documentPath: "/documents/series/series-04/series-04-blog-02.docx",
        format: "docx",
      },
      {
        id: "s4-blog-03",
        title: "Declutter Your AI Storytelling Applying the Power of 3",
        documentPath: "/documents/series/series-04/series-04-blog-03.docx",
        format: "docx",
      },
      {
        id: "s4-blog-04",
        title: "Inside the AI Boilerplate Anatomy of a 3-Minute Strategic Narrative",
        documentPath: "/documents/series/series-04/series-04-blog-04.docx",
        format: "docx",
      },
      {
        id: "s4-blog-05",
        title: "Pivot Your AI Strategy: The Cloud-AI-Data Leverage",
        documentPath: "/documents/series/series-04/series-04-blog-05.docx",
        format: "docx",
      },
      {
        id: "s4-blog-06",
        title: "Your 3-Minute AI Story from Template to Transformation",
        documentPath: "/documents/series/series-04/series-04-blog-06.docx",
        format: "docx",
      },
    ],
  },
  {
    id: "series-5",
    seriesNumber: 5,
    title: "What’s Data Storytelling with AISWITCH",
    category: "Data Storytelling",
    description: "Data storytelling techniques, storyboarding, storytelling tools, three-minute data stories and CXO communication.",
    detail: "Explore methods for transforming data into decisions, using storyboards, data storytelling tools and concise narratives for CXO audiences.",
    relatedTopicIds: ["series-2", "series-3", "series-4", "series-8", "series-9", "prosight-knowledge-map"],
    tags: ["Data Storytelling", "Storyboarding", "CXO Communication"],
    source,
    parentTopic: "PROSIGHT Knowledge Map",
    blogs: [
      {
        id: "s5-blog-01",
        title: "Transforming Data into Decisions- 5 Proven Data Storytelling Techniques",
        documentPath: "/documents/series/series-05/series-05-blog-01.docx",
        format: "docx",
      },
      {
        id: "s5-blog-02",
        title: "HOW TO USE STORYBOARDING TECH FOR BUILDING DATA STORIES",
        documentPath: "/documents/series/series-05/series-05-blog-02.docx",
        format: "docx",
      },
      {
        id: "s5-blog-03",
        title: "WHAT ARE TOP 5 FEATURES OF DATA STORY-TELLING TOOLS?",
        documentPath: "/documents/series/series-05/series-05-blog-03.docx",
        format: "docx",
      },
      {
        id: "s5-blog-04",
        title: "HOW TO BUILD 3-MINUTE DATA STORIES FOR CXO ATTENTION SPAN",
        documentPath: "/documents/series/series-05/series-05-blog-04.docx",
        format: "docx",
      },
      {
        id: "s5-blog-05",
        title: "HOW TO USE THE SO-WHAT AND WHAT-THEN DATA STORY-TELLING TECH",
        documentPath: "/documents/series/series-05/series-05-blog-05.docx",
        format: "docx",
      },
      {
        id: "s5-blog-06",
        title: "DATA STORYTELLING TECHNIQUE: QUESTIONNAIRE TEMPLATING",
        documentPath: "/documents/series/series-05/series-05-blog-06.docx",
        format: "docx",
      },
    ],
  },
  {
    id: "series-6",
    seriesNumber: 6,
    title: "S of AI-SWITCH: Strategy Management of AI Automation",
    category: "AISWITCH Management",
    description: "AI strategy management topics covering agile leadership, minimum viable strategy, strategy maps, partner evaluation, ethical AI and AIOps.",
    detail: "The S dimension of AISWITCH focuses on strategy management for AI automation, with leadership, strategy methods, enterprise examples, implementation choices and maturity.",
    relatedTopicIds: ["series-1", "series-3", "series-4", "series-7", "series-8", "series-9", "series-10", "series-11", "series-12", "series-15", "prosight-knowledge-map"],
    tags: ["AISWITCH", "Strategy", "AI Leadership", "AI Automation"],
    source,
    parentTopic: "PROSIGHT Knowledge Map",
    acronymLetter: "S",
    blogs: [
      {
        id: "s6-blog-01",
        title: "AISWITCH_2025 CALM3 AI LEADERSHIP FOR AGILE AI STRATEGY",
        documentPath: "/documents/series/series-06/series-06-blog-01.docx",
        format: "docx",
      },
      {
        id: "s6-blog-02",
        title: "AISWITCH_2025_AI MVS CALM1 TOC CONSTRAINTS",
        documentPath: "/documents/series/series-06/series-06-blog-02.docx",
        format: "docx",
      },
      {
        id: "s6-blog-03",
        title: "AISWITCH_2025 CALM4 AI MVS AGILE STRATEGY",
        documentPath: "/documents/series/series-06/series-06-blog-03.docx",
        format: "docx",
      },
      {
        id: "s6-blog-04",
        title: "AISWITCH_2025 ENTERPRISE AI STRATEGY EXAMPLES",
        documentPath: "/documents/series/series-06/series-06-blog-04.docx",
        format: "docx",
      },
      {
        id: "s6-blog-05",
        title: "AISWITCH_2025_AI STRATEGY MAP TEMPLATE",
        documentPath: "/documents/series/series-06/series-06-blog-05.docx",
        format: "docx",
      },
      {
        id: "s6-blog-06",
        title: "AISWITCH_2025_AI STRATEGY COST FOCUS DIFFERENTIATION",
        documentPath: "/documents/series/series-06/series-06-blog-06.docx",
        format: "docx",
      },
      {
        id: "s6-blog-07",
        title: "AISWITCH_2020_AI STRATEGY HOW TO USE MCKINSEY 7S",
        documentPath: "/documents/series/series-06/series-06-blog-07.docx",
        format: "docx",
      },
      {
        id: "s6-blog-08",
        title: "AISWITCH_2025_How to Evaluate AI implementation Partners Objectively with 5 Next Practices",
        documentPath: "/documents/series/series-06/series-06-blog-08.docx",
        format: "docx",
      },
      {
        id: "s6-blog-09",
        title: "AISWITCH_2025_Ethical AI Manifesto- 12 Principles",
        documentPath: "/documents/series/series-06/series-06-blog-09.docx",
        format: "docx",
      },
      {
        id: "s6-blog-10",
        title: "AISWITCH_2025_AIOps Maturity Model",
        documentPath: "/documents/series/series-06/series-06-blog-10.docx",
        format: "docx",
      },
      {
        id: "s6-blog-11",
        title: "AISWITCH_2025_Why AI fails",
        documentPath: "/documents/series/series-06/series-06-blog-11.docx",
        format: "docx",
      },
    ],
  },
  {
    id: "series-7",
    seriesNumber: 7,
    title: "W of AI-SWITCH: Workforce Management for AI Automation",
    category: "AISWITCH Management",
    description: "Workforce management topics covering reverse mentoring, AI reskilling, design thinking and the Eliminate First, Automate Next approach.",
    detail: "The W dimension of AISWITCH focuses on workforce readiness, reskilling, design thinking and redesigning work before automating it.",
    relatedTopicIds: ["series-1", "series-6", "series-10", "series-11", "prosight-knowledge-map"],
    tags: ["AISWITCH", "Workforce", "Reskilling", "AI Automation"],
    source,
    parentTopic: "PROSIGHT Knowledge Map",
    acronymLetter: "W",
    blogs: [
      {
        id: "s7-blog-01",
        title: "AISWITCH_2025 REVERSE MENTORING MUST FOR AI RESKILLING",
        documentPath: "/documents/series/series-07/series-07-blog-01.docx",
        format: "docx",
      },
      {
        id: "s7-blog-02",
        title: "AISWITCH_2025_AI and Design Think- The winning techniques combo",
        documentPath: "/documents/series/series-07/series-07-blog-02.docx",
        format: "docx",
      },
      {
        id: "s7-blog-03",
        title: "AISWITCH_2025_EFAN Eliminate First Automate Next",
        documentPath: "/documents/series/series-07/series-07-blog-03.docx",
        format: "docx",
      },
    ],
  },
  {
    id: "series-8",
    seriesNumber: 8,
    title: "I of AI-SWITCH: Information (Data) Management for AI",
    category: "AISWITCH Management",
    description: "Information and data management topics covering evolving AI standards, AI technology-data governance and data bias.",
    detail: "The I dimension of AISWITCH focuses on the information foundations for AI, including standards, technology-data governance and bias.",
    relatedTopicIds: ["series-4", "series-5", "series-6", "series-9", "series-10", "series-11", "series-12", "prosight-knowledge-map"],
    tags: ["AISWITCH", "Information Management", "Data Governance", "Data Bias"],
    source,
    parentTopic: "PROSIGHT Knowledge Map",
    acronymLetter: "I",
    blogs: [
      {
        id: "s8-blog-01",
        title: "AISWITCH_2025_EVOLVING AI STANDARDS",
        documentPath: "/documents/series/series-08/series-08-blog-01.docx",
        format: "docx",
      },
      {
        id: "s8-blog-02",
        title: "AISWITCH_2025 EXAMPLES OF EVOLVING GLOBAL AI TECH-DATA GOVERNANCE STANDARDS",
        documentPath: "/documents/series/series-08/series-08-blog-02.docx",
        format: "docx",
      },
      {
        id: "s8-blog-03",
        title: "AISWITCH_2025 HOW TO DEBIAS AI- 15 TYPES OF DATA BIAS- AI360 AEQUITAS",
        documentPath: "/documents/series/series-08/series-08-blog-03.docx",
        format: "docx",
      },
    ],
  },
  {
    id: "series-9",
    seriesNumber: 9,
    title: "T of AI-SWITCH: Technology Management for AI Automation",
    category: "AISWITCH Management",
    description: "Technology management topics covering AI research, enterprise AI architecture, evolving standards and the relationship between AI and IT.",
    detail: "The T dimension of AISWITCH focuses on technology choices and enterprise AI architecture, including research, standards and the role of IT.",
    relatedTopicIds: ["series-2", "series-5", "series-6", "series-8", "series-10", "series-12", "series-14", "prosight-knowledge-map"],
    tags: ["AISWITCH", "Technology Management", "Enterprise AI", "AI Automation"],
    source,
    parentTopic: "PROSIGHT Knowledge Map",
    acronymLetter: "T",
    blogs: [
      {
        id: "s9-blog-01",
        title: "Pivot Your AI Story the AWS Way with integrated cloud-AI data leverage: AISWITCH 3-minute AI Story Boilerplate",
        documentPath: "/documents/series/series-09/series-09-blog-01.docx",
        format: "docx",
      },
      {
        id: "s9-blog-02",
        title: "AISWITCH 7-Layer Architecture Framework for Enterprise AI-automation Solutions",
        documentPath: "/documents/series/series-09/series-09-blog-02.docx",
        format: "docx",
      },
      {
        id: "s9-blog-03",
        title: "AISWITCH_2025_EVOLVING AI STANDARDS",
        documentPath: "/documents/series/series-09/series-09-blog-03.docx",
        format: "docx",
      },
      {
        id: "s9-blog-04",
        title: "AISWITCH AI PRACTICE COOKBOOK: WHY ENTERPRISE AI MUSTN’T BE ONLY AN IT INITIATIVE",
        documentPath: "/documents/series/series-09/series-09-blog-04.docx",
        format: "docx",
      },
    ],
  },
  {
    id: "series-10",
    seriesNumber: 10,
    title: "C of AI-SWITCH: Culture Management for AI Automation",
    category: "AISWITCH Management",
    description: "Culture management topics covering design for trust and value communication frameworks for AI.",
    detail: "The C dimension of AISWITCH focuses on the cultural conditions for AI adoption, including trust and value communication.",
    relatedTopicIds: ["series-6", "series-7", "series-8", "series-9", "series-11", "series-12", "prosight-knowledge-map"],
    tags: ["AISWITCH", "Culture", "Trust", "Value Communication"],
    source,
    parentTopic: "PROSIGHT Knowledge Map",
    acronymLetter: "C",
    blogs: [
      {
        id: "s10-blog-01",
        title: "AISWITCH AI PRACTICE COOKBOOK: USE DfT- DESIGN FOR TRUST FRAMEWORK TO BUILD AI FOR FAST ADOPTION",
        documentPath: "/documents/series/series-10/series-10-blog-01.docx",
        format: "docx",
      },
      {
        id: "s10-blog-02",
        title: "AISWITCH CUDA- A value communication framework for Enterprise AI-automation",
        documentPath: "/documents/series/series-10/series-10-blog-02.docx",
        format: "docx",
      },
    ],
  },
  {
    id: "series-11",
    seriesNumber: 11,
    title: "H of AI-SWITCH: Human-AI Augmentation Metrics Management",
    category: "AISWITCH Management",
    description: "Human-AI augmentation topics covering AI automation business and AI strategy map templates.",
    detail: "The H dimension of AISWITCH focuses on human-AI augmentation and the metrics and scorecards used to manage AI-automation solutions.",
    relatedTopicIds: ["series-6", "series-7", "series-8", "series-10", "series-12", "series-15", "prosight-knowledge-map"],
    tags: ["AISWITCH", "Human-AI Augmentation", "Metrics", "AI Automation"],
    source,
    parentTopic: "PROSIGHT Knowledge Map",
    acronymLetter: "H",
    blogs: [
      {
        id: "s11-blog-01",
        title: "AISWITCH Balanced Scorecards for Enterprise AI-automation Solutions",
        documentPath: "/documents/series/series-11/series-11-blog-01.docx",
        format: "docx",
      },
      {
        id: "s11-blog-02",
        title: "AISWITCH AI PRACTICE COOKBOOK: 2025 AI-RPA STRATEGY MAP TEMPLATE",
        documentPath: "/documents/series/series-11/series-11-blog-02.docx",
        format: "docx",
      },
    ],
  },
  {
    id: "series-12",
    seriesNumber: 12,
    title: "AI-SWITCH Practice Research for Vendors & Service Providers",
    category: "Practice Research",
    description: "Practice research topics for vendors and service providers, including value selling, leadership, agile AI strategy, AI platforms and ethical AI.",
    detail: "A practice-oriented research series for vendors and service providers, bringing together AI service value selling, strategy, platform differentiators, standards and ethical leadership.",
    relatedTopicIds: ["series-1", "series-2", "series-6", "series-8", "series-9", "series-10", "series-11", "series-14", "series-15", "prosight-knowledge-map"],
    tags: ["AISWITCH", "Vendors", "Service Providers", "Practice Research"],
    source,
    parentTopic: "PROSIGHT Knowledge Map",
    blogs: [
      {
        id: "s12-blog-01",
        title: "How to best sell AI services: Use the Value-selling framework",
        documentPath: "/documents/series/series-12/series-12-blog-01.docx",
        format: "docx",
      },
      {
        id: "s12-blog-02",
        title: "AISWITCH_2025_CALM3 LEADERSHIP AGILE AI STRATEGY",
        documentPath: "/documents/series/series-12/series-12-blog-02.docx",
        format: "docx",
      },
      {
        id: "s12-blog-03",
        title: "AISWITCH_2025_AI MVS CALM1 TOC CONSTRAINTS",
        documentPath: "/documents/series/series-12/series-12-blog-03.docx",
        format: "docx",
      },
      {
        id: "s12-blog-04",
        title: "AISWITCH_2025_CALM1 AI MVS AGILE STRATEGY",
        documentPath: "/documents/series/series-12/series-12-blog-04.docx",
        format: "docx",
      },
      {
        id: "s12-blog-05",
        title: "AISWITCH_2025_TOP 10 NEXTGEN AI PLATFORM DIFFERENTIATORS FROM SERVICE PROVIDERS",
        documentPath: "/documents/series/series-12/series-12-blog-05.docx",
        format: "docx",
      },
      {
        id: "s12-blog-06",
        title: "AISWITCH_2025_ENTERPRISE AI STRATEGY EXAMPLES",
        documentPath: "/documents/series/series-12/series-12-blog-06.docx",
        format: "docx",
      },
      {
        id: "s12-blog-07",
        title: "AISWITCH_2025_AI STRATEGY MAP TEMPLATE",
        documentPath: "/documents/series/series-12/series-12-blog-07.docx",
        format: "docx",
      },
      {
        id: "s12-blog-08",
        title: "AISWITCH_2025_EVOLVING AI STANDARDS",
        documentPath: "/documents/series/series-12/series-12-blog-08.docx",
        format: "docx",
      },
      {
        id: "s12-blog-09",
        title: "AISWITCH_2025_LEADERS IN ETHICAL AND FAIR ENTERPRISE AI SOLUTIONS",
        documentPath: "/documents/series/series-12/series-12-blog-09.docx",
        format: "docx",
      },
    ],
  },
  {
    id: "series-14",
    seriesNumber: 14,
    title: "Practice Research",
    category: "Practice Research",
    description: "Research topics covering language AI, customer-inspired AI, ethics, blue-ocean opportunities and emerging AI partnerships.",
    detail: "Explore practice research on language AI, customer-inspired AI, ethics-assured AI, service-provider opportunities and emerging ecosystems.",
    relatedTopicIds: ["series-2", "series-9", "series-12", "series-15", "prosight-knowledge-map"],
    tags: ["Practice Research", "Language AI", "AI Ethics", "Ecosystems"],
    source,
    parentTopic: "PROSIGHT Knowledge Map",
    blogs: [
      {
        id: "s14-blog-01",
        title: "STATE OF LANGUAGE AI",
        documentPath: "/documents/series/series-14/series-14-blog-01.docx",
        format: "docx",
      },
      {
        id: "s14-blog-02",
        title: "CUSTOMER-INSPIRED AI- THE AWS WAY",
        documentPath: "/documents/series/series-14/series-14-blog-02.docx",
        format: "docx",
      },
      {
        id: "s14-blog-03",
        title: "THE BIGGEST QUESTION: ETHICS vs. AI? Or ETHICS-ASSURED AI?",
        documentPath: "/documents/series/series-14/series-14-blog-03.docx",
        format: "docx",
      },
      {
        id: "s14-blog-04",
        title: "5 Blue-Ocean Opportunities for AI Tech/ Service Providers",
        documentPath: "/documents/series/series-14/series-14-blog-04.docx",
        format: "docx",
      },
      {
        id: "s14-blog-05",
        title: "AI Partnerships & New Ecosystem leaders emerging post-COVID",
        documentPath: "/documents/series/series-14/series-14-blog-05.docx",
        format: "docx",
      },
      {
        id: "s14-blog-06",
        title: "AWS India Conclave: Directions for TSPs to Succeed in India",
        documentPath: "/documents/series/series-14/series-14-blog-06.docx",
        format: "docx",
      },
    ],
  },
  {
    id: "series-15",
    seriesNumber: 15,
    title: "Why Value-Sell AI",
    category: "Value Selling",
    description: "Value-selling topics focused on Why Value-Sell AI and the five Cs of ValueSelling AI.",
    detail: "Explore the value-selling perspective and the five Cs of ValueSelling AI.",
    relatedTopicIds: ["series-1", "series-2", "series-4", "series-6", "series-11", "series-12", "series-14", "prosight-knowledge-map"],
    tags: ["Value Selling", "AI Business Value", "Commercial Strategy"],
    source,
    parentTopic: "PROSIGHT Knowledge Map",
    blogs: [
      {
        id: "s15-blog-01",
        title: "Why Value-Sell AI",
        documentPath: "/documents/series/series-15/series-15-blog-01.docx",
        format: "docx",
      },
      {
        id: "s15-blog-02",
        title: "5 C's of ValueSelling AI",
        documentPath: "/documents/series/series-15/series-15-blog-02.docx",
        format: "docx",
      },
    ],
  },
];

export const defaultTopicId = "prosight-knowledge-map";

export function getTopicById(id: string): IntelligenceTopic | undefined {
  return topics.find((topic) => topic.id === id);
}

export function getRelatedTopics(topic: IntelligenceTopic): IntelligenceTopic[] {
  const byId = new Map(topics.map((item) => [item.id, item]));
  return topic.relatedTopicIds
    .map((id) => byId.get(id))
    .filter((item): item is IntelligenceTopic => Boolean(item));
}

export function getAllSeriesBlogs(): TopicBlog[] {
  return topics.flatMap((topic) => topic.blogs ?? []);
}
