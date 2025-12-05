import { Code2, Cpu, Palette, Search, Globe, Zap, BarChart, Layout } from "lucide-react";

export interface ServiceData {
    id: string;
    title: string;
    tagline: string;
    description: string;
    icon: any; // Lucide Icon
    category: 'BUILD' | 'GROW' | 'OPTIMIZE';
    problem: {
        title: string;
        description: string;
    };
    solution: {
        title: string;
        description: string;
    };
    deliverables: string[];
}

export const servicesData: Record<string, ServiceData> = {
    // --- BUILD ---
    "web-development": {
        id: "web-development",
        title: "Web Development",
        tagline: "High-Performance Digital Infrastructure.",
        description: "We don't just build websites; we build growth engines. Fast, secure, and scalable web solutions tailored for B2B success.",
        icon: Code2,
        category: 'BUILD',
        problem: {
            title: "The WordPress Trap",
            description: "Most agencies give you a bloated, slow template that looks like everyone else's and breaks when you scale."
        },
        solution: {
            title: "Engineering Excellence",
            description: "We use Next.js and modern React architecture to deliver sites that load instantly, rank higher, and convert better."
        },
        deliverables: ["Custom Next.js Development", "CMS Integration (Sanity/Contentful)", "Responsive Mobile Design", "SEO Foundation Setup", "Performance Optimization (Core Web Vitals)"]
    },
    "app-build": {
        id: "app-build",
        title: "SaaS & App Development",
        tagline: "Turn Your Idea Into a Product.",
        description: "Full-cycle development for SaaS platforms and mobile applications. From MVP to Enterprise scale.",
        icon: Cpu,
        category: 'BUILD',
        problem: {
            title: "Development Hell",
            description: "Projects dragging on for months, spaghetti code, and features that don't work as intended."
        },
        solution: {
            title: "Agile Delivery",
            description: "We build in rapid sprints using a distinct stack (PostgreSQL, Prisma, Next.js) to ship value from Week 1."
        },
        deliverables: ["SaaS Architecture", "React Native Mobile Apps", "Database Design", "API Development", "User Authentication & Payments"]
    },
    "branding": {
        id: "branding",
        title: "Branding & Design",
        tagline: "Visuals That Command Authority.",
        description: "Aesthetic intelligence for serious brands. We design identities that build trust and differentiate you from the noise.",
        icon: Palette,
        category: 'BUILD',
        problem: {
            title: "Generic Identity",
            description: "Looking like a generic template makes high-ticket clients doubt your expertise before they even read your copy."
        },
        solution: {
            title: "Premium Positioning",
            description: "We craft design systems that look like millions of dollars in R&D, positioning you as the category leader."
        },
        deliverables: ["Logo & Visual Identity", "Design Systems / Style Guides", "UI/UX Design", "Social Media Assets", "Pitch Deck Design"]
    },

    // --- GROW ---
    "seo": {
        id: "seo",
        title: "SEO & Visibility",
        tagline: "Dominate Search Results.",
        description: "Technical SEO and Content Strategy that puts you in front of clients who are already looking for you.",
        icon: Search,
        category: 'GROW',
        problem: {
            title: "Invisible to Customers",
            description: "Having a great product doesn't matter if your ideal clients can't find you on Google."
        },
        solution: {
            title: "Technical Dominance",
            description: "We fix the technical debt holding you back and create content architecture that Google loves."
        },
        deliverables: ["Technical SEO Audit", "Keyword Strategy", "On-Page Optimization", "Content Briefs", "Local SEO Setup"]
    },
    "marketing": {
        id: "marketing",
        title: "Digital Marketing",
        tagline: "Funnels That Convert.",
        description: "Paid acquisition and funnel optimization to turn traffic into qualified meetings.",
        icon: Globe,
        category: 'GROW',
        problem: {
            title: "Burning Cash",
            description: "Running ads to a homepage that doesn't convert is the fastest way to lose money."
        },
        solution: {
            title: "Conversion First",
            description: "We build the landing pages and email flows FIRST, then turn on the traffic firehose."
        },
        deliverables: ["Landing Page Build", "Ad Creative Strategy", "Email Automation Flows", "Conversion Rate Optimization (CRO)", "Analytics Setup"]
    },

    // --- OPTIMIZE ---
    "ai": {
        id: "ai",
        title: "AI Solutions",
        tagline: "The Unfair Advantage.",
        description: "Custom AI agents and chatbots that work 24/7 to support your customers and streamline operations.",
        icon: Zap,
        category: 'OPTIMIZE',
        problem: {
            title: "Human Bottlenecks",
            description: "Your team is wasting hours on repetitive tasks that keep them from high-value work."
        },
        solution: {
            title: "Intelligent Automation",
            description: "We deploy LLMs to handle support ticket triage, data entry, and content generation."
        },
        deliverables: ["Custom GPT Agents", "Chatbot Integration", "Internal Knowledge Base Search", "Auto-Drafting Content Tools"]
    },
    "data-analysis": {
        id: "data-analysis",
        title: "Data & BI",
        tagline: "Decisions Backed by Math.",
        description: "Turn raw data into visual dashboards. Know exactly which channels are driving revenue.",
        icon: BarChart,
        category: 'OPTIMIZE',
        problem: {
            title: "Flying Blind",
            description: "Making strategic decisions based on gut feeling instead of hard data leads to expensive mistakes."
        },
        solution: {
            title: "Single Source of Truth",
            description: "We unify your data (Stripe, CRM, Ads) into one real-time dashboard for total clarity."
        },
        deliverables: ["Custom BI Dashboards", "Data Warehousing", "Revenue Attribution Models", "Customer LTV Analysis", "Operational Reporting"]
    },
    "automation": {
        id: "automation",
        title: "Workflow Automation",
        tagline: "Automate the Boring Stuff.",
        description: "Connect your apps (Slack, HubSpot, Notion) to create seamless workflows that save 20+ hours a week.",
        icon: Layout,
        category: 'OPTIMIZE',
        problem: {
            title: "Admin Overload",
            description: "Copy-pasting data between spreadsheets and tools is killing your efficiency."
        },
        solution: {
            title: "Seamless Flow",
            description: "We build background automations so data flows instantly from Lead -> CRM -> Slack -> Invoice."
        },
        deliverables: ["Zapier/Make.com Workflows", "CRM Integration", "Automated Onboarding", "Contract Generation", "Slack Notifications"]
    }
};
