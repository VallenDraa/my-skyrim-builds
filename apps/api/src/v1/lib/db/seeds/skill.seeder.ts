import type { Prisma, PrismaClient } from "@prisma/client";
import { setManySeedId } from "../utils";

export const skillSeeds = setManySeedId([
  {
    name: "Illusion",
    description:
      "The skill governing the use of Illusion spells, which affect the mind of the target.",
  },
  {
    name: "Conjuration",
    description:
      "The skill governing the use of Conjuration spells, which summon creatures, weapons, and armor.",
  },
  {
    name: "Alteration",
    description:
      "The skill that governs the use of Alteration spells, which manipulate the physical world and its natural properties.",
  },
  {
    name: "Destruction",
    description:
      "The skill governing the use of Destruction spells, which inflict elemental damage upon enemies.",
  },
  {
    name: "Restoration",
    description:
      "The skill governing the use of Restoration spells, which heal and protect the user.",
  },

  {
    name: "Archery",
    description:
      "The skill governing the use of bows and crossbows for ranged attacks.",
  },
  {
    name: "Block",
    description:
      "The skill that governs blocking attacks with shields or weapons.",
  },
  {
    name: "Light Armor",
    description:
      "The skill governing the use of light armor, which offers moderate protection and is lighter than heavy armor.",
  },
  {
    name: "Heavy Armor",
    description:
      "The skill governing the use of heavy armor, which offers the most protection but is also the heaviest.",
  },
  {
    name: "One-Handed",
    description:
      "The skill governing the use of one-handed weapons such as swords, maces, and axes.",
  },
  {
    name: "Two-Handed",
    description:
      "The skill governing the use of two-handed weapons such as greatswords, battleaxes, and warhammers.",
  },
  {
    name: "Smithing",
    description:
      "The skill governing the creation and improvement of weapons and armor.",
  },
  {
    name: "Enchanting",
    description:
      "The skill that governs the use of enchantments to imbue items with magical effects.",
  },
  {
    name: "Alchemy",
    description: "The skill governing the creation of potions and poisons.",
  },
  {
    name: "Lockpicking",
    description:
      "The skill governing the ability to open locked doors and containers.",
  },

  {
    name: "Pickpocket",
    description:
      "The skill governing the ability to pick pockets and steal items undetected.",
  },
  {
    name: "Sneak",
    description:
      "The skill governing the ability to move undetected and avoid detection.",
  },
  {
    name: "Speech",
    description:
      "The skill governing the ability to persuade, intimidate, and barter with NPCs.",
  },
]);

export const skillSeeder = (
  db: PrismaClient,
  data = skillSeeds,
): Prisma.PrismaPromise<Prisma.BatchPayload> => {
  return db.skill.createMany({ data });
};
