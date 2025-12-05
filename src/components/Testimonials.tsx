
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "They didn't just build an app; they built a revenue engine. Our conversion rate doubled in 30 days.",
        author: "Alex V.",
        role: "Founder, FinTech Series A",
        metric: "+110% YoY Growth",
        color: "text-brand-primary",
        border: "border-brand-primary/20",
        bg: "bg-brand-primary/5"
    },
    {
        quote: "Finally, an agency that understands math. The dashboard they built saved us 40 hours a week.",
        author: "Sarah J.",
        role: "COO, Logistics Corp",
        metric: "40hrs Saved/Week",
        color: "text-blue-500",
        border: "border-blue-500/20",
        bg: "bg-blue-500/5"
    },
    {
        quote: "Our SEO traffic was flatline. ApexTech fixed the technical debt, and we are now ranking #1 for our core keywords.",
        author: "Mike T.",
        role: "Marketing Director, SaaS",
        metric: "3x Organic Traffic",
        color: "text-brand-accent",
        border: "border-brand-accent/20",
        bg: "bg-brand-accent/5"
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">
                Trusted by <span className="text-brand-accent">Builders.</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((item, idx) => (
                    <div key={idx} className={`relative p-8 rounded-3xl border ${item.border} ${item.bg} backdrop-blur-sm`}>
                        <div className={`absolute -top-4 left-8 p-2 rounded-full bg-[#050507] border ${item.border} ${item.color}`}>
                            <Quote size={20} />
                        </div>

                        <p className="text-lg leading-relaxed text-gray-300 mb-8 pt-4">
                            "{item.quote}"
                        </p>

                        <div className="flex items-center justify-between border-t border-white/5 pt-6">
                            <div>
                                <div className="font-bold text-white">{item.author}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">{item.role}</div>
                            </div>
                            <div className={`text-sm font-bold ${item.color} bg-black/20 px-3 py-1 rounded-full`}>
                                {item.metric}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
