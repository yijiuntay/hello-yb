/*
  Warnings:

  - You are about to drop the column `parliamentServiceYears` on the `Candidate` table. All the data in the column will be lost.
  - Added the required column `electionsWon` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Candidate" DROP COLUMN "parliamentServiceYears",
ADD COLUMN     "electionsWon" INTEGER NOT NULL;
