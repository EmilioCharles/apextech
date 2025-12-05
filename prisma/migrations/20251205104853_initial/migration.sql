-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('WEB_DEV', 'SAAS', 'AI_AUTOMATION', 'DATA_ANALYSIS', 'SEO', 'BRANDING');

-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('NEW', 'CONTACTED', 'BOOKED', 'CLOSED');

-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "company" TEXT,
    "service" "ServiceType" NOT NULL,
    "message" TEXT,
    "budget" TEXT,
    "auditUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "LeadStatus" NOT NULL DEFAULT 'NEW',

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);
