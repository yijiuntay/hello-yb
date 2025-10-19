/*
  Warnings:

  - Added the required column `winnerName` to the `ElectionResult` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ElectionResult" ADD COLUMN     "winnerName" TEXT NOT NULL;
