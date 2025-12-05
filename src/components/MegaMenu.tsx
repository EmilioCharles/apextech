"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Code2,
    Cpu,
    Globe,
    BarChart,
    Search,
    Zap,
    Palette,
    Layout,
    ChevronDown
} from "lucide-react";
import Link from "next/link";

const MenuColumn = ({ title, items }: { title: string, items: any[] }) => (
    <div className="flex flex-col gap-4">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">{title}</h3>
        {items.map((item, idx) => (
            <Link
                key={idx}
                href={item.href || "#"}
                className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
            >
                <div className="mt-1 text-brand-primary group-hover:text-brand-accent transition-colors">
                    {item.icon}
                </div>
                <div>
                    <div className="font-bold text-white group-hover:text-brand-accent transition-colors">
                        {item.title}
                    </div>
                    <div className="text-xs text-gray-400 mt-1 max-w-[140px]">
                        {item.desc}
                    </div>
                </div>
            </Link>
        ))}
    </div>
);

export default function MegaMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const menuData = {
        create: [
            {
                title: "Web Development",
                desc: "High-performance websites & SaaS.",
                icon: <Code2 size={18} />,
                href: "/services/web-development"
            },
            {
                title: "App Build",
                desc: "Native & Cross-platform apps.",
                icon: <Cpu size={18} />,
                href: "/services/app-build"
            },
            {
                title: "Branding & Design",
                desc: "Identity, UX/UI, & Visuals.",
                icon: <Palette size={18} />,
                href: "/services/branding"
            }
        ],
        grow: [
            {
                title: "SEO & Visibility",
                desc: "Rank #1 on Google.",
                icon: <Search size={18} />,
                href: "/services/seo"
            },
            {
                title: "Digital Marketing",
                desc: "Ads, Funnels & Strategy.",
                icon: <Globe size={18} />,
                href: "/services/marketing"
            }
        ],
        automate: [
            {
                title: "AI Solutions",
                desc: "Custom AI Agents & Bots.",
                icon: <Zap size={18} />,
                href: "/services/ai"
            },
            {
                title: "Data & BI",
                desc: "Dashboards & Insights.",
                icon: <BarChart size={18} />,
                href: "/services/data-analysis"
            },
            {
                title: "Workflow Automation",
                desc: "Zapier/Make Integrations.",
                icon: <Layout size={18} />,
                href: "/services/automation"
            }
        ]
    };

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className="flex items-center gap-1 py-4 px-2 text-sm font-medium hover:text-brand-primary transition-colors"
            >
                Services <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[800px] p-6 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
                    >
                        {/* Background Gradient Mesh */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/5 blur-[80px] rounded-full pointer-events-none" />

                        <div className="relative z-10 grid grid-cols-3 gap-8 divide-x divide-white/5">
                            <MenuColumn title="Create" items={menuData.create} />
                            <div className="pl-6">
                                <MenuColumn title="Grow" items={menuData.grow} />
                            </div>
                            <div className="pl-6">
                                <MenuColumn title="Automate" items={menuData.automate} />
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                            <div className="text-xs text-gray-500">
                                Trusted by 50+ founders for rapid scaling.
                            </div>
                            <Link href="/case-studies" className="text-xs font-bold text-brand-accent hover:underline">
                                View Case Studies →
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
