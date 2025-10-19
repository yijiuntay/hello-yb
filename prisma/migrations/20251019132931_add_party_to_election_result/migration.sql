/*
  Warnings:

  - You are about to drop the column `candidateId` on the `ElectionResult` table. All the data in the column will be lost.
  - Added the required column `winnerCandidateId` to the `ElectionResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `winnerPartyName` to the `ElectionResult` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."ElectionResult" DROP CONSTRAINT "ElectionResult_candidateId_fkey";

-- AlterTable
ALTER TABLE "ElectionResult" DROP COLUMN "candidateId",
ADD COLUMN     "winnerCandidateId" INTEGER NOT NULL,
ADD COLUMN     "winnerPartyId" INTEGER,
ADD COLUMN     "winnerPartyName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ElectionResult" ADD CONSTRAINT "ElectionResult_winnerCandidateId_fkey" FOREIGN KEY ("winnerCandidateId") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
