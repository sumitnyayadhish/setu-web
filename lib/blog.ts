import type { ContentBlock } from "@/components/ContentBlocks";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMins: number;
  cluster: string;
  tags: string[];
  body: ContentBlock[];
  faq?: { q: string; a: string }[];
  related?: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-an-autonomous-ai-company",
    title: "What Is an Autonomous AI Company? (And How to Build One)",
    description:
      "An autonomous AI company is a business staffed and operated by AI agents that work continuously with minimal human intervention. Here's what that means and how to build one.",
    date: "2026-06-01",
    readMins: 7,
    cluster: "Autonomous AI companies",
    tags: ["autonomous ai company", "ai agents", "ai business"],
    body: [
      { type: "p", text: "An autonomous AI company is a business whose day-to-day operations are run by AI agents — not as a single chatbot, but as a coordinated team of AI employees with roles, goals, and memory. A human owner sets direction and budget; the AI workforce plans, executes, and reports." },
      { type: "h2", text: "From software you operate to companies that operate themselves" },
      { type: "p", text: "Traditional software waits for a person to use it. An autonomous AI company flips that: you describe the outcome, and a team of agents figures out the steps, divides the work, and gets it done — continuously, around the clock." },
      { type: "h2", text: "What an autonomous AI company is made of" },
      { type: "ul", items: [
        "AI employees — persistent agents with a role, goals, and KPIs.",
        "A coordination layer — a CEO-style agent that delegates and specialists that execute.",
        "Knowledge and memory — documents and context the team draws on and learns from.",
        "An automation engine — scheduled and event-driven runs that keep work flowing.",
        "A finance system — budgets and resource wallets so spend stays under control.",
      ] },
      { type: "h2", text: "How to build one in practice" },
      { type: "p", text: "On Setu, you deploy a company from a template (marketing agency, real estate, ecommerce, SaaS, consulting, and more). Each template ships with prebuilt agents, workflows, and a knowledge base. You add your business details and a budget, and the company starts working." },
      { type: "quote", text: "The goal isn't a smarter chatbot — it's a business that runs itself within the limits you set." },
    ],
    faq: [
      { q: "What is an autonomous AI company?", a: "A business operated by a coordinated team of AI agents — with roles, goals, and memory — that works continuously with minimal human intervention, supervised by a human owner who sets direction and budget." },
      { q: "How is it different from a chatbot?", a: "A chatbot answers prompts. An autonomous AI company is a team of specialized agents that plan, divide work, execute, and report — running operations rather than answering one question at a time." },
    ],
    related: ["ai-employees-vs-software", "multi-agent-systems-explained"],
  },
  {
    slug: "ai-employees-vs-software",
    title: "AI Employees vs Traditional Software: A New Way to Run a Business",
    description:
      "AI employees are persistent agents with roles, goals, and memory — a fundamentally different model from software you operate by hand. Here's how they change how work gets done.",
    date: "2026-06-03",
    readMins: 6,
    cluster: "AI employees",
    tags: ["ai employees", "ai workforce", "autonomous agents"],
    body: [
      { type: "p", text: "An AI employee is more than an assistant. It's a persistent agent assigned to a function — with a role, a set of goals, the memory to improve over time, and KPIs you can hold it to." },
      { type: "h2", text: "Software waits; AI employees act" },
      { type: "p", text: "You operate traditional software task by task. AI employees own outcomes: give a content writer the goal of a weekly series and it plans, drafts, and submits work for review without being walked through each step." },
      { type: "h2", text: "What makes an agent an 'employee'" },
      { type: "ul", items: ["A clear role and scope of responsibility.", "Goals and KPIs it works toward.", "Memory that persists across runs so it gets better.", "A place in a team, reporting to a manager agent."] },
    ],
    faq: [
      { q: "What is an AI employee?", a: "A persistent AI agent assigned to a business function with a role, goals, memory, and KPIs — it owns outcomes rather than answering one-off prompts." },
    ],
    related: ["what-is-an-autonomous-ai-company", "multi-agent-systems-explained"],
  },
  {
    slug: "multi-agent-systems-explained",
    title: "Multi-Agent Systems Explained: How AI Teams Coordinate",
    description:
      "Multi-agent systems let specialized AI agents coordinate like a real team — delegating, executing, and reviewing. Here's how they work and why they beat a single agent.",
    date: "2026-06-05",
    readMins: 6,
    cluster: "Multi-agent systems",
    tags: ["multi-agent systems", "ai teams", "agent orchestration"],
    body: [
      { type: "p", text: "A multi-agent system is a group of AI agents that work together toward a shared goal. Instead of one model doing everything, the work is split across specialists that coordinate — the same way a human team divides labor." },
      { type: "h2", text: "Why not just one big agent?" },
      { type: "p", text: "Single agents lose focus on complex, multi-step work. Splitting responsibilities — a planner, executors, a critic — keeps each agent's job narrow, improves quality, and makes the system easier to supervise." },
      { type: "h2", text: "Common roles in an AI team" },
      { type: "ul", items: ["A coordinator (CEO) that breaks goals into tasks and delegates.", "Specialists (writer, researcher, engineer) that execute their domain.", "A critic/reviewer that checks work before it ships."] },
    ],
    faq: [
      { q: "What is a multi-agent system?", a: "A group of specialized AI agents that coordinate toward a shared goal — delegating, executing, and reviewing — rather than one agent doing everything." },
    ],
    related: ["what-is-an-autonomous-ai-company", "agentic-workflows-explained"],
  },
  {
    slug: "agentic-workflows-explained",
    title: "Agentic Workflows: Automating Real Business Operations",
    description:
      "Agentic workflows let AI agents execute multi-step business processes end to end — from trigger to outcome. Here's how they automate operations beyond simple scripts.",
    date: "2026-06-07",
    readMins: 5,
    cluster: "Agentic workflows",
    tags: ["agentic workflows", "ai business automation", "automation"],
    body: [
      { type: "p", text: "An agentic workflow is a multi-step process an AI agent runs end to end — deciding what to do at each step rather than following a rigid script. It's automation that can handle ambiguity." },
      { type: "h2", text: "Beyond scripts and zaps" },
      { type: "p", text: "Classic automation breaks when reality doesn't match the script. Agentic workflows adapt: the agent reasons about the goal, picks the next action, and recovers from failures — closer to how a person handles a process." },
      { type: "h2", text: "What you can automate" },
      { type: "ul", items: ["Lead capture → qualification → personalized follow-up.", "Research → draft → review → publish.", "Inbound request → triage → response."] },
    ],
    faq: [
      { q: "What is an agentic workflow?", a: "A multi-step process an AI agent executes end to end, deciding the next action at each step instead of following a fixed script — so it can adapt to ambiguity and recover from failures." },
    ],
    related: ["multi-agent-systems-explained", "what-is-an-autonomous-ai-company"],
  },
  {
    slug: "ai-business-automation-guide",
    title: "AI Business Automation: A Practical Guide for 2026",
    description:
      "AI business automation means handing real operations to AI agents that decide, act, and adapt. Here's a practical guide to where to start and how to stay in control.",
    date: "2026-06-09",
    readMins: 6,
    cluster: "AI business automation",
    tags: ["ai business automation", "automation", "ai agents"],
    body: [
      { type: "p", text: "AI business automation goes beyond connecting apps with rules. It means giving AI agents a goal and letting them decide the steps, do the work, and adapt when reality doesn't match the plan — across marketing, sales, support, research, and operations." },
      { type: "h2", text: "Start where the work is repetitive but judgment matters" },
      { type: "p", text: "The best first candidates are tasks that happen often and need a little judgment each time: qualifying leads, drafting replies, researching prospects, turning briefs into first drafts." },
      { type: "h2", text: "A practical rollout" },
      { type: "ul", items: ["Pick one workflow with a clear input and a clear 'done'.", "Deploy an agent or small team from a template and give it the goal.", "Keep a human approval step on anything customer-facing at first.", "Set a budget so spend is capped while you build trust.", "Review outcomes weekly; widen scope as success rates hold."] },
      { type: "quote", text: "Don't automate everything at once. Automate one workflow well, prove it, then expand." },
    ],
    faq: [
      { q: "What is AI business automation?", a: "Using AI agents to run multi-step business processes end to end — deciding the next action and adapting to ambiguity — rather than following fixed if-this-then-that rules." },
      { q: "Where should a business start?", a: "One repetitive task that still needs light judgment — lead qualification, first-draft content, prospect research — with a human approval step and a spend cap while you build trust." },
    ],
    related: ["agentic-workflows-explained", "what-is-an-autonomous-ai-company"],
  },
  {
    slug: "choosing-models-for-ai-agents",
    title: "How to Choose Models for AI Agents: Cost vs Capability",
    description:
      "Not every agent needs the most powerful model. A practical framework for matching LLMs to agent roles — balancing cost, capability, and speed.",
    date: "2026-06-11",
    readMins: 6,
    cluster: "Multi-agent systems",
    tags: ["ai agents", "llm", "model selection", "ai cost"],
    body: [
      { type: "p", text: "When you run a team of AI agents, the model you pick for each role is one of your biggest levers on both quality and cost. The instinct to use the most powerful model everywhere is expensive and usually unnecessary." },
      { type: "h2", text: "Match the model to the job, not the brand" },
      { type: "p", text: "A planner or reviewer benefits from a stronger reasoning model; a high-volume drafter or classifier runs fine on a fast, cheap one. Mixing tiers across a team often beats using one premium model for everything." },
      { type: "h2", text: "A simple allocation" },
      { type: "ul", items: ["Coordinator / planner / critic → a strong reasoning model.", "Writers / researchers → a mid-tier model; upgrade only if quality lags.", "Classifiers / routers / extractors → a fast, cheap model."] },
    ],
    faq: [
      { q: "Should every AI agent use the most powerful model?", a: "No. Use stronger reasoning models for planning and review, and faster cheaper models for high-volume drafting, classification, and routing." },
    ],
    related: ["multi-agent-systems-explained", "ai-employees-vs-software"],
  },
];

export const BLOG_BY_DATE = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
export const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });
