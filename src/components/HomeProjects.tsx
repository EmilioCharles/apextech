"use client";

import { projects } from "@/data/projects";
import LaptopMockup from "./LaptopMockup";
import PhoneMockup from "./PhoneMockup";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HomeProjects() {
    // We only want to show the first 2 projects on the home page to keep it concise
    const featuredProjects = projects.slice(0, 2);

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Work.</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl">
                        A glimpse into the digital experiences we engineer. High-performance, scalable, and visually stunning.
                    </p>
                </div>
                <Link
                    href="/projects"
                    className="flex items-center gap-2 text-white font-bold hover:text-brand-primary transition-colors group"
                >
                    View All Projects <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="space-y-32">
                {featuredProjects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                    >
                        {/* Visual Mockups */}
                        <div className="w-full lg:w-3/5 relative group">
                            {/* Laptop */}
                            <div className="relative z-10 transform group-hover:scale-[1.01] transition-transform duration-500 origin-bottom">
                                <LaptopMockup>
                                    <img
                                        src={project.desktopImg}
                                        alt={`${project.title} Desktop`}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </LaptopMockup>
                            </div>

                            {/* Phone - Positioned relative to the container */}
                            <div className={`absolute -bottom-6 ${idx % 2 === 0 ? '-right-4 md:-right-8' : '-left-4 md:-left-8'} w-[15%] md:w-[20%] z-20`}>
                                <PhoneMockup>
                                    <img
                                        src={project.mobileImg}
                                        alt={`${project.title} Mobile`}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </PhoneMockup>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="w-full lg:w-2/5">
                            <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-6">
                                <Link
                                    href={project.liveUrl}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform"
                                >
                                    Visit Site <ArrowUpRight size={18} />
                                </Link>
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-bold"
                                >
                                    Case Study
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
