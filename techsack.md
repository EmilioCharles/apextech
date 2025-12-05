This is a powerhouse stack. You are combining the speed and SEO dominance of Next.js 16 + Tailwind v4 with the data processing power of Python and the type-safety of Prisma.

This architecture creates a Hybrid System:

The "Face" (Next.js + Prisma): Handles rendering, animations, SEO, and immediate data entry (booking forms) via Server Actions.

The "Brain" (Python): A microservice (FastAPI) that handles your heavy lifting: SEO scraping, Data Analysis processing, and AI workflows.

Here is your Architectural Master Plan and code snippets for the core agency platform.

1. Project Architecture & Stack Configuration

Directory Structure:

code
Text
download
content_copy
expand_less
/agency-root
  ├── /app                # Next.js 16 App Router
  ├── /components         # React Components
  ├── /lib                # Shared Utilities
  ├── /prisma             # Prisma Schema & Migrations
  ├── /python-backend     # Python FastAPI Service (The "Brain")
  ├── /public             # Assets
  └── theme.css           # Tailwind v4 Configuration
A. Tailwind CSS v4 Setup (app/globals.css)

Tailwind 4 moves configuration from JS to CSS. We will define your "Cyber-Professional" color palette here.

code
CSS
download
content_copy
expand_less
@import "tailwindcss";

@theme {
  /* The "Midnight" Base */
  --color-background: #050507; 
  --color-surface: #0f1115;
  
  /* The "Growth" Accents */
  --color-brand-primary: #6d28d9; /* Electric Violet */
  --color-brand-accent: #a3e635;  /* Neon Lime */
  
  /* Typography */
  --font-display: "Satoshi", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  
  /* Animation Curves */
  --ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Global Reset */
body {
  background-color: var(--color-background);
  color: #ffffff;
  font-family: var(--font-display);
  overflow-x: hidden;
}
2. The Database Layer (Prisma)

We need to store leads, but also track which "Micro-service" they are interested in (e.g., SEO Audit request vs. General Inquiry).

prisma/schema.prisma

code
Prisma
download
content_copy
expand_less
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Lead {
  id        String   @id @default(cuid())
  email     String
  name      String?
  company   String?
  service   ServiceType
  message   String?
  budget    String?
  // If they requested an SEO audit, store the URL here
  auditUrl  String? 
  createdAt DateTime @default(now())
  status    LeadStatus @default(NEW)
}

enum ServiceType {
  WEB_DEV
  SAAS
  AI_AUTOMATION
  DATA_ANALYSIS
  SEO
  BRANDING
}

enum LeadStatus {
  NEW
  CONTACTED
  BOOKED
  CLOSED
}
3. The "Brain" (Python Backend)

This is where you flex your muscles. Use FastAPI to create an endpoint that Next.js calls when a user requests an "SEO Audit" or "Data Demo."

python-backend/main.py

code
Python
download
content_copy
expand_less
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class AuditRequest(BaseModel):
    url: str

@app.post("/api/analyze-seo")
async def analyze_seo(request: AuditRequest):
    # This simulates the "Intelligence" your agency offers
    # In production, use BeautifulSoup or an SEO API here
    
    return {
        "score": 85,
        "metrics": {
            "performance": "High",
            "accessibility": "Medium",
            "seo_opportunities": 3
        },
        "message": f"We analyzed {request.url}. Your backend is fast, but meta tags are missing."
    }

# Run with: uvicorn main:app --reload
4. The Frontend: Next.js 16 Implementation

We will use React Server Actions to handle the form submission. This keeps the client bundle small and secure.

A. The "Smart" Booking Form (components/BookingForm.tsx)

This form adapts based on user selection.

code
Tsx
download
content_copy
expand_less
'use client';

import { useState } from 'react';
import { submitLead } from '@/app/actions'; // We'll define this next

export default function BookingForm() {
  const [service, setService] = useState('WEB_DEV');
  const [pending, setPending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setPending(true);
    await submitLead(formData);
    setPending(false);
    // Add toast notification logic here
  }

  return (
    <form action={handleSubmit} className="bg-surface p-8 rounded-2xl border border-white/5 shadow-2xl backdrop-blur-md">
      <h3 className="text-2xl font-bold mb-6">Start Your Transformation</h3>
      
      {/* Service Selection Tiles */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {['WEB_DEV', 'AI_AUTOMATION', 'DATA_ANALYSIS', 'SEO', 'SAAS', 'BRANDING'].map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setService(s)}
            className={`p-3 text-xs font-mono border rounded-lg transition-all ${
              service === s 
                ? 'border-brand-accent text-brand-accent bg-brand-accent/10' 
                : 'border-white/10 text-gray-400 hover:border-white/30'
            }`}
          >
            {s.replace('_', ' ')}
          </button>
        ))}
        <input type="hidden" name="service" value={service} />
      </div>

      {/* Dynamic Fields */}
      <div className="space-y-4">
        <input name="email" type="email" placeholder="work@company.com" required className="w-full bg-background border border-white/10 p-4 rounded-lg focus:border-brand-primary outline-none transition-colors" />
        
        {/* Conditional Logic: If SEO is selected, ask for URL */}
        {service === 'SEO' && (
          <div className="animate-in fade-in slide-in-from-top-2">
            <input name="auditUrl" type="url" placeholder="https://your-website.com (For Free Audit)" className="w-full bg-background border border-brand-accent/50 p-4 rounded-lg focus:border-brand-accent outline-none text-brand-accent" />
          </div>
        )}

        <textarea name="message" placeholder="Tell us about your project..." className="w-full bg-background border border-white/10 p-4 rounded-lg h-32 focus:border-brand-primary outline-none resize-none" />
      </div>

      <button 
        disabled={pending}
        className="mt-6 w-full py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-brand-accent hover:scale-[1.02] transition-all disabled:opacity-50"
      >
        {pending ? 'Processing...' : 'Book Discovery Call'}
      </button>
    </form>
  );
}
B. The Server Action (app/actions.ts)

This connects your Next.js frontend to Prisma.

code
TypeScript
download
content_copy
expand_less
'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function submitLead(formData: FormData) {
  const email = formData.get('email') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;
  const auditUrl = formData.get('auditUrl') as string | null;

  // 1. Save to Database
  await prisma.lead.create({
    data: {
      email,
      service: service as any,
      message,
      auditUrl,
    },
  });

  // 2. (Optional) If it's an SEO request, trigger the Python Microservice asynchronously
  if (service === 'SEO' && auditUrl) {
    // Fire and forget, or await if you want immediate results
    fetch('http://localhost:8000/api/analyze-seo', {
      method: 'POST',
      body: JSON.stringify({ url: auditUrl }),
      headers: { 'Content-Type': 'application/json' }
    });
  }

  revalidatePath('/');
}
C. The "Bento" Services Section (app/page.tsx)

Leveraging Tailwind v4 for a complex layout with minimal CSS.

code
Tsx
download
content_copy
expand_less
import BookingForm from '@/components/BookingForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
          Build. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary">Scale.</span> Automate.
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-12">
          The full-stack agency for founders who need Web Dev, AI Intelligence, and Data-Driven Growth in one ecosystem.
        </p>
      </section>

      {/* The 3x2 Bento Grid */}
      <section id="services" className="px-6 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
          
          {/* 1. Web Dev & SaaS (Tall) */}
          <div className="md:col-span-2 md:row-span-2 bg-surface rounded-3xl p-8 border border-white/5 hover:border-brand-primary/50 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
            <h3 className="relative z-20 text-3xl font-bold mt-auto">Web Development & SaaS</h3>
            <p className="relative z-20 text-gray-400 mt-2">Next.js 16 architectures built for scale.</p>
            {/* Abstract Code Visual */}
            <div className="absolute top-10 right-10 text-brand-primary/20 font-mono text-sm">
              &lt;System.Scale /&gt;
            </div>
          </div>

          {/* 2. Data Analysis (Wide) */}
          <div className="md:col-span-2 bg-surface rounded-3xl p-8 border border-white/5 hover:border-brand-accent/50 transition-colors flex flex-col justify-end">
             <h3 className="text-2xl font-bold">Data Analysis & BI</h3>
             <p className="text-gray-400">Turn chaos into clear dashboards.</p>
          </div>

          {/* 3. SEO (Square) */}
          <div className="bg-surface rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-bold mb-2">SEO & Visibility</h3>
            <div className="text-brand-accent text-4xl font-mono">+300%</div>
            <p className="text-xs text-gray-500">Avg. Traffic Growth</p>
          </div>

          {/* 4. AI & Auto (Square) */}
          <div className="bg-surface rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-colors relative overflow-hidden">
             <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-primary blur-2xl opacity-50" />
             <h3 className="text-xl font-bold">AI & Automations</h3>
             <p className="text-gray-400 text-sm mt-2">Replace manual work with Python scripts.</p>
          </div>

        </div>
      </section>

      {/* Booking Section */}
      <section className="px-6 py-20 bg-surface/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">Stop guessing. <br />Start growing.</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-accent rounded-full" /> 
                Technical Roadmap included
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-accent rounded-full" /> 
                Full Stack Team (Dev + Design + Data)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-accent rounded-full" /> 
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
5. Deployment Strategy

To make this run seamlessly:

Frontend: Deploy the Next.js app to Vercel.

Database: Use Vercel Postgres or Neon (serverless Postgres is best for this).

Backend: Deploy the Python FastAPI app to Railway.app or Render.

Integration: Set the NEXT_PUBLIC_API_URL in Vercel to point to your Railway Python URL.

This blueprint gives you a site that looks like a design agency but functions like a tech powerhouse.