import type { Prisma, PrismaClient } from "@prisma/client";
import { setManySeedId } from "../utils";

export const standingStonesSeeds = setManySeedId([
  {
    name: "The Apprentice Stone",
    description:
      "Those under the sign of The Apprentice recover Magicka faster, but are more susceptible to Magicka damage.",
  },
  {
    name: "The Atronach Stone",
    description:
      "Those under the sign of The Atronach absorb a portion of incoming spell damage and have a larger pool of Magicka, but recover it more slowly.",
  },
  {
    name: "The Lady Stone",
    description:
      "Those under the sign of The Lady regenerate Health and Stamina more quickly.",
  },
  {
    name: "The Lord Stone",
    description:
      "Those under the sign of The Lord are more resistant to both Magicka and physical damage.",
  },
  {
    name: "The Lover Stone",
    description:
      "Those under the sign of The Lover always feel a Lover's Comfort (All skills improve faster).",
  },
  {
    name: "The Mage Stone",
    description:
      "Those under the sign of the Mage will learn all magic skills 20% faster.",
  },
  {
    name: "The Ritual Stone",
    description:
      "Once a day, those under the sign of The Ritual can reanimate nearby corpses to fight for them.",
  },
  {
    name: "The Serpent Stone",
    description:
      "Once a day, those under the sign of The Serpent can use a ranged paralyzing poison on opponents.",
  },
  {
    name: "The Shadow Stone",
    description:
      "Once a day, those under the sign of The Shadow can become invisible for an extended period.",
  },
  {
    name: "The Steed Stone",
    description:
      "Those under the sign of The Steed can carry more and do not suffer a movement penalty from armor.",
  },
  {
    name: "The Thief Stone",
    description:
      "Those under the sign of the Thief will learn all stealth skills 20% faster.",
  },
  {
    name: "The Tower Stone",
    description:
      "Once a day, those under the sign of The Tower have the option to automatically open an Expert or lower lock.",
  },
  {
    name: "The Warrior Stone",
    description:
      "Those under the sign of the Warrior will learn all combat skills 20% faster.",
  },
]);

export const standingStoneSeeder = (
  db: PrismaClient,
  data = standingStonesSeeds,
): Prisma.PrismaPromise<Prisma.BatchPayload> => {
  return db.standingStone.createMany({ data });
};
