-- DropForeignKey
ALTER TABLE "public"."Appliance" DROP CONSTRAINT "Appliance_leadId_fkey";

-- AlterTable
ALTER TABLE "public"."Appliance" ALTER COLUMN "leadId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Appliance" ADD CONSTRAINT "Appliance_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "public"."Lead"("id") ON DELETE SET NULL ON UPDATE CASCADE;
