-- AlterTable
ALTER TABLE `character_build` ADD COLUMN `thumbnail` VARCHAR(191) NULL,
    MODIFY `description` TEXT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `profile_picture` VARCHAR(191) NULL;
