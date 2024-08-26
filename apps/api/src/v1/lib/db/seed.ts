/* eslint-disable no-console -- console.log is needed for clarity on seeding process */
import {
  perkSeeder,
  characterClassSeeder,
  skillSeeder,
  characterRaceSeeder,
  standingStoneSeeder,
} from "./seeds";
import { prisma } from ".";

void (async () => {
  console.log("Seeding database...");

  // Reset all tables
  await prisma.$transaction([
    prisma.characterClass.deleteMany(),
    prisma.characterRace.deleteMany(),
    prisma.standingStone.deleteMany(),
    prisma.skill.deleteMany(),
    prisma.perk.deleteMany(),
    prisma.characterBuild.deleteMany(),
    prisma.characterBuildOwner.deleteMany(),
    prisma.user.deleteMany(),
    prisma.userSavedBuild.deleteMany(),
    prisma.standingStone.deleteMany(),
    prisma.characterBuildStep.deleteMany(),
    prisma.characterBuildStar.deleteMany(),
  ]);

  // Seed the tables
  await prisma.$transaction([
    characterClassSeeder(prisma),
    characterRaceSeeder(prisma),
    standingStoneSeeder(prisma),
    skillSeeder(prisma),
    perkSeeder(prisma),
  ]);

  console.log("Finished seeding database.");
})();
