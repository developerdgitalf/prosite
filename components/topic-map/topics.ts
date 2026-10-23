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
};

/**
 * Topic catalogue for the interactive intelligence map.
 * Add `image: "/images/topic-map/your-image.jpg"` to any record when
 * you have a topic image in the public directory.
 */
export const topics: IntelligenceTopic[] = [
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    category: "Technology",
    description:
      "Artificial intelligence is reshaping how organisations discover knowledge, make decisions and deliver services. Its impact connects technology, people, policy, productivity and public trust.",
    detail:
      "Explore the wider AI landscape: from foundation models and AI agents to responsible deployment, workforce transformation, security, governance and environmental impact. These themes are connected, so progress in one area can create opportunities and risks in others.",
    relatedTopicIds: ["foundation-models", "trustworthy-ai", "ai-workforce", "ai-misinformation", "ai-geopolitics", "ai-security", "ai-environment"],
    tags: ["AI", "Emerging technology", "Digital transformation"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Technology and Innovation",
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    category: "Economy and industry",
    description:
      "Infrastructure underpins economic development, essential services and resilience. Investment choices influence access, productivity, regional opportunity and the capacity to respond to future disruptions.",
    detail:
      "Infrastructure outcomes depend on more than physical assets. Financing, private capital, governance, skilled workforces, sustainable design and reliable project pipelines all shape whether infrastructure delivers lasting public and economic value.",
    relatedTopicIds: ["private-capital", "infrastructure-resilience", "geopolitics", "logistics", "sustainable-development", "global-governance", "future-of-work"],
    tags: ["Investment", "Resilience", "Public services"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Economy and industry",
  },
  {
    id: "semiconductors",
    title: "Semiconductors",
    category: "Technology",
    description:
      "Semiconductors are foundational to computing, communications, AI and modern industrial systems. Their supply chains connect manufacturing capability, energy, trade, talent and national strategies.",
    detail:
      "The semiconductor ecosystem is shaped by advanced materials, chip design, fabrication capacity, equipment, skills and international trade. Its resilience depends on supply-chain visibility and cooperation across a complex global network.",
    relatedTopicIds: ["semiconductor-science", "future-manufacturing", "trade-investment", "ai-energy", "geopolitics", "advanced-materials", "innovation"],
    tags: ["Chips", "Supply chain", "Advanced manufacturing"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Technology and industry",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    category: "Climate and environment",
    description:
      "Sustainability brings environmental limits, economic development and social wellbeing into the same decision-making frame. It requires long-term thinking and measurable progress across systems.",
    detail:
      "Sustainability is connected to energy transitions, circular models, biodiversity, water, infrastructure and responsible innovation. Reliable data and aligned incentives can help organisations translate commitments into measurable outcomes.",
    relatedTopicIds: ["climate-crisis", "nature-biodiversity", "water", "circular-economy", "ai-environment", "future-electricity", "sustainable-development"],
    tags: ["Environment", "Long-term value", "Transition"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Climate and environment",
  },
  {
    id: "foundation-models",
    title: "Foundation Models",
    category: "Technology",
    description:
      "Foundation models provide reusable capabilities that can be adapted for many tasks, from language and image generation to reasoning and multimodal analysis.",
    detail:
      "Their practical value depends on evaluation, data provenance, access controls, deployment architecture and ongoing monitoring. Teams must also assess limitations, costs and appropriate human oversight for each use case.",
    relatedTopicIds: ["artificial-intelligence", "trustworthy-ai", "ai-security", "ai-misinformation", "future-of-work"],
    tags: ["Generative AI", "Models", "Evaluation"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Artificial Intelligence",
  },
  {
    id: "trustworthy-ai",
    title: "Ethical and Trustworthy AI",
    category: "Technology and society",
    description:
      "Trustworthy AI requires systems to be designed and operated with accountability, transparency, safety, fairness and appropriate human oversight.",
    detail:
      "Organisations can build trust through clear ownership, risk assessment, documented testing, incident processes and meaningful explanations. Governance should follow the full AI lifecycle rather than being treated as a final approval step.",
    relatedTopicIds: ["artificial-intelligence", "ai-security", "global-governance", "justice-law", "corporate-governance"],
    tags: ["Ethics", "Accountability", "Responsible AI"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Artificial Intelligence",
  },
  {
    id: "ai-workforce",
    title: "AI and Workforce Transformation",
    category: "Work and society",
    description:
      "AI changes how work is organised, how tasks are performed and which skills people need. Effective transformation combines technology adoption with learning, job design and change leadership.",
    detail:
      "Workforce transformation can include role redesign, skills development, new operating models and human-AI collaboration. Leaders should track employee experience and business outcomes, while planning for access, inclusion and responsible transitions.",
    relatedTopicIds: ["artificial-intelligence", "future-of-work", "education-skills", "future-manufacturing", "social-protection"],
    tags: ["Skills", "Employment", "Transformation"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Work and society",
  },
  {
    id: "ai-misinformation",
    title: "AI and Misinformation",
    category: "Technology and society",
    description:
      "AI-generated content can expand creative possibilities while increasing the scale and sophistication of misleading information.",
    detail:
      "Responses may combine provenance signals, media literacy, platform policies, verification workflows and incident response. Measures should protect people without overlooking legitimate expression, access and context.",
    relatedTopicIds: ["artificial-intelligence", "disinformation", "digital-identity", "trustworthy-ai", "global-governance"],
    tags: ["Information integrity", "Trust", "Digital media"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Technology and society",
  },
  {
    id: "ai-geopolitics",
    title: "AI’s Impact on Geopolitics",
    category: "Geopolitics and governance",
    description:
      "AI is becoming a strategic capability that influences national competitiveness, industrial policy, security relationships and international cooperation.",
    detail:
      "Geopolitical questions include access to computing, talent and data; cross-border rules; supply-chain dependencies; and the balance between openness and security. Outcomes will be shaped by both state choices and private-sector infrastructure.",
    relatedTopicIds: ["artificial-intelligence", "geopolitics", "semiconductors", "global-governance", "trade-investment"],
    tags: ["Geopolitics", "Strategy", "Policy"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Geopolitics and governance",
  },
  {
    id: "ai-security",
    title: "AI Security and Regulation",
    category: "Technology and governance",
    description:
      "AI security includes protecting models, data, infrastructure and users while managing emerging risks from increasingly capable systems.",
    detail:
      "Effective practice combines threat modelling, secure development, evaluation, access control, monitoring and incident readiness. Regulation and standards can clarify responsibilities, but implementation must reflect each system’s context and risk.",
    relatedTopicIds: ["artificial-intelligence", "trustworthy-ai", "cybersecurity", "global-governance", "digital-identity"],
    tags: ["Security", "Regulation", "Risk management"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Technology and governance",
  },
  {
    id: "ai-environment",
    title: "Environmental Impact of AI",
    category: "Climate and technology",
    description:
      "AI has environmental implications through electricity use, water demand, hardware production and infrastructure development, alongside potential efficiency benefits.",
    detail:
      "Assessing AI’s footprint requires looking across the lifecycle: model training and inference, data-centre energy sources, cooling, chip supply chains and end-of-life equipment. Efficiency gains should be measured alongside demand growth and rebound effects.",
    relatedTopicIds: ["artificial-intelligence", "sustainability", "ai-energy", "water", "semiconductors"],
    tags: ["Energy", "Water", "Responsible technology"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Climate and technology",
  },
  {
    id: "from-generating-to-acting",
    title: "From Generating to Acting",
    category: "Technology",
    description:
      "AI systems are progressing from producing content toward coordinating multi-step tasks and acting through tools and connected workflows.",
    detail:
      "Action-oriented AI needs clear permissions, scoped tools, traceable decisions, reliable evaluation and meaningful human approval for sensitive actions. Operational guardrails are essential when systems can affect real services or records.",
    relatedTopicIds: ["artificial-intelligence", "foundation-models", "trustworthy-ai", "cybersecurity", "future-of-work"],
    tags: ["AI agents", "Automation", "Human oversight"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Artificial Intelligence",
  },
  {
    id: "private-capital",
    title: "Private Capital in Infrastructure",
    category: "Economy and industry",
    description:
      "Private capital can help fund infrastructure, but investment outcomes depend on project readiness, risk allocation, regulation and the public value being delivered.",
    detail:
      "Bankable projects need credible demand, transparent procurement, stable governance and delivery capacity. Finance structures should align returns with lifecycle performance and community needs rather than focusing only on initial construction.",
    relatedTopicIds: ["infrastructure", "infrastructure-resilience", "global-governance", "trade-investment", "corruption"],
    tags: ["Finance", "Infrastructure", "Investment"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Infrastructure",
  },
  {
    id: "infrastructure-resilience",
    title: "Infrastructure Resilience",
    category: "Economy and industry",
    description:
      "Resilient infrastructure continues to provide essential services through shocks, failures and changing environmental conditions.",
    detail:
      "Resilience depends on risk-informed planning, redundancy, maintenance, cyber and physical security, flexible capacity and coordinated response. Lifecycle approaches can reduce disruption and improve long-term value.",
    relatedTopicIds: ["infrastructure", "private-capital", "logistics", "climate-crisis", "global-governance"],
    tags: ["Resilience", "Critical infrastructure", "Risk"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Infrastructure",
  },
  {
    id: "geopolitics",
    title: "Geopolitics",
    category: "Geopolitics and governance",
    description:
      "Geopolitics examines how geography, power, resources, technology and institutions shape relationships between countries and regions.",
    detail:
      "Supply chains, strategic infrastructure, energy systems, trade and emerging technologies are increasingly interdependent. Understanding these connections helps organisations consider exposure, resilience and strategic options.",
    relatedTopicIds: ["infrastructure", "ai-geopolitics", "semiconductors", "global-governance", "trade-investment"],
    tags: ["International relations", "Strategy", "Risk"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Geopolitics and governance",
  },
  {
    id: "logistics",
    title: "Logistics",
    category: "Economy and industry",
    description:
      "Logistics connects production, transport, warehousing and delivery into the networks that keep economies and services moving.",
    detail:
      "Reliable logistics depends on infrastructure, visibility, workforce capability, data-sharing and contingency planning. Digital tools can improve routing and forecasting, while resilience requires alternatives when routes or suppliers are disrupted.",
    relatedTopicIds: ["infrastructure", "infrastructure-resilience", "trade-investment", "future-manufacturing", "sustainability"],
    tags: ["Supply chain", "Transport", "Operations"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Economy and industry",
  },
  {
    id: "sustainable-development",
    title: "Sustainable Development",
    category: "Climate and environment",
    description:
      "Sustainable development seeks progress in wellbeing and opportunity while protecting the environmental and social systems on which future generations depend.",
    detail:
      "Progress requires connecting economic growth with health, education, infrastructure, resource stewardship and inclusive institutions. Indicators and local context help reveal whether gains are lasting and broadly shared.",
    relatedTopicIds: ["sustainability", "infrastructure", "climate-crisis", "water", "social-protection"],
    tags: ["Development", "Inclusion", "Long-term outcomes"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Climate and environment",
  },
  {
    id: "global-governance",
    title: "Global Governance",
    category: "Geopolitics and governance",
    description:
      "Global governance consists of the institutions, agreements, norms and coordination mechanisms used to address issues that cross national borders.",
    detail:
      "Technology, climate, finance, health and trade raise questions that no single organisation can resolve alone. Effective coordination balances legitimacy, transparency, participation and the ability to act as conditions change.",
    relatedTopicIds: ["geopolitics", "trustworthy-ai", "ai-security", "climate-crisis", "trade-investment"],
    tags: ["Institutions", "Cooperation", "Policy"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Geopolitics and governance",
  },
  {
    id: "future-of-work",
    title: "Future of Work",
    category: "Work and society",
    description:
      "The future of work is shaped by technology, demographics, skills, organisational design and changing expectations about where and how work happens.",
    detail:
      "Workplaces can prepare by building adaptable skills, redesigning roles around human strengths, improving job quality and creating pathways for transitions. Policy, employers and educators all influence whether benefits are broadly shared.",
    relatedTopicIds: ["ai-workforce", "education-skills", "social-protection", "artificial-intelligence", "future-manufacturing"],
    tags: ["Employment", "Skills", "Workplace"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Work and society",
  },
  {
    id: "education-skills",
    title: "Education and Skills",
    category: "Work and society",
    description:
      "Education and skills systems prepare people to participate in economies and communities as technology and job requirements evolve.",
    detail:
      "Lifelong learning, foundational literacy, technical skills and accessible reskilling pathways help people navigate transitions. Employers and education providers can coordinate around emerging needs while retaining broad learning outcomes.",
    relatedTopicIds: ["future-of-work", "ai-workforce", "future-manufacturing", "social-protection", "artificial-intelligence"],
    tags: ["Learning", "Skills", "Opportunity"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Work and society",
  },
  {
    id: "future-manufacturing",
    title: "Future of Manufacturing",
    category: "Economy and industry",
    description:
      "Manufacturing is evolving through automation, digital engineering, connected operations, new materials and shifts in global supply networks.",
    detail:
      "Future-ready factories combine skilled people, dependable infrastructure, data integration and flexible production. Adoption succeeds when technology investments are connected to quality, safety, workforce development and measurable operating outcomes.",
    relatedTopicIds: ["semiconductors", "ai-workforce", "logistics", "advanced-materials", "future-of-work"],
    tags: ["Industry 4.0", "Automation", "Operations"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Economy and industry",
  },
  {
    id: "trade-investment",
    title: "Trade and Investment",
    category: "Economy and industry",
    description:
      "Trade and investment link economies through goods, services, capital, knowledge and production networks.",
    detail:
      "Trade patterns are shaped by market access, regulation, logistics, technology and geopolitical risk. Organisations can build resilience by understanding dependencies, diversifying where sensible and investing in long-term capabilities.",
    relatedTopicIds: ["semiconductors", "geopolitics", "logistics", "private-capital", "global-governance"],
    tags: ["Markets", "Capital", "Supply chains"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Economy and industry",
  },
  {
    id: "innovation",
    title: "Innovation",
    category: "Technology and industry",
    description:
      "Innovation turns ideas and knowledge into new or improved products, services, processes and ways of organising.",
    detail:
      "Innovation ecosystems depend on experimentation, skills, infrastructure, capital and routes to adoption. Good governance balances early learning with safety, market needs and the ability to scale what works.",
    relatedTopicIds: ["semiconductors", "artificial-intelligence", "advanced-materials", "future-manufacturing", "future-electricity"],
    tags: ["Research", "Experimentation", "Growth"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Technology and industry",
  },
  {
    id: "justice-law",
    title: "Justice and Law",
    category: "Society and governance",
    description:
      "Justice and legal systems define rights, responsibilities and processes for resolving disputes and maintaining public trust.",
    detail:
      "Digital systems and AI introduce questions around due process, privacy, evidence, access and accountability. Responsible practice requires legal clarity, procedural safeguards and understandable ways to challenge consequential decisions.",
    relatedTopicIds: ["trustworthy-ai", "ai-security", "digital-identity", "global-governance", "corporate-governance"],
    tags: ["Rule of law", "Rights", "Accountability"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Society and governance",
  },
  {
    id: "disinformation",
    title: "Disinformation",
    category: "Technology and society",
    description:
      "Disinformation is the deliberate creation or spread of misleading information, often intended to influence decisions, trust or public debate.",
    detail:
      "Addressing disinformation involves reliable information, transparent institutions, media literacy, platform accountability and thoughtful crisis communication. Responses work best when they preserve legitimate debate and are grounded in context.",
    relatedTopicIds: ["ai-misinformation", "digital-identity", "global-governance", "trustworthy-ai", "geopolitics"],
    tags: ["Information integrity", "Trust", "Public debate"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Technology and society",
  },
  {
    id: "digital-identity",
    title: "Digital Identity",
    category: "Technology and society",
    description:
      "Digital identity systems help people and organisations prove who they are and access services, while raising questions about privacy, inclusion and security.",
    detail:
      "Trusted identity design uses appropriate assurance, data minimisation, user control and reliable recovery processes. Interoperability and inclusive alternatives are important so that identity requirements do not unnecessarily exclude people.",
    relatedTopicIds: ["ai-misinformation", "ai-security", "justice-law", "cybersecurity", "global-governance"],
    tags: ["Identity", "Privacy", "Access"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Technology and society",
  },
  {
    id: "climate-crisis",
    title: "Climate Crisis",
    category: "Climate and environment",
    description:
      "Climate change affects ecosystems, infrastructure, health, livelihoods and economic stability, with impacts that vary by place and vulnerability.",
    detail:
      "Responses combine emissions reduction, adaptation, resilient infrastructure, finance and effective institutions. Timely information and collaboration across sectors help direct resources toward the most material risks and opportunities.",
    relatedTopicIds: ["sustainability", "sustainable-development", "future-electricity", "water", "infrastructure-resilience"],
    tags: ["Climate", "Adaptation", "Transition"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Climate and environment",
  },
  {
    id: "water",
    title: "Water",
    category: "Climate and environment",
    description:
      "Water security supports health, food, industry, energy and ecosystems. Demand, pollution and climate pressures can intensify competition over reliable supplies.",
    detail:
      "Sustainable water management combines efficient use, resilient infrastructure, monitoring, watershed protection and fair governance. Local conditions matter, so planning should reflect demand patterns and ecological limits.",
    relatedTopicIds: ["sustainability", "climate-crisis", "ai-environment", "infrastructure", "nature-biodiversity"],
    tags: ["Water security", "Resources", "Resilience"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Climate and environment",
  },
  {
    id: "circular-economy",
    title: "Circular Economy",
    category: "Climate and environment",
    description:
      "A circular economy aims to reduce waste and retain the value of materials through better design, reuse, repair, remanufacturing and recycling.",
    detail:
      "Circular approaches require coordination across product design, procurement, logistics, consumer behaviour and material recovery. Measurement and viable business models help move from pilots to broader adoption.",
    relatedTopicIds: ["sustainability", "future-manufacturing", "advanced-materials", "nature-biodiversity", "trade-investment"],
    tags: ["Materials", "Waste reduction", "Design"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Climate and environment",
  },
  {
    id: "future-electricity",
    title: "Future of Electricity",
    category: "Energy and environment",
    description:
      "Electricity systems are changing through renewables, storage, grid modernisation, electrification and growing digital demand.",
    detail:
      "Reliable transitions must balance affordability, security, flexibility and decarbonisation. Investment in networks, demand response, storage and operational data can support an increasingly complex electricity system.",
    relatedTopicIds: ["sustainability", "ai-energy", "climate-crisis", "infrastructure", "innovation"],
    tags: ["Energy transition", "Grid", "Electrification"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Energy and environment",
  },
  {
    id: "advanced-materials",
    title: "Advanced Materials",
    category: "Technology and industry",
    description:
      "Advanced materials enable new performance in electronics, energy, construction, healthcare and manufacturing.",
    detail:
      "Developing and scaling materials involves research, testing, supply-chain capacity, manufacturing processes and end-of-life considerations. Cross-disciplinary collaboration is essential to move promising discoveries into useful applications.",
    relatedTopicIds: ["semiconductors", "future-manufacturing", "circular-economy", "innovation", "sustainability"],
    tags: ["Materials science", "Research", "Manufacturing"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Technology and industry",
  },
  {
    id: "semiconductor-science",
    title: "Semiconductor Science and Engineering",
    category: "Technology and industry",
    description:
      "Semiconductor science connects materials, device physics, chip design, fabrication and engineering at very small scales.",
    detail:
      "Progress depends on research talent, specialised equipment, process control, energy and global collaboration. Reliable manufacturing and continual engineering innovation help translate complex science into useful technology.",
    relatedTopicIds: ["semiconductors", "advanced-materials", "innovation", "future-manufacturing", "trade-investment"],
    tags: ["Engineering", "Chips", "Research"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Semiconductors",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    category: "Technology and governance",
    description:
      "Cybersecurity protects systems, services, information and people from digital threats, disruption and unauthorised access.",
    detail:
      "Strong programmes combine asset visibility, secure configuration, identity controls, monitoring, incident response, recovery and user awareness. Security should be built into operating practices and continuously adapted to risk.",
    relatedTopicIds: ["ai-security", "digital-identity", "infrastructure", "trustworthy-ai", "global-governance"],
    tags: ["Security", "Resilience", "Digital trust"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Technology and governance",
  },
  {
    id: "nature-biodiversity",
    title: "Nature and Biodiversity",
    category: "Climate and environment",
    description:
      "Biodiversity supports ecosystem functions and services that underpin food, water, health, economic activity and climate resilience.",
    detail:
      "Protecting nature requires understanding dependencies and impacts across land, water, materials and supply chains. Monitoring, restoration, community partnership and credible measurement can support better decisions.",
    relatedTopicIds: ["sustainability", "climate-crisis", "water", "circular-economy", "sustainable-development"],
    tags: ["Nature", "Ecosystems", "Resilience"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Climate and environment",
  },
  {
    id: "social-protection",
    title: "Social Protection",
    category: "Work and society",
    description:
      "Social protection systems help people manage shocks and life transitions through support such as insurance, income assistance and access to essential services.",
    detail:
      "Changing labour markets and demographic pressures make coverage, adequacy and financial sustainability important design questions. Accessible services and clear eligibility processes can improve resilience and inclusion.",
    relatedTopicIds: ["future-of-work", "ai-workforce", "education-skills", "sustainable-development", "global-governance"],
    tags: ["Inclusion", "Wellbeing", "Resilience"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Work and society",
  },
  {
    id: "corporate-governance",
    title: "Corporate Governance",
    category: "Economy and governance",
    description:
      "Corporate governance defines how organisations are directed, overseen and held accountable for performance, risk and stakeholder responsibilities.",
    detail:
      "Clear decision rights, transparent reporting, effective oversight and well-defined controls help organisations maintain trust and respond to emerging risks. Governance frameworks should evolve with new technology and business models.",
    relatedTopicIds: ["trustworthy-ai", "private-capital", "global-governance", "justice-law", "artificial-intelligence"],
    tags: ["Accountability", "Boards", "Risk"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Economy and governance",
  },
  {
    id: "ai-energy",
    title: "AI and Energy Demand",
    category: "Energy and technology",
    description:
      "AI infrastructure consumes electricity for computing and cooling, while AI may also support forecasting, optimisation and energy-system operations.",
    detail:
      "Understanding net impact requires measuring workload demand, hardware efficiency, data-centre utilisation, energy sources and potential efficiency gains. Infrastructure planning increasingly links digital growth with grid capacity and resource stewardship.",
    relatedTopicIds: ["artificial-intelligence", "ai-environment", "future-electricity", "semiconductors", "sustainability"],
    tags: ["AI infrastructure", "Electricity", "Efficiency"],
    source: "PROSIGHT Topic Map",
    parentTopic: "Energy and technology",
  },
];

export const defaultTopicId = "artificial-intelligence";

export function getTopicById(id: string): IntelligenceTopic | undefined {
  return topics.find((topic) => topic.id === id);
}

export function getRelatedTopics(topic: IntelligenceTopic): IntelligenceTopic[] {
  const byId = new Map(topics.map((item) => [item.id, item]));

  return topic.relatedTopicIds
    .map((id) => byId.get(id))
    .filter((item): item is IntelligenceTopic => Boolean(item));
}
