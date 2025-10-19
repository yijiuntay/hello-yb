-- DropForeignKey
ALTER TABLE "public"."Candidate" DROP CONSTRAINT "Candidate_constituencyId_fkey";

-- AlterTable
ALTER TABLE "Candidate" ALTER COLUMN "constituencyId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_constituencyId_fkey" FOREIGN KEY ("constituencyId") REFERENCES "Constituency"("id") ON DELETE SET NULL ON UPDATE CASCADE;
