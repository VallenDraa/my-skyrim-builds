-- DropForeignKey
ALTER TABLE `character_build` DROP FOREIGN KEY `character_build_class_id_fkey`;

-- DropForeignKey
ALTER TABLE `character_build` DROP FOREIGN KEY `character_build_race_id_fkey`;

-- DropForeignKey
ALTER TABLE `character_build` DROP FOREIGN KEY `character_build_standing_stone_id_fkey`;

-- DropForeignKey
ALTER TABLE `character_build_owner` DROP FOREIGN KEY `character_build_owner_character_build_id_fkey`;

-- DropForeignKey
ALTER TABLE `character_build_owner` DROP FOREIGN KEY `character_build_owner_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `character_build_perk` DROP FOREIGN KEY `character_build_perk_character_build_id_fkey`;

-- DropForeignKey
ALTER TABLE `character_build_perk` DROP FOREIGN KEY `character_build_perk_perk_id_fkey`;

-- DropForeignKey
ALTER TABLE `character_build_star` DROP FOREIGN KEY `character_build_star_character_build_id_fkey`;

-- DropForeignKey
ALTER TABLE `character_build_star` DROP FOREIGN KEY `character_build_star_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `character_build_step` DROP FOREIGN KEY `character_build_step_character_build_id_fkey`;

-- DropForeignKey
ALTER TABLE `perk` DROP FOREIGN KEY `perk_skill_id_fkey`;

-- DropForeignKey
ALTER TABLE `user_saved_build` DROP FOREIGN KEY `user_saved_build_character_build_id_fkey`;

-- DropForeignKey
ALTER TABLE `user_saved_build` DROP FOREIGN KEY `user_saved_build_user_id_fkey`;

-- AddForeignKey
ALTER TABLE `character_build` ADD CONSTRAINT `character_build_race_id_fkey` FOREIGN KEY (`race_id`) REFERENCES `character_race`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_build` ADD CONSTRAINT `character_build_standing_stone_id_fkey` FOREIGN KEY (`standing_stone_id`) REFERENCES `standing_stone`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_build` ADD CONSTRAINT `character_build_class_id_fkey` FOREIGN KEY (`class_id`) REFERENCES `character_class`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_build_step` ADD CONSTRAINT `character_build_step_character_build_id_fkey` FOREIGN KEY (`character_build_id`) REFERENCES `character_build`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_build_perk` ADD CONSTRAINT `character_build_perk_perk_id_fkey` FOREIGN KEY (`perk_id`) REFERENCES `perk`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_build_perk` ADD CONSTRAINT `character_build_perk_character_build_id_fkey` FOREIGN KEY (`character_build_id`) REFERENCES `character_build`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_build_star` ADD CONSTRAINT `character_build_star_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_build_star` ADD CONSTRAINT `character_build_star_character_build_id_fkey` FOREIGN KEY (`character_build_id`) REFERENCES `character_build`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `perk` ADD CONSTRAINT `perk_skill_id_fkey` FOREIGN KEY (`skill_id`) REFERENCES `skill`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_build_owner` ADD CONSTRAINT `character_build_owner_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `character_build_owner` ADD CONSTRAINT `character_build_owner_character_build_id_fkey` FOREIGN KEY (`character_build_id`) REFERENCES `character_build`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_saved_build` ADD CONSTRAINT `user_saved_build_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_saved_build` ADD CONSTRAINT `user_saved_build_character_build_id_fkey` FOREIGN KEY (`character_build_id`) REFERENCES `character_build`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
