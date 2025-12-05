import BookingForm from '@/components/BookingForm';
import BentoGrid from '@/components/BentoGrid';
import LiveDashboard from '@/components/LiveDashboard';
import Testimonials from '@/components/Testimonials';
import { CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none" />

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6">
          Build. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary">Scale.</span> Automate.
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-12">
          From high-performance Web Development to AI-driven Data Intelligence. We build, rank, and automate businesses for the future.
        </p>
      </section>

      {/* The 2.0 Bento Grid */}
      <BentoGrid />

      {/* The Intelligence Layer */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">We Don't Guess. <span className="text-brand-primary">We Analyze.</span></h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Organic Dominance</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                It’s not just keywords; it’s about technical architecture. We build your site to be loved by Google from Day 1.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Business Intelligence</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                We turn your raw data into actionable dashboards. Know your CAC, LTV, and churn in real-time.
              </p>
            </div>
          </div>
        </div>

        {/* Live Dashboard Component */}
        <LiveDashboard />
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Booking Section */}
      <section className="px-6 py-20 bg-surface/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">Stop guessing. <br />Start growing.</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-accent" />
                Technical Roadmap included
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-accent" />
                Full Stack Team (Dev + Design + Data)
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-accent" />
                Clear Pricing, No Fluff
              </li>
            </ul>
          </div>

          <BookingForm />
        </div>
      </section>
    </main>
  );
}
