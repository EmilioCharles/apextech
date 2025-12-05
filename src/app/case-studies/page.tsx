import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Clock, ArrowUpRight } from "lucide-react";

export default function CaseStudiesPage() {
    const caseStudies = [
        {
            title: "FinTech SaaS Scale-up",
            client: "FinanceFlow",
            tags: ["Web Dev", "App Build"],
            metric: "+200%",
            metricLabel: "User Growth in 3 Months",
            icon: Users,
            color: "text-brand-primary",
            description: "We rebuilt their legacy infrastructure into a modern, scalable Next.js application, enabling them to onboard enterprise clients without crashing."
        },
        {
            title: "E-commerce SEO Dominance",
            client: "StyleStreet",
            tags: ["SEO", "Digital Marketing"],
            metric: "10x",
            metricLabel: "ROI on Ad Spend",
            icon: TrendingUp,
            color: "text-brand-accent",
            description: "A complete technical SEO audit and content strategy implementation. We fixed 400+ indexing errors and optimized for high-intent keywords."
        },
        {
            title: "Logistics Automation",
            client: "GlobalShip",
            tags: ["Automation", "AI Solutions"],
            metric: "40hrs",
            metricLabel: "Saved Per Week",
            icon: Clock,
            color: "text-blue-500",
            description: "We implemented a custom AI agent to handle shipping queries and automate manifest generation, freeing up the support team."
        },
        {
            title: "Healthcare Data Platform",
            client: "MediTrack",
            tags: ["Data Analysis", "Security"],
            metric: "99.9%",
            metricLabel: "Uptime & Compliance",
            icon: ArrowUpRight,
            color: "text-purple-400",
            description: "Architected a HIPAA-compliant data warehouse for patient analytics, giving doctors real-time insights into treatment efficacy."
        }
    ];

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            {/* Hero Section */}
            <section className="max-w-5xl mx-auto text-center mb-24">
                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                    Proven
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-brand-accent to-brand-primary">
                        Results.
                    </span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    We don't just ship code; we deliver business outcomes. Here is how we help founders and organizations build, scale, and optimize.
                </p>
            </section>

            {/* Case Study Grid */}
            <section className="max-w-7xl mx-auto mb-32">
                <div className="grid md:grid-cols-2 gap-8">
                    {caseStudies.map((study, idx) => (
                        <div key={idx} className="group bg-surface border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all hover:-translate-y-1">
                            <div className="flex justify-between items-start mb-8">
                                <div className={`p-4 rounded-xl bg-white/5 ${study.color}`}>
                                    <study.icon size={32} />
                                </div>
                                <div className="flex gap-2 flex-wrap justify-end max-w-[50%]">
                                    {study.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                            <p className="text-sm font-mono text-gray-500 mb-6 uppercase tracking-widest">{study.client}</p>

                            <div className="mb-6">
                                <div className={`text-5xl font-bold mb-2 ${study.color}`}>
                                    {study.metric}
                                </div>
                                <div className="text-sm text-gray-400 font-medium">
                                    {study.metricLabel}
                                </div>
                            </div>

                            <p className="text-gray-400 leading-relaxed">
                                {study.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto text-center bg-gradient-to-b from-white/5 to-transparent p-12 rounded-3xl border border-white/10">
                <h2 className="text-3xl font-bold mb-6">Ready to be our next success story?</h2>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                    Let's analyze your current state and engineer a path to growth.
                </p>
                <Link
                    href="/consultation"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-black bg-white hover:scale-105 transition-transform"
                >
                    Start Project <ArrowRight size={20} />
                </Link>
            </section>
        </main>
    );
}
