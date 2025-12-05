import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { servicesData } from "@/lib/servicesData";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ServicePage(props: PageProps) {
    const params = await props.params;

    // 1. Fetch content from DB
    const service = await prisma.servicePage.findUnique({
        where: { slug: params.slug },
    });

    if (!service) {
        notFound();
    }

    // 2. Map Icon from static file (since we can't store components in DB)
    const staticData = servicesData[params.slug];
    const Icon = staticData?.icon || ArrowRight; // Fallback

    // Determine gradient based on category
    const gradient =
        service.category === 'BUILD' ? "from-brand-primary to-brand-primary/50" :
            service.category === 'GROW' ? "from-brand-accent to-brand-accent/50" :
                "from-blue-400 to-blue-600";

    const textColor =
        service.category === 'BUILD' ? "text-brand-primary" :
            service.category === 'GROW' ? "text-brand-accent" :
                "text-blue-400";

    const borderColor =
        service.category === 'BUILD' ? "border-brand-primary/30" :
            service.category === 'GROW' ? "border-brand-accent/30" :
                "border-blue-400/30";

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">

            {/* Hero Section */}
            <section className="max-w-4xl mx-auto text-center mb-32">
                <div className="flex justify-center mb-8">
                    <div className={`p-6 rounded-3xl bg-white/5 border border-white/10 ${textColor}`}>
                        <Icon size={64} />
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    {service.title}
                </h1>
                <p className={`text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${gradient} mb-6`}>
                    {service.tagline}
                </p>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    {service.description}
                </p>
            </section>

            {/* Problem / Solution Split */}
            <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-32">
                {/* Problem */}
                <div className="bg-[#0f0f0f] p-10 rounded-3xl border border-red-500/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <ArrowRight size={120} className="rotate-45 text-red-500" />
                    </div>
                    <h3 className="text-red-500 font-bold tracking-widest uppercase mb-4 text-sm">The Problem</h3>
                    <h2 className="text-3xl font-bold mb-4">{service.problemTitle}</h2>
                    <p className="text-gray-400 leading-relaxed">
                        {service.problemDesc}
                    </p>
                </div>

                {/* Solution */}
                <div className={`bg-surface p-10 rounded-3xl border ${borderColor} relative overflow-hidden`}>
                    <div className={`absolute top-0 right-0 p-4 opacity-10 ${textColor}`}>
                        <Icon size={120} />
                    </div>
                    <h3 className={`${textColor} font-bold tracking-widest uppercase mb-4 text-sm`}>The ApexTech Way</h3>
                    <h2 className="text-3xl font-bold mb-4">{service.solutionTitle}</h2>
                    <p className="text-gray-300 leading-relaxed">
                        {service.solutionDesc}
                    </p>
                </div>
            </section>

            {/* Deliverables Grid */}
            <section className="max-w-5xl mx-auto mb-32">
                <h2 className="text-3xl font-bold mb-12 text-center">What We Deliver</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.deliverables.map((item: string, idx: number) => (
                        <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/5 flex items-start gap-4 hover:border-white/20 transition-colors">
                            <CheckCircle2 className={`${textColor} shrink-0`} size={24} />
                            <span className="font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-3xl mx-auto text-center bg-gradient-to-b from-white/5 to-transparent p-12 rounded-3xl border border-white/10">
                <h2 className="text-3xl font-bold mb-6">Ready to scale your {service.title}?</h2>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                    Stop settling for average. Let's build something world-class.
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        href="/consultation"
                        className={`px-8 py-4 rounded-full font-bold text-lg text-black bg-white hover:scale-105 transition-transform`}
                    >
                        Start Project
                    </Link>
                    {service.category === 'GROW' && (
                        <Link
                            href="/consultation"
                            className={`px-8 py-4 rounded-full font-bold text-lg border border-brand-accent text-brand-accent hover:bg-brand-accent/10 transition-colors`}
                        >
                            Get Free Audit
                        </Link>
                    )}
                </div>
            </section>

        </main>
    );
}

