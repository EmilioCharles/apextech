import Link from "next/link";
import { ArrowRight, Code2, LineChart, Cpu } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            {/* Hero Section */}
            <section className="max-w-5xl mx-auto text-center mb-32">
                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                    We are the <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-accent">
                        Growth & Intelligence Engine.
                    </span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    ApexTech isn't just a dev shop. We are a technical partner for founders, SMBs, and modern organizations who demand ROI, mathematics, and engineering excellence.
                </p>
            </section>

            {/* Philosophy Section */}
            <section className="max-w-7xl mx-auto mb-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-4">
                            The ApexTech Standard
                        </h2>
                        <h3 className="text-4xl font-bold mb-6">
                            Stop guessing.<br />Start engineering.
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            From agile startups to established enterprises, we see the same problem: disconnected growth strategies. We bridge the gap between code and revenue.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            We believe that modern growth is a math problem. And we solve it with code, data, and design.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-brand-primary/20 blur-3xl -z-10 rounded-full" />
                        <div className="bg-surface border border-white/10 p-8 rounded-3xl">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-brand-primary/10 text-brand-primary">
                                        <Code2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Build</h4>
                                        <p className="text-gray-400 text-sm">Scalable platforms for teams of any size.</p>
                                    </div>
                                </div>
                                <div className="w-px h-8 bg-white/10 ml-6" />
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-brand-accent/10 text-brand-accent">
                                        <LineChart size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Scale</h4>
                                        <p className="text-gray-400 text-sm">SEO and marketing backed by data.</p>
                                    </div>
                                </div>
                                <div className="w-px h-8 bg-white/10 ml-6" />
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
                                        <Cpu size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Optimize</h4>
                                        <p className="text-gray-400 text-sm">AI and automation to remove inefficiencies.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Process / Pillars */}
            <section className="max-w-7xl mx-auto mb-32">
                <h2 className="text-3xl font-bold text-center mb-16">The Engine Components</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Build */}
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-brand-primary/50 transition-colors">
                        <div className="mb-6 text-brand-primary">
                            <Code2 size={48} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">1. Build</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            We lay the foundation with high-performance web applications, bespoke software, and rock-solid infrastructure.
                        </p>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li className="flex gap-2"><span className="text-brand-primary">•</span> Web Development</li>
                            <li className="flex gap-2"><span className="text-brand-primary">•</span> SaaS & Apps</li>
                            <li className="flex gap-2"><span className="text-brand-primary">•</span> Branding</li>
                        </ul>
                    </div>

                    {/* Scale */}
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-brand-accent/50 transition-colors">
                        <div className="mb-6 text-brand-accent">
                            <LineChart size={48} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">2. Scale</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            We drive traffic and capture attention using technical SEO, paid acquisition, and content strategies.
                        </p>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li className="flex gap-2"><span className="text-brand-accent">•</span> SEO & Visibility</li>
                            <li className="flex gap-2"><span className="text-brand-accent">•</span> Digital Marketing</li>
                            <li className="flex gap-2"><span className="text-brand-accent">•</span> Lead Gen</li>
                        </ul>
                    </div>

                    {/* Optimize */}
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-colors">
                        <div className="mb-6 text-blue-500">
                            <Cpu size={48} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">3. Optimize</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            We use data and AI to refine the funnel, automate operations, and maximize profit margins.
                        </p>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li className="flex gap-2"><span className="text-blue-500">•</span> Data Analysis</li>
                            <li className="flex gap-2"><span className="text-blue-500">•</span> AI Solutions</li>
                            <li className="flex gap-2"><span className="text-blue-500">•</span> Automation</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Content for Founders */}
            <section className="max-w-4xl mx-auto text-center bg-[#0f0f0f] p-12 rounded-3xl border border-white/10 mb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <Cpu size={200} />
                </div>
                <h2 className="text-3xl font-bold mb-6">Built for Ambition, by Engineers.</h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                    Whether you are a solo founder or leading an organization, we don't use templates. We don't outsource. We write code, we analyze data, and we ship products that impact the bottom line.
                </p>
            </section>

            {/* CTA */}
            <section className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Ready to upgrade your business?</h2>
                <Link
                    href="/consultation"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-black bg-white hover:scale-105 transition-transform"
                >
                    Start Your Engine <ArrowRight size={20} />
                </Link>
            </section>
        </main>
    );
}
