import type { Prisma, PrismaClient } from "@prisma/client";
import { setManySeedId } from "../utils";

export const characterClassesSeeds = setManySeedId([
  {
    name: "Assassin",
    description:
      "Nimble and quiet, they move in darkness to strike at the unsuspecting. Locks hold no doors shut for them.",
  },
  {
    name: "Barbarian",
    description:
      "Fearsome brutes who inspire fear and dread in the hearts of their enemies. Like a storm, swift and powerful. Finding little use for heavy armor, they rely on smashing their foes into the ground.",
  },
  {
    name: "Paladin",
    description:
      "The Paladin is a protector of a religious order, the weak and vulnerable. Often more defensive and benevolent, he does not go on 'crusades'.",
  },
  {
    name: "Knight",
    description:
      "The most noble of all combatants. Strong in body and in character.",
  },
  {
    name: "Spellsword",
    description:
      "More nimble and athletic than the sorcerer, and better suited for spell-casting than the knight, their attacks are unpredictable. Students of combat and magic.",
  },
  {
    name: "Bard",
    description:
      "Intelligent and personable, they prefer to accomplish tasks with their words first, and sword second.",
  },
  {
    name: "Crusader",
    description:
      "A combatant who wields the power of brute strength and medicinal knowledge. Cheating death after every fight, they rely on their keen knowledge of restoration to fight yet again.",
  },
  {
    name: "Archer",
    description:
      "A marksman, adept at combat at great distances. Able to take down most foes before they have a chance to draw sword.",
  },
  {
    name: "Mage",
    description:
      "Preferring to use their extensive knowledge of all things magical, they wield a might more powerful than the sharpest blade.",
  },
  {
    name: "Healer",
    description:
      "Fighters of poison and illness. The ancient art of restoration is their ally, and the deadly art of destruction is their weapon.",
  },
  {
    name: "Battlemage",
    description:
      "Able to resolve most conflicts with either spell or sword. They are a deadly mix of scholar and soldier.",
  },
  {
    name: "Rogue",
    description:
      "They use speed in combat rather than brute force. Persuasive in conversation, their tongues are as sharp as blades.",
  },
  {
    name: "Witchhunter",
    description:
      "Swift on foot, and clever with spells, they use distance as their ally. Slower adversaries are fodder for their arrows.",
  },
  {
    name: "Nightblade",
    description:
      "Spell and shadow are their friends. By darkness they move with haste, casting magic to benefit their circumstances.",
  },
  {
    name: "Warrior",
    description:
      "Unafraid of light weaponry, they plow into the fray with little regard for injury. Masters of all melee tools, they put little faith in the magical arts.",
  },
  {
    name: "Scout",
    description:
      "Preferring the rolling countryside to the city life, they are gifted with the ability to evade, guard, and protect themselves with great proficiency.",
  },
  {
    name: "Necromancer",
    description:
      "Mages who specialize in the conjuration of undead creatures. Undead servants populate their lairs, and they always summon additional undead to aid them in combat.",
  },
  {
    name: "Thief",
    description:
      "Profiting from the losses of others is their love. Able to be swift in shadow, and crafty in bartering. Locks are enemies, and lock-picks are their swords.",
  },
  {
    name: "Sorcerer",
    description:
      "Besting the most well-equipped fighters, they rely on the spells of the mystic arts. Unique to these mages is the bodily stamina to be armed with the thickest armor.",
  },
]);

export const characterClassSeeder = (
  db: PrismaClient,
  data = characterClassesSeeds,
): Prisma.PrismaPromise<Prisma.BatchPayload> => {
  return db.characterClass.createMany({ data });
};
