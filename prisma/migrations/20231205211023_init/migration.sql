-- DropForeignKey
ALTER TABLE "Dish" DROP CONSTRAINT "Dish_groupsId_fkey";

-- AlterTable
ALTER TABLE "Dish" ALTER COLUMN "img" DROP NOT NULL,
ALTER COLUMN "groupsId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Dish" ADD CONSTRAINT "Dish_groupsId_fkey" FOREIGN KEY ("groupsId") REFERENCES "Groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;
