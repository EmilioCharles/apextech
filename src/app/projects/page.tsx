"use client";

import LaptopMockup from "@/components/LaptopMockup";
import PhoneMockup from "@/components/PhoneMockup";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Neon Insurance",
        description: "A modern, high-converting brochure site for a leading insurance brokerage. Features a clean aesthetic, service drill-downs, and instant quote forms.",
        tags: ["Next.js", "Tailwind", "Framer Motion"],
        repoUrl: "#",
        liveUrl: "https://www.neoninsurancebrokerltd.org",
        desktopImg: "/project-neon.png",
        mobileImg: "/project-neon-mobile.png"
    },
    {
        title: "FreshSaver",
        description: "An IoT-enabled dashboard for food waste reduction. Features real-time inventory tracking, expiry notifications, and automation rules for kitchens.",
        tags: ["React", "IoT Integration", "Dashboard"],
        repoUrl: "#",
        liveUrl: "https://freshsaver.vercel.app/",
        desktopImg: "/project-fresh.png",
        mobileImg: "/project-fresh-mobile.png"
    },
    {
        title: "Nshara Expedition",
        description: "High-end travel booking platform for luxury expeditions. Includes passport tiering system, booking wizards, and immersive video backgrounds.",
        tags: ["Next.js 14", "PostgreSQL", "Stripe"],
        repoUrl: "#",
        liveUrl: "https://passportagency-aculu3bwy-emiliocharles-projects.vercel.app/",
        desktopImg: "/project-nshara.png",
        mobileImg: "/project-nshara-mobile.png"
    }
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-32">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8">
                        Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Masterpieces.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We don't just write code; we craft experiences. <br />
                        Explore a selection of our recent engineering work.
                    </p>
                </div>

                {/* Projects List */}
                <div className="space-y-40">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="group"
                        >
                            {/* Device Showcase (Laptop + Phone) */}
                            <div className="relative mb-16 max-w-5xl mx-auto flex flex-col md:flex-row items-end justify-center">
                                {/* Laptop - Main Focus */}
                                <div className="w-full md:w-[85%] relative z-10 transform group-hover:scale-[1.01] transition-transform duration-500 origin-bottom">
                                    <LaptopMockup>
                                        <img
                                            src={project.desktopImg}
                                            alt={`${project.title} Desktop`}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </LaptopMockup>
                                </div>

                                {/* Phone - Visible on all screens, adjusted positioning */}
                                <div className="absolute right-0 -bottom-4 md:-right-2 md:-bottom-6 w-[15%] md:w-[20%] z-20 transform group-hover:translate-x-2 transition-transform duration-500">
                                    <PhoneMockup>
                                        <img
                                            src={project.mobileImg}
                                            alt={`${project.title} Mobile`}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </PhoneMockup>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="max-w-3xl mx-auto text-center mt-12 md:mt-0">
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
