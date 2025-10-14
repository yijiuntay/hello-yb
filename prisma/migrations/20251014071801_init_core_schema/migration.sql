-- CreateEnum
CREATE TYPE "ConstituencyType" AS ENUM ('FEDERAL', 'STATE');

-- CreateEnum
CREATE TYPE "DemographicType" AS ENUM ('AGE', 'ETHNICITY');

-- CreateEnum
CREATE TYPE "PledgeStatus" AS ENUM ('Complete', 'InProgress', 'NoRecord');

-- CreateTable
CREATE TABLE "Constituency" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ConstituencyType" NOT NULL,

    CONSTRAINT "Constituency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Party" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,
    "logoUrl" TEXT,
    "colorCode" TEXT NOT NULL,

    CONSTRAINT "Party_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candidate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "photoUrl" TEXT,
    "partyId" INTEGER NOT NULL,
    "constituencyId" INTEGER NOT NULL,
    "isIncumbent" BOOLEAN NOT NULL,
    "parliamentServiceYears" INTEGER NOT NULL,
    "highestEducationLevel" TEXT,
    "legislativeActivityScore" INTEGER NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElectionResult" (
    "id" SERIAL NOT NULL,
    "electionYear" INTEGER NOT NULL,
    "constituencyId" INTEGER NOT NULL,
    "candidateId" INTEGER,
    "voterMajorityPercent" DOUBLE PRECISION,
    "wasIncumbent" BOOLEAN,
    "voterTurnoutPercent" DOUBLE PRECISION,

    CONSTRAINT "ElectionResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConstituencyDemographics" (
    "id" SERIAL NOT NULL,
    "constituencyId" INTEGER NOT NULL,
    "demographicType" "DemographicType" NOT NULL,
    "category" TEXT NOT NULL,
    "percentage" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ConstituencyDemographics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pledge" (
    "id" SERIAL NOT NULL,
    "candidateId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "status" "PledgeStatus" NOT NULL,

    CONSTRAINT "Pledge_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Constituency_code_key" ON "Constituency"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Party_name_key" ON "Party"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Party_acronym_key" ON "Party"("acronym");

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_constituencyId_fkey" FOREIGN KEY ("constituencyId") REFERENCES "Constituency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionResult" ADD CONSTRAINT "ElectionResult_constituencyId_fkey" FOREIGN KEY ("constituencyId") REFERENCES "Constituency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionResult" ADD CONSTRAINT "ElectionResult_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConstituencyDemographics" ADD CONSTRAINT "ConstituencyDemographics_constituencyId_fkey" FOREIGN KEY ("constituencyId") REFERENCES "Constituency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pledge" ADD CONSTRAINT "Pledge_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
