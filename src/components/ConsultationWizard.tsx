"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, Check, Code2, TrendingUp, BarChart, Rocket } from 'lucide-react';
import { submitLead } from '@/app/actions';
import { clsx } from 'clsx';

// Step definitions
type WizardStep = 'SERVICE' | 'DETAILS' | 'BOOKING';

export default function ConsultationWizard() {
    const [step, setStep] = useState<WizardStep>('SERVICE');
    const [formData, setFormData] = useState({
        serviceCategory: '', // 'BUILD', 'GROW', 'OPTIMIZE'
        specificService: '',
        budget: '',
        timeline: '',
        email: '',
        message: '',
        auditUrl: ''
    });
    const [pending, setPending] = useState(false);

    // --- Actions ---

    const handleServiceSelect = (category: string, service: string) => {
        setFormData(prev => ({ ...prev, serviceCategory: category, specificService: service }));
        setStep('DETAILS');
    };

    const handleDetailsSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('BOOKING');
    };

    const handleFinalSubmit = async () => {
        setPending(true);
        const data = new FormData();
        data.set('email', formData.email);
        data.set('service', formData.specificService);
        data.set('message', `Category: ${formData.serviceCategory}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\nMessage: ${formData.message}`);
        if (formData.auditUrl) data.set('auditUrl', formData.auditUrl);

        await submitLead(data);
        setPending(false);
        alert('Application Received! Redirecting to calendar...');
        // In a real app, you would redirect to Cal.com here
        // window.location.href = "https://cal.com/apextech/discovery";
    };

    // --- Render Steps ---

    const renderServiceStep = () => (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            <h2 className="text-3xl font-bold mb-2">What is your primary focus?</h2>
            <p className="text-gray-400 mb-8">Select a path to get started.</p>

            <div className="grid gap-4">
                {/* Build */}
                <button
                    onClick={() => handleServiceSelect('BUILD', 'WEB_DEV')}
                    className="group flex items-center p-6 bg-surface border border-white/5 rounded-2xl hover:border-brand-primary transition-all text-left"
                >
                    <div className="bg-brand-primary/10 p-4 rounded-xl text-brand-primary mr-6 group-hover:scale-110 transition-transform">
                        <Code2 size={32} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">Build a Product</h3>
                        <p className="text-gray-400 text-sm mt-1">Web Apps, SaaS, Mobile, Branding</p>
                    </div>
                    <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-brand-primary" />
                </button>

                {/* Grow */}
                <button
                    onClick={() => handleServiceSelect('GROW', 'SEO')}
                    className="group flex items-center p-6 bg-surface border border-white/5 rounded-2xl hover:border-brand-accent transition-all text-left"
                >
                    <div className="bg-brand-accent/10 p-4 rounded-xl text-brand-accent mr-6 group-hover:scale-110 transition-transform">
                        <TrendingUp size={32} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors">Get More Leads</h3>
                        <p className="text-gray-400 text-sm mt-1">SEO, Digital Marketing, Funnels</p>
                    </div>
                    <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-brand-accent" />
                </button>

                {/* Optimize */}
                <button
                    onClick={() => handleServiceSelect('OPTIMIZE', 'DATA_ANALYSIS')}
                    className="group flex items-center p-6 bg-surface border border-white/5 rounded-2xl hover:border-blue-400 transition-all text-left"
                >
                    <div className="bg-blue-400/10 p-4 rounded-xl text-blue-400 mr-6 group-hover:scale-110 transition-transform">
                        <BarChart size={32} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Understand My Data</h3>
                        <p className="text-gray-400 text-sm mt-1">BI Dashboards, AI Analysis, Ops</p>
                    </div>
                    <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                </button>
            </div>
        </motion.div>
    );

    const renderDetailsStep = () => (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            <button onClick={() => setStep('SERVICE')} className="text-sm text-gray-500 hover:text-white flex items-center gap-1 mb-4">
                <ChevronLeft size={14} /> Back
            </button>

            <h2 className="text-3xl font-bold mb-2">Tell us a bit more.</h2>
            <p className="text-gray-400 mb-8">Help us prepare for our chat.</p>

            <form onSubmit={handleDetailsSubmit} className="space-y-4">
                {/* Interactive Budget/Timeline Selection could go here, keeping it simple for now */}

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Budget Range</label>
                        <select
                            required
                            className="w-full bg-surface border border-white/10 p-4 rounded-lg focus:border-brand-primary outline-none text-white appearance-none"
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        >
                            <option value="">Select Range...</option>
                            <option value="5k-10k">$5k - $10k</option>
                            <option value="10k-25k">$10k - $25k</option>
                            <option value="25k-50k">$25k - $50k</option>
                            <option value="50k+">$50k+</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Timeline</label>
                        <select
                            required
                            className="w-full bg-surface border border-white/10 p-4 rounded-lg focus:border-brand-primary outline-none text-white appearance-none"
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        >
                            <option value="">Select Timeline...</option>
                            <option value="ASAP">ASAP (Start this week)</option>
                            <option value="1M">Within 1 Month</option>
                            <option value="3M">1-3 Months</option>
                            <option value="Exploratory">Just Exploring</option>
                        </select>
                    </div>
                </div>

                {/* Conditional Question based on previous selection */}
                {formData.serviceCategory === 'GROW' && (
                    <div className="aniamte-in fade-in slide-in-from-top-4 space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-brand-accent">Existing Website URL (For Analysis)</label>
                        <input
                            type="url"
                            placeholder="https://..."
                            className="w-full bg-surface border border-brand-accent/50 p-4 rounded-lg focus:border-brand-accent outline-none text-brand-accent"
                            onChange={(e) => setFormData({ ...formData, auditUrl: e.target.value })}
                        />
                    </div>
                )}
                {formData.serviceCategory === 'OPTIMIZE' && (
                    <div className="aniamte-in fade-in slide-in-from-top-4 space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-blue-400">Data Source Type</label>
                        <input
                            type="text"
                            placeholder="e.g. Stripe, Shopify, Excel, SQL..."
                            className="w-full bg-surface border border-blue-500/50 p-4 rounded-lg focus:border-blue-400 outline-none text-blue-400"
                            // Just appending to message for simplicity in this MVP
                            onChange={(e) => setFormData({ ...formData, message: `Data Source: ${e.target.value}` })}
                        />
                    </div>
                )}

                <button className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 mt-4 flex items-center justify-center gap-2">
                    Next Step <ArrowRight size={18} />
                </button>
            </form>
        </motion.div>
    );

    const renderBookingStep = () => (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            <button onClick={() => setStep('DETAILS')} className="text-sm text-gray-500 hover:text-white flex items-center gap-1 mb-4">
                <ChevronLeft size={14} /> Back
            </button>

            <h2 className="text-3xl font-bold mb-2">Final Step.</h2>
            <p className="text-gray-400 mb-8">Where should we send the invite?</p>

            <div className="bg-surface border border-white/5 p-8 rounded-2xl">
                <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Work Email</label>
                    <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        className="w-full bg-black/50 border border-white/10 p-4 rounded-lg focus:border-brand-primary outline-none"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />

                    <div className="p-4 bg-brand-primary/10 rounded-lg border border-brand-primary/20 text-sm text-gray-300 flex gap-3 items-start">
                        <Check className="text-brand-primary shrink-0" size={18} />
                        You'll be booking a 30-min discovery call with our Head of Engineering.
                    </div>

                    <button
                        onClick={handleFinalSubmit}
                        disabled={pending}
                        className="w-full py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-primary/90 mt-4 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {pending ? 'Scheduling...' : 'Complete Booking'} <Rocket size={18} />
                    </button>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="w-full max-w-2xl mx-auto min-h-[500px]">
            <AnimatePresence mode="wait">
                {step === 'SERVICE' && <motion.div key="service">{renderServiceStep()}</motion.div>}
                {step === 'DETAILS' && <motion.div key="details">{renderDetailsStep()}</motion.div>}
                {step === 'BOOKING' && <motion.div key="booking">{renderBookingStep()}</motion.div>}
            </AnimatePresence>
        </div>
    );
}
