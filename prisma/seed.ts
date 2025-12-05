
import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { servicesData } from '../src/lib/servicesData'
import dotenv from 'dotenv'

dotenv.config()

const connectionString = `${process.env.DATABASE_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
    console.log('Start seeding service pages...')

    for (const key in servicesData) {
        const service = servicesData[key];
        console.log(`Seeding service: ${service.title}`);

        await prisma.servicePage.upsert({
            where: { slug: service.id },
            update: {
                title: service.title,
                tagline: service.tagline,
                description: service.description,
                category: service.category,
                problemTitle: service.problem.title,
                problemDesc: service.problem.description,
                solutionTitle: service.solution.title,
                solutionDesc: service.solution.description,
                deliverables: service.deliverables,
            },
            create: {
                slug: service.id,
                title: service.title,
                tagline: service.tagline,
                description: service.description,
                category: service.category,
                problemTitle: service.problem.title,
                problemDesc: service.problem.description,
                solutionTitle: service.solution.title,
                solutionDesc: service.solution.description,
                deliverables: service.deliverables,
            },
        })
    }

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
