"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";
import { getDashboardStats } from "@/app/actions";

// Helper for counting numbers
function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) =>
        `${prefix}${Math.round(current).toLocaleString()}${suffix}`
    );

    useEffect(() => {
        spring.set(value);
    }, [value, spring]);

    return <motion.span>{display}</motion.span>;
}

export default function LiveDashboard() {
    const [data, setData] = useState({
        revenue: 0,
        leads: 0,
        activeUsers: 0
    });

    // Simulator effect
    useEffect(() => {
        // Fetch real data on mount
        getDashboardStats().then((stats: any) => {
            setData(stats);
        });

        // Polling every 10 seconds for live feel
        const interval = setInterval(() => {
            getDashboardStats().then((stats: any) => setData(stats));
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-5xl mx-auto p-1 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm">
            <div className="bg-neutral-900/90 rounded-xl p-6 md:p-8">

                {/* Header */}
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                        <h3 className="text-sm font-mono text-gray-400 uppercase tracking-widest">Live Client Performance</h3>
                    </div>
                    <div className="flex gap-2">
                        <div className="h-2 w-2 rounded-full bg-neutral-700" />
                        <div className="h-2 w-2 rounded-full bg-neutral-700" />
                        <div className="h-2 w-2 rounded-full bg-neutral-700" />
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Stat 1 */}
                    <div className="bg-surface rounded-lg p-6 border border-white/5">
                        <div className="flex items-center gap-2 mb-2 text-gray-400">
                            <DollarSign size={16} />
                            <span className="text-sm">Total Revenue Generated</span>
                        </div>
                        <div className="text-3xl md:text-4xl font-bold font-mono text-white">
                            <Counter value={data.revenue} prefix="$" />
                        </div>
                        <div className="flex items-center gap-1 mt-2 text-green-400 text-xs">
                            <TrendingUp size={12} />
                            <span>+12.5% this month</span>
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="bg-surface rounded-lg p-6 border border-white/5">
                        <div className="flex items-center gap-2 mb-2 text-gray-400">
                            <Users size={16} />
                            <span className="text-sm">Leads Captured</span>
                        </div>
                        <div className="text-3xl md:text-4xl font-bold font-mono text-white">
                            <Counter value={data.leads} />
                        </div>
                        <div className="flex items-center gap-1 mt-2 text-brand-accent text-xs">
                            <Activity size={12} />
                            <span>Active now</span>
                        </div>
                    </div>

                    {/* Stat 3 (Graph Placeholder) */}
                    <div className="bg-surface rounded-lg p-6 border border-white/5 relative overflow-hidden flex flex-col justify-between">
                        <div className="flex items-center gap-2 text-gray-400 z-10">
                            <Activity size={16} />
                            <span className="text-sm">System Health</span>
                        </div>
                        <div className="text-2xl font-bold text-brand-primary z-10">
                            100% Uptime
                        </div>

                        {/* Animated sine wave */}
                        <div className="absolute inset-0 flex items-end opacity-20">
                            <motion.div
                                initial={{ x: 0 }}
                                animate={{ x: -100 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="flex"
                            >
                                <svg width="400" height="100" className="text-brand-primary fill-current">
                                    <path d="M0 80 Q 50 20, 100 80 T 200 80 T 300 80 T 400 80 V 100 H 0 Z" />
                                </svg>
                                <svg width="400" height="100" className="text-brand-primary fill-current">
                                    <path d="M0 80 Q 50 20, 100 80 T 200 80 T 300 80 T 400 80 V 100 H 0 Z" />
                                </svg>
                            </motion.div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
