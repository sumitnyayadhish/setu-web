import type { ContentBlock } from "@/components/ContentBlocks";

export interface DocArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  order: number;
  body: ContentBlock[];
}

export const DOC_ARTICLES: DocArticle[] = [
  {
    slug: "getting-started",
    title: "Getting started with Setu",
    description: "Create your first autonomous AI company in a few minutes.",
    category: "Start here",
    order: 1,
    body: [
      { type: "p", text: "Setu lets you deploy a company staffed by AI agents. This guide takes you from sign-up to a working AI team." },
      { type: "h2", text: "1. Create your account" },
      { type: "p", text: "Sign up with email and password. You'll land on your Home dashboard, which shows every company you own with its credit balances and usage." },
      { type: "h2", text: "2. Deploy a company from a template" },
      { type: "p", text: "Open Templates and pick a business type — marketing agency, real estate, ecommerce, clinic, SaaS, consulting, and more. Each ships with a prebuilt team of agents, starter workflows, and a knowledge base. The wizard collects your business details, shows an estimated monthly credit cost, and launches the company." },
      { type: "h2", text: "3. Fund your wallets" },
      { type: "p", text: "Your company runs on resource credits. Top up the LLM and compute wallets from Billing, and set a monthly budget on the Resources page so spend stays under control." },
      { type: "h2", text: "4. Direct your team" },
      { type: "p", text: "Give your CEO agent a goal. It breaks the work into tasks, delegates to specialists, and reports back — supervised by you, with approvals and a full audit trail." },
    ],
  },
  {
    slug: "agent-setup",
    title: "Setting up agents",
    description: "Roles, models, workspaces, and how agents execute work.",
    category: "Agents",
    order: 2,
    body: [
      { type: "p", text: "Agents are the workforce of your AI company. Each has a role, a recommended model, and an execution workspace." },
      { type: "h2", text: "Roles and the org chart" },
      { type: "p", text: "Agents are organized into a team: a CEO-style coordinator delegates, specialists execute, and a reviewer checks work. Templates create this structure for you; you can add or adjust agents anytime." },
      { type: "h2", text: "Choosing a model" },
      { type: "p", text: "Each agent can use any model from the catalog — Claude, GPT, Gemini, DeepSeek, and more — with live pricing. Use a fast, cheap model for routine drafting and a stronger model for planning and review." },
    ],
  },
  {
    slug: "wallets-and-credits",
    title: "Wallets & credits",
    description: "How Setu's multi-resource economy works: LLM, compute, storage, communication, marketplace.",
    category: "Billing",
    order: 3,
    body: [
      { type: "p", text: "Setu separates spend into resource wallets so one kind of usage never eats another's budget." },
      { type: "h2", text: "The five wallets" },
      { type: "ul", items: [
        "LLM — AI model requests (tokens), priced per model with a clear markup.",
        "Compute — agent execution, automation, background jobs, and VM runtime.",
        "Storage — knowledge bases, documents, files, and vector memory.",
        "Communication — email, SMS, WhatsApp, voice, and API messaging.",
        "Marketplace — agents, workflows, and templates you buy.",
      ] },
      { type: "h2", text: "Budgets, burn rate, and runway" },
      { type: "p", text: "The Resources dashboard shows each wallet's balance, 30-day spend, daily burn rate, and runway. Set a monthly cap; when a wallet hits zero, agents pause until you top up — no surprise overage." },
    ],
  },
  {
    slug: "api-basics",
    title: "API basics",
    description: "Webhooks and integration points for connecting Setu to your stack.",
    category: "Developers",
    order: 4,
    body: [
      { type: "p", text: "Setu exposes endpoints for chat channels and billing webhooks so you can connect it to your existing tools." },
      { type: "h2", text: "Chat channels" },
      { type: "p", text: "Direct your company from Telegram. Inbound messages are routed to your active company; replies are sent back and metered against your communication wallet." },
      { type: "h2", text: "Billing webhooks" },
      { type: "p", text: "Payment confirmations arrive on a signature-verified webhook and credit the right wallet idempotently. Subscriptions follow an active → grace → suspended state machine so a failed renewal pauses agents safely." },
    ],
  },
];

export const DOC_CATEGORIES = [...new Set(DOC_ARTICLES.map((d) => d.category))];
export const getDoc = (slug: string) => DOC_ARTICLES.find((d) => d.slug === slug);
