import ConsultationWizard from "@/components/ConsultationWizard";
import { CheckCircle2 } from "lucide-react";

export default function ConsultationPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

                {/* Left Column: Trust & Context */}
                <div className="sticky top-32">
                    <div className="bg-brand-primary/10 border border-brand-primary/20 w-fit px-3 py-1 rounded-full text-brand-primary text-xs font-bold mb-6">
                        APPLY FOR PARTNERSHIP
                    </div>

                    <h1 className="text-5xl font-bold mb-6">
                        Let's build your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary">Growth Engine.</span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-8 max-w-lg">
                        We only work with 5 new founders per month to ensure dedicated attention.
                    </p>

                    <div className="bg-surface border border-white/5 rounded-2xl p-6 mb-8">
                        <h3 className="font-bold mb-4">What happens next?</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <div className="bg-white/10 p-1 rounded-full h-fit">
                                    <div className="w-2 h-2 bg-brand-accent rounded-full" />
                                </div>
                                <div className="text-sm text-gray-400">
                                    <strong className="text-white block mb-1">1. Discovery Call</strong>
                                    We map out your technical and growth roadmap.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <div className="bg-white/10 p-1 rounded-full h-fit">
                                    <div className="w-2 h-2 bg-brand-accent rounded-full" />
                                </div>
                                <div className="text-sm text-gray-400">
                                    <strong className="text-white block mb-1">2. Proposal & Sprint Plan</strong>
                                    You get a detailed timeline and fixed price.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <div className="bg-white/10 p-1 rounded-full h-fit">
                                    <div className="w-2 h-2 bg-brand-accent rounded-full" />
                                </div>
                                <div className="text-sm text-gray-400">
                                    <strong className="text-white block mb-1">3. Kickoff</strong>
                                    We start building within 48 hours.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex -space-x-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-neutral-800 flex items-center justify-center text-xs font-bold">
                                {/* Placeholder avatars */}
                                U{i}
                            </div>
                        ))}
                        <div className="h-10 flex items-center px-4 text-xs text-gray-500">
                            Trusted by 50+ Founders
                        </div>
                    </div>
                </div>

                {/* Right Column: The Wizard */}
                <div>
                    <ConsultationWizard />
                </div>

            </div>
        </main>
    );
}
