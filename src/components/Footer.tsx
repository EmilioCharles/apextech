
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#050507] border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center font-bold text-black font-mono">
                                A
                            </div>
                            <span className="text-xl font-bold tracking-tight">ApexTech</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            The Growth & Intelligence Engine for founders who demand engineering excellence.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                                <Github size={18} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                                <Linkedin size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Build */}
                    <div>
                        <h3 className="font-bold mb-6 text-brand-primary">Build</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/services/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
                            <li><Link href="/services/app-build" className="hover:text-white transition-colors">SaaS & Apps</Link></li>
                            <li><Link href="/services/branding" className="hover:text-white transition-colors">Branding & Design</Link></li>
                        </ul>
                    </div>

                    {/* Scale */}
                    <div>
                        <h3 className="font-bold mb-6 text-brand-accent">Scale</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/services/seo" className="hover:text-white transition-colors">SEO & Visibility</Link></li>
                            <li><Link href="/services/marketing" className="hover:text-white transition-colors">Digital Marketing</Link></li>
                        </ul>
                    </div>

                    {/* Optimize */}
                    <div>
                        <h3 className="font-bold mb-6 text-blue-500">Optimize</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/services/data-analysis" className="hover:text-white transition-colors">Data Analysis & BI</Link></li>
                            <li><Link href="/services/ai" className="hover:text-white transition-colors">AI Solutions</Link></li>
                            <li><Link href="/services/automation" className="hover:text-white transition-colors">Workflow Automation</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} ApexTech Inc. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
