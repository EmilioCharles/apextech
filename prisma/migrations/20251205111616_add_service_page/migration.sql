-- CreateTable
CREATE TABLE "ServicePage" (
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "problemTitle" TEXT NOT NULL,
    "problemDesc" TEXT NOT NULL,
    "solutionTitle" TEXT NOT NULL,
    "solutionDesc" TEXT NOT NULL,
    "deliverables" TEXT[],
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServicePage_pkey" PRIMARY KEY ("slug")
);
