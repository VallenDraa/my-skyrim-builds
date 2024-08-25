/*
  Warnings:

  - Added the required column `skill_id` to the `perk` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `perk` ADD COLUMN `skill_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `skill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `skill_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `perk` ADD CONSTRAINT `perk_skill_id_fkey` FOREIGN KEY (`skill_id`) REFERENCES `skill`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
