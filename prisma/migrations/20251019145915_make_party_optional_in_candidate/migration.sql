-- DropForeignKey
ALTER TABLE "public"."Candidate" DROP CONSTRAINT "Candidate_partyId_fkey";

-- AlterTable
ALTER TABLE "Candidate" ALTER COLUMN "partyId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE SET NULL ON UPDATE CASCADE;
