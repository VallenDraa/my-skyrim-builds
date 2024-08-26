import type { Prisma, PrismaClient } from "@prisma/client";
import { setManySeedId } from "../utils";

export const characterRacesSeeds = setManySeedId([
  {
    name: "Nord",
    description:
      "Nords are the native people of Skyrim. They are known for their resistance to cold and their talent as warriors.",
  },
  {
    name: "Imperial",
    description:
      "Imperials are natives of Cyrodiil. They are known for their diplomatic skills and are good at making deals and trading.",
  },
  {
    name: "Breton",
    description:
      "Bretons are natives of High Rock. They have a natural resistance to magic and are skilled spellcasters.",
  },
  {
    name: "Redguard",
    description:
      "Redguards are natives of Hammerfell. They are known for their strong constitution and natural resistance to poison.",
  },
  {
    name: "High Elf",
    description:
      "High Elves, or Altmer, are natives of the Summerset Isles. They are the most magically proficient race in Tamriel.",
  },
  {
    name: "Dark Elf",
    description:
      "Dark Elves, or Dunmer, are natives of Morrowind. They have a natural resistance to fire and are skilled in both magic and stealth.",
  },
  {
    name: "Wood Elf",
    description:
      "Wood Elves, or Bosmer, are natives of Valenwood. They are skilled archers and are resistant to both disease and poison.",
  },
  {
    name: "Orc",
    description:
      "Orcs, or Orsimer, are natives of Orsinium. They are known for their strength and endurance in battle.",
  },
  {
    name: "Khajiit",
    description:
      "Khajiit are natives of Elsweyr. They are known for their agility and natural ability to sneak.",
  },
  {
    name: "Argonian",
    description:
      "Argonians are natives of Black Marsh. They are resistant to disease and can breathe underwater.",
  },
]);

export const characterRaceSeeder = (
  db: PrismaClient,
  data = characterRacesSeeds,
): Prisma.PrismaPromise<Prisma.BatchPayload> => {
  return db.characterRace.createMany({ data });
};
