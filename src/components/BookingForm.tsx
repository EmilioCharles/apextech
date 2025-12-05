'use client';

import { useState } from 'react';
import { submitLead } from '@/app/actions';
import { clsx } from 'clsx';
import { Search, Rocket } from 'lucide-react';

export default function BookingForm() {
    const [mode, setMode] = useState<'PROJECT' | 'AUDIT'>('PROJECT');
    const [service, setService] = useState('WEB_DEV');
    const [pending, setPending] = useState(false);

    async function handleSubmit(formData: FormData) {
        setPending(true);
        // If in AUDIT mode, force service to SEO
        if (mode === 'AUDIT') {
            formData.set('service', 'SEO');
        }
        await submitLead(formData);
        setPending(false);
        alert('Request submitted! We will be in touch shortly.');
    }

    return (
        <form action={handleSubmit} className="bg-surface p-8 rounded-2xl border border-white/5 shadow-2xl backdrop-blur-md relative overflow-hidden">
            {/* Background Glow */}
            <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full opacity-20 pointer-events-none transition-colors duration-500 ${mode === 'AUDIT' ? 'bg-brand-accent' : 'bg-brand-primary'}`} />

            <h3 className="text-2xl font-bold mb-6 relative z-10">Start Your Transformation</h3>

            {/* Top Toggle */}
            <div className="flex p-1 bg-white/5 rounded-xl mb-8 relative z-10">
                <button
                    type="button"
                    onClick={() => setMode('PROJECT')}
                    className={clsx(
                        "flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all",
                        mode === 'PROJECT' ? "bg-white text-black shadow-lg" : "text-gray-400 hover:text-white"
                    )}
                >
                    <Rocket size={16} />
                    Start a Project
                </button>
                <button
                    type="button"
                    onClick={() => setMode('AUDIT')}
                    className={clsx(
                        "flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all",
                        mode === 'AUDIT' ? "bg-brand-accent text-black shadow-lg" : "text-gray-400 hover:text-white"
                    )}
                >
                    <Search size={16} />
                    Free Website Audit
                </button>
            </div>

            {/* Dynamic Content */}
            <div className="space-y-6 relative z-10">

                {/* Mode: PROJECT - Service Tiles */}
                {mode === 'PROJECT' && (
                    <div className="animate-in fade-in zoom-in-95 duration-300">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">I need help with:</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {['WEB_DEV', 'AI_AUTOMATION', 'DATA_ANALYSIS', 'SAAS', 'BRANDING', 'SEO'].map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    onClick={() => setService(s)}
                                    className={`p-3 text-xs font-mono border rounded-lg transition-all text-left ${service === s
                                        ? 'border-brand-primary text-brand-primary bg-brand-primary/10'
                                        : 'border-white/10 text-gray-400 hover:border-white/30'
                                        }`}
                                >
                                    {s.replace('_', ' ')}
                                </button>
                            ))}
                            <input type="hidden" name="service" value={service} />
                        </div>
                    </div>
                )}

                {/* Mode: AUDIT - Explanation */}
                {mode === 'AUDIT' && (
                    <div className="bg-brand-accent/10 border border-brand-accent/20 p-4 rounded-lg animate-in fade-in zoom-in-95 duration-300">
                        <h4 className="text-brand-accent font-bold mb-1 flex items-center gap-2">
                            <Search size={16} />
                            Free SEO & Performance Audit
                        </h4>
                        <p className="text-xs text-gray-300 leading-relaxed">
                            We'll scan your website for technical errors, SEO gaps, and missed conversion opportunities. You'll receive a video report within 24 hours.
                        </p>
                    </div>
                )}

                {/* Common Fields */}
                <div className="space-y-4">
                    <input
                        name="email"
                        type="email"
                        placeholder="work@company.com"
                        required
                        className="w-full bg-background border border-white/10 p-4 rounded-lg focus:border-brand-primary outline-none transition-colors"
                    />

                    {/* Audit URL - Mandatory if AUDIT mode */}
                    {mode === 'AUDIT' && (
                        <div className="animate-in fade-in slide-in-from-top-2">
                            <input
                                name="auditUrl"
                                type="url"
                                placeholder="https://your-website.com"
                                required
                                className="w-full bg-background border border-brand-accent/50 p-4 rounded-lg focus:border-brand-accent outline-none text-brand-accent placeholder:text-gray-600"
                            />
                        </div>
                    )}

                    <textarea
                        name="message"
                        placeholder={mode === 'AUDIT' ? "Any specific challenges you're facing?" : "Tell us about your project..."}
                        className="w-full bg-background border border-white/10 p-4 rounded-lg h-32 focus:border-brand-primary outline-none resize-none"
                    />
                </div>
            </div>

            <button
                disabled={pending}
                className={clsx(
                    "mt-8 w-full py-4 font-bold text-lg rounded-lg hover:scale-[1.02] transition-all disabled:opacity-50 text-black",
                    mode === 'AUDIT' ? "bg-brand-accent hover:bg-brand-accent/90" : "bg-white hover:bg-gray-200"
                )}
            >
                {pending ? 'Processing...' : (mode === 'AUDIT' ? 'Get My Free Audit' : 'Book Discovery Call')}
            </button>
        </form>
    );
}
