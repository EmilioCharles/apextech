"use client";

import LaptopMockup from "@/components/LaptopMockup";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
    {
        title: "NeonMarket",
        description: "A high-performance e-commerce platform built for a streetwear brand. Features real-time inventory sync, 3D product previews, and a seamless checkout experience.",
        tags: ["Next.js", "Stripe", "Three.js"],
        repoUrl: "#",
        liveUrl: "#",
        // Placeholder gradient for screen
        bg: "bg-gradient-to-br from-purple-900 via-purple-800 to-black"
    },
    {
        title: "FinDash Pro",
        description: "Enterprise-grade financial analytics dashboard handling generic datasets. Includes massive data visualization, PDF reporting, and role-based access control.",
        tags: ["React", "D3.js", "Python"],
        repoUrl: "#",
        liveUrl: "#",
        bg: "bg-gradient-to-bl from-blue-900 via-slate-900 to-black"
    },
    {
        title: "MediCore AI",
        description: "HIPAA-compliant patient triage system for local clinics. Uses an LLM agent to pre-screen symptoms and schedule appointments automatically.",
        tags: ["OpenAI", "PostgreSQL", "Tailwind"],
        repoUrl: "#",
        liveUrl: "#",
        bg: "bg-gradient-to-br from-emerald-900 via-teal-900 to-black"
    }
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8">
                        Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Masterpieces.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We don't just write code; we craft experiences. <br />
                        Explore a selection of our recent engineering work.
                    </p>
                </div>

                {/* Projects List */}
                <div className="space-y-32">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="group"
                        >
                            {/* Visual (Laptop) */}
                            <div className="mb-12 transform group-hover:scale-[1.02] transition-transform duration-500">
                                <LaptopMockup>
                                    <div className={`w-full h-full ${project.bg} flex items-center justify-center`}>
                                        <div className="text-center">
                                            <span className="font-bold text-2xl text-white/20 tracking-[1em] uppercase">
                                                {project.title}
                                            </span>
                                        </div>
                                    </div>
                                </LaptopMockup>
                            </div>

                            {/* Content */}
                            <div className="max-w-3xl mx-auto text-center">
                                <div className="flex justify-center gap-3 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <div className="flex justify-center gap-6">
                                    <Link
                                        href={project.liveUrl}
                                        className="flex items-center gap-2 font-bold text-white hover:text-brand-primary transition-colors border-b border-transparent hover:border-brand-primary pb-0.5"
                                    >
                                        <Globe size={18} /> Visit Website
                                    </Link>
                                    <Link
                                        href={project.repoUrl}
                                        className="flex items-center gap-2 font-bold text-gray-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
                                    >
                                        <Github size={18} /> View Code
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-32 text-center">
                    <Link
                        href="/consultation"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-black bg-white hover:scale-105 transition-transform"
                    >
                        Start Your Project <ArrowUpRight size={20} />
                    </Link>
                </div>

            </div>
        </main>
    );
}
