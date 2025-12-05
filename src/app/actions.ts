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
        try {
            fetch('http://localhost:8000/api/analyze-seo', {
                method: 'POST',
                body: JSON.stringify({ url: auditUrl }),
                headers: { 'Content-Type': 'application/json' }
            }).catch(err => console.error('Failed to trigger Python microservice', err));
        } catch (e) {
            console.error('Error triggering python backend', e);
        }
    }

    revalidatePath('/');
}

export async function getDashboardStats() {
    const totalLeads = await prisma.lead.count();
    // Simulate revenue for now as we don't have invoices yet
    const revenue = 10450000 + (totalLeads * 500);
    const activeUsers = 1205 + Math.floor(totalLeads / 5);

    return {
        revenue,
        leads: totalLeads,
        activeUsers
    };
}
