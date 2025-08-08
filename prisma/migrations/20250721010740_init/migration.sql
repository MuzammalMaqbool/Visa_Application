/*
  Warnings:

  - You are about to drop the `Applicant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Applicant";

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "trackingId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "nationality" TEXT NOT NULL,
    "passportNumber" TEXT NOT NULL,
    "visaType" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "employer" TEXT,
    "annualIncome" DOUBLE PRECISION,
    "previousVisits" TEXT,
    "criminalRecord" BOOLEAN NOT NULL DEFAULT false,
    "medicalConditions" TEXT,
    "emergencyContact" TEXT NOT NULL,
    "emergencyPhone" TEXT NOT NULL,
    "additionalInfo" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "notes" TEXT,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Application_trackingId_key" ON "Application"("trackingId");
