/*
  Warnings:

  - You are about to drop the column `createdAt` on the `character_build` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `character_build` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `character_build_owner` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `character_build_owner` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `character_build_perk` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `character_build_perk` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `character_build_star` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `character_build_star` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `character_build_step` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `character_build_step` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `character_class` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `character_class` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `character_race` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `character_race` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `perk` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `perk` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `standing_stone` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `standing_stone` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `user_saved_build` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user_saved_build` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `character_build` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `character_build_owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `character_build_perk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `character_build_star` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `character_build_step` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `character_class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `character_race` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `perk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `standing_stone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `user_saved_build` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `character_build` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `character_build_owner` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `character_build_perk` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `character_build_star` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `character_build_step` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `character_class` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `character_race` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `perk` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `standing_stone` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `user_saved_build` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;
