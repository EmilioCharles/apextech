"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Code2,
    TrendingUp,
    PieChart,
    Workflow,
    Type,
    ArrowUpRight,
    Database,
    Cpu,
    Search,
    Zap
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// --- Visual Components ---

const AbstractLaptop = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center perspective-1000">
            <motion.div
                initial={{ rotateX: 10, rotateY: -10, scale: 0.9 }}
                animate={{
                    rotateX: [10, 5, 10],
                    rotateY: [-10, -15, -10],
                    y: [0, -10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-48 h-32 bg-neutral-900 rounded-lg border border-white/10 shadow-2xl flex flex-col overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
            >
                <div className="h-4 bg-neutral-800 border-b border-white/5 flex items-center px-2 gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <div className="p-3 font-mono text-[8px] text-green-400/80 leading-tight">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    >
                        &gt; init_core_systems()<br />
                        <span className="text-white/40">Loading modules...</span><br />
                        &gt; deploy_production<br />
                        <span className="text-brand-accent">Success: 200 OK</span>
                    </motion.div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-brand-primary/10 blur-xl pointer-events-none" />
            </motion.div>

            {/* Keyboard Base */}
            <motion.div
                initial={{ rotateX: 25, rotateY: -10, scale: 0.9, y: 40, x: -5 }}
                animate={{
                    rotateX: [25, 20, 25],
                    rotateY: [-10, -15, -10],
                    y: [40, 30, 40],
                    x: [-5, -10, -5]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-56 h-2 bg-neutral-800 rounded-b-lg border-t border-white/5 shadow-2xl"
            />
        </div>
    );
};

const GrowthGraph = () => {
    return (
        <div className="w-full h-full flex items-end px-4 pb-4">
            <svg viewBox="0 0 100 50" className="w-full h-32 overflow-visible">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-brand-accent)" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="var(--color-brand-accent)" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <motion.path
                    d="M0 50 C 20 40, 40 45, 60 20 S 80 10, 100 5"
                    fill="none"
                    stroke="var(--color-brand-accent)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                    d="M0 50 C 20 40, 40 45, 60 20 S 80 10, 100 5 V 50 H 0 Z"
                    fill="url(#gradient)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                />
            </svg>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
                className="absolute top-4 right-4 bg-brand-accent/20 backdrop-blur-md border border-brand-accent/50 text-brand-accent px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
            >
                <ArrowUpRight size={12} />
                TOP RANK
            </motion.div>
        </div>
    );
};

const SpinningPie = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative w-32 h-32 rounded-full border-4 border-white/5 border-t-brand-primary border-r-brand-accent"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold font-mono">98%</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Accuracy</span>
            </div>

            {/* Floating data points */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-2 left-2 w-2 h-2 bg-brand-primary rounded-full blur-[1px]"
            />
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-4 right-8 w-1.5 h-1.5 bg-brand-accent rounded-full blur-[1px]"
            />
        </div>
    );
};

const ConnectedNodes = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative opacity-80">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.line
                    x1="30%" y1="30%" x2="70%" y2="70%"
                    stroke="white" strokeOpacity="0.1" strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.line
                    x1="70%" y1="30%" x2="30%" y2="70%"
                    stroke="white" strokeOpacity="0.1" strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                />
            </svg>

            <div className="relative w-full h-full">
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-[25%] left-[25%] p-2 bg-neutral-900 border border-white/20 rounded-lg"
                >
                    <Zap size={16} className="text-brand-accent" />
                </motion.div>

                <motion.div
                    animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-[25%] right-[25%] p-2 bg-neutral-900 border border-white/20 rounded-lg"
                >
                    <Database size={16} className="text-blue-400" />
                </motion.div>

                <motion.div
                    animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-[25%] left-[25%] p-2 bg-neutral-900 border border-white/20 rounded-lg"
                >
                    <Cpu size={16} className="text-purple-400" />
                </motion.div>

                <motion.div
                    animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                    className="absolute bottom-[25%] right-[25%] p-2 bg-neutral-900 border border-white/20 rounded-lg"
                >
                    <Workflow size={16} className="text-white" />
                </motion.div>
            </div>
        </div>
    );
};

const KineticType = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center overflow-hidden opacity-50 select-none">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white/10 to-white/30"
            >
                DESIGN BRAND IDENTITY UX UI DESIGN BRAND IDENTITY UX UI
            </motion.div>
            <motion.div
                animate={{ x: ["-50%", "0%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-primary/10 to-brand-primary/40 mt-2"
            >
                CREATIVE VISUALS MOTIONS CREATIVE VISUALS MOTIONS
            </motion.div>
        </div>
    );
};

// --- Main Grid ---

export default function BentoGrid() {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-12 text-center"
            >
                The <span className="text-brand-accent">Growth</span> Ecosystem
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-4 md:h-[600px]">

                {/* 1. Engineering Core (Large Vertical) */}
                <motion.div
                    className="md:col-span-2 md:row-span-2 bg-surface rounded-3xl border border-white/5 overflow-hidden relative group hover:border-brand-primary/30 transition-colors"
                    whileHover={{ y: -5 }}
                >
                    <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent z-10" />

                    <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                        <div className="absolute top-0 right-0 p-10 opacity-20">
                            <Code2 size={240} className="text-white" strokeWidth={0.5} />
                        </div>
                        <AbstractLaptop />
                    </div>

                    <div className="absolute bottom-0 p-8 z-20">
                        <div className="bg-brand-primary/20 backdrop-blur-md w-fit px-3 py-1 rounded-full text-brand-primary text-xs font-bold mb-4 border border-brand-primary/30">
                            ENGINEERING CORE
                        </div>
                        <h3 className="text-3xl font-bold mb-2">Web Development & SaaS</h3>
                        <p className="text-gray-400 text-lg max-w-sm">
                            Enterprise-grade builds using Next.js 16. We architect scalable platforms, not just websites.
                        </p>
                    </div>
                </motion.div>

                {/* 2. Growth Engine (Horizontal) */}
                <motion.div
                    className="md:col-span-2 bg-surface rounded-3xl border border-white/5 overflow-hidden relative group hover:border-brand-accent/30 transition-colors"
                    whileHover={{ y: -5 }}
                >
                    <div className="absolute right-0 bottom-0 w-2/3 h-full z-0 opacity-50 group-hover:opacity-80 transition-opacity">
                        <GrowthGraph />
                    </div>

                    <div className="absolute bottom-0 left-0 p-8 z-20">
                        <div className="bg-brand-accent/20 backdrop-blur-md w-fit px-3 py-1 rounded-full text-brand-accent text-xs font-bold mb-4 border border-brand-accent/30">
                            GROWTH ENGINE
                        </div>
                        <h3 className="text-2xl font-bold mb-1">SEO & Digital Marketing</h3>
                        <p className="text-gray-400 text-sm max-w-xs">Dominate search. Capture leads.</p>
                    </div>
                </motion.div>

                {/* 3. Intelligence Hub (Small) */}
                <motion.div
                    className="bg-surface rounded-3xl border border-white/5 overflow-hidden relative group hover:border-blue-500/30 transition-colors flex flex-col"
                    whileHover={{ y: -5 }}
                >
                    <div className="flex-1 p-4 relative">
                        <SpinningPie />
                    </div>
                    <div className="p-6 pt-0 z-20 text-center relative">
                        <h3 className="text-lg font-bold">Data & BI</h3>
                        <p className="text-gray-400 text-xs">Decisions backed by math.</p>
                    </div>
                </motion.div>

                {/* 4. Automation Suite (Horizontal - repurposed to act as medium card in layout flow if needed, but here it fits the grid) 
            Wait, 3x2 grid with asymmetric layout.
            Col 1-2, Row 1-2: Large Vertical (Engineering)
            Col 3-4, Row 1: Growth (Horizontal)
            Col 3, Row 2: Intelligence (Square)
            Col 4, Row 2: Automation (Square) - Let's make this consistent with the plan.
        */}
                <motion.div
                    className="bg-surface rounded-3xl border border-white/5 overflow-hidden relative group hover:border-purple-500/30 transition-colors"
                    whileHover={{ y: -5 }}
                >
                    <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                        <ConnectedNodes />
                    </div>
                    <div className="absolute bottom-0 left-0 p-6 z-20">
                        <h3 className="text-lg font-bold">Automation</h3>
                        <p className="text-gray-400 text-xs">Automate the boring stuff.</p>
                    </div>
                </motion.div>

            </div>

            {/* 5. Brand Soul (Full Width / or maybe separate section below?) 
          The plan said: Card 5 (Small - Square): The Brand Soul.
          But grid is 3x2. 
          Currently:
          [ Large Vertical ] [ Growth Horizontal ]
          [ Large Vertical ] [ Small ] [ Small ]
          That covers the 3x2 grid spots (technically 4x2 grid cells).
          
          Let's add the 5th card as a full-width banner below or modify grid.
          Plan said: "3x2 Asymmetrical Grid". 
          Common layout:
          [   1   ][ 2 ]
          [   1   ][3][4]
          
          Card 5 is missing from the main grid. I will add it as a separate highlighted card or adjust grid to 3 rows if needed.
          Actually, I'll make a 3rd row for "Brand Soul" + "Free Audit" maybe?
          Or just put it separately.
          Let's add it as a wide banner below the main grid.
      */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 h-48">
                <motion.div
                    className="md:col-span-3 bg-surface rounded-3xl border border-white/5 overflow-hidden relative group hover:border-white/20 transition-colors flex items-center justify-between"
                    whileHover={{ scale: 1.01 }}
                >
                    <div className="absolute inset-0 z-0">
                        <KineticType />
                    </div>
                    <div className="p-8 z-10 bg-gradient-to-r from-neutral-900 via-transparent to-transparent h-full flex flex-col justify-center w-full">
                        <div className="bg-white/10 backdrop-blur-md w-fit px-3 py-1 rounded-full text-white text-xs font-bold mb-2 border border-white/20">
                            THE BRAND SOUL
                        </div>
                        <h3 className="text-3xl font-bold">Branding & Design</h3>
                        <p className="text-gray-400">Visuals that stick.</p>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
