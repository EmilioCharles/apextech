"use client";

import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActive = (path: string) => pathname === path;

    return (
        <nav
            className={clsx(
                "fixed top-0 inset-x-0 z-[60] transition-all duration-300 border-b",
                mobileMenuOpen
                    ? "h-screen bg-[#050507] border-white/10"
                    : scrolled
                        ? "bg-[#050507]/90 backdrop-blur-md border-white/10 py-4"
                        : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-[60]">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center font-bold text-black font-mono">
                        A
                    </div>
                    <span className="text-xl font-bold tracking-tight">ApexTech</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <MegaMenu />
                    <Link
                        href="/about"
                        className={clsx(
                            "text-sm font-medium transition-colors",
                            isActive("/about") ? "text-brand-primary font-bold" : "hover:text-brand-primary"
                        )}
                    >
                        About
                    </Link>
                    <Link
                        href="/projects"
                        className={clsx(
                            "text-sm font-medium transition-colors",
                            isActive("/projects") ? "text-brand-primary font-bold" : "hover:text-brand-primary"
                        )}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/case-studies"
                        className={clsx(
                            "text-sm font-medium transition-colors",
                            isActive("/case-studies") ? "text-brand-primary font-bold" : "hover:text-brand-primary"
                        )}
                    >
                        Case Studies
                    </Link>
                </div>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/consultation"
                        className="hidden md:block bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors"
                    >
                        Book a Call
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            // X Icon
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                        ) : (
                            // Menu Icon
                            <div className="space-y-1.5">
                                <div className="w-6 h-0.5 bg-white" />
                                <div className="w-6 h-0.5 bg-white" />
                                <div className="w-6 h-0.5 bg-white" />
                            </div>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[50] pt-24 px-6 md:hidden overflow-y-auto text-white flex flex-col">
                    {/* Background handled by parent nav to avoid clipping issues */}

                    <div className="flex flex-col gap-8 pb-10">
                        <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Services</h3>
                            <div className="space-y-6 pl-4 border-l border-white/10">
                                <div>
                                    <h4 className="text-brand-primary font-bold mb-2">Build</h4>
                                    <div className="flex flex-col gap-2">
                                        <Link href="/services/web-development" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white">Web Development</Link>
                                        <Link href="/services/app-build" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white">SaaS & Apps</Link>
                                        <Link href="/services/branding" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white">Branding</Link>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-brand-accent font-bold mb-2">Scale</h4>
                                    <div className="flex flex-col gap-2">
                                        <Link href="/services/seo" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white">SEO & Visibility</Link>
                                        <Link href="/services/marketing" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white">Digital Marketing</Link>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-blue-500 font-bold mb-2">Optimize</h4>
                                    <div className="flex flex-col gap-2">
                                        <Link href="/services/data-analysis" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white">Data Analysis</Link>
                                        <Link href="/services/ai" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white">AI Solutions</Link>
                                        <Link href="/services/automation" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white">Automation</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white">About</Link>
                            <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white">Projects</Link>
                            <Link href="/case-studies" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white">Case Studies</Link>
                        </div>

                        <Link
                            href="/consultation"
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-white text-black text-center py-4 rounded-xl text-lg font-bold"
                        >
                            Book a Call
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
