"use client";

import { motion } from "framer-motion";

interface LaptopMockupProps {
    children: React.ReactNode;
}

export default function LaptopMockup({ children }: LaptopMockupProps) {
    return (
        <div className="relative mx-auto w-full max-w-[800px]">
            {/* Lid / Screen Frame */}
            <div className="relative rounded-t-xl bg-[#202020] p-2 pt-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] border-x border-t border-white/5 ring-1 ring-white/10">
                {/* Camera Dot */}
                <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neutral-700 shadow-inner" />

                {/* Inner Bezel & Screen Container */}
                <div className="relative rounded-lg bg-black overflow-hidden aspect-[16/10] border border-white/5 group">
                    {/* Screen Content */}
                    <div className="w-full h-full bg-neutral-900 overflow-hidden relative">
                        {children}

                        {/* Screen Glare Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-20 pointer-events-none z-10" />
                    </div>
                </div>
            </div>

            {/* Base / Keyboard Area */}
            <div className="relative mx-auto h-[12px] w-[110%] -translate-x-[4.5%] rounded-b-lg rounded-t-sm bg-[#1a1a1a] shadow-[0_-2px_4px_-1px_rgba(0,0,0,0.5)_inset] border-x border-b border-white/5 ring-1 ring-black">
                {/* Thumb Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-2 bg-[#121212] rounded-b-md" />
            </div>

            {/* Bottom Shadow */}
            <div className="absolute -bottom-10 left-4 right-4 h-8 bg-black/60 blur-xl rounded-[100%] pointer-events-none" />
        </div>
    );
}
