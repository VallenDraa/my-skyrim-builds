import type { Prisma, PrismaClient } from "@prisma/client";
import { setManySeedId } from "../utils";
import { skillSeeds } from "./skill.seeder";

interface PerkCreate {
  rank: number;
  name: string;
  description: string;
  skillId: number;
}

export const mapPerksToSkill = (arg: {
  skillName: string;
  skills: (Prisma.SkillCreateInput & { id: number })[];
  perks: Omit<PerkCreate, "skillId">[];
}): PerkCreate[] => {
  const { skillName, skills, perks } = arg;

  const skill = skills.find(s => s.name === skillName);

  if (!skill) {
    throw new Error(`Unable to find skill with the name '${skillName}'`);
  }

  const result = perks.map(perk => ({
    ...perk, // Spread the original perk properties (rank, name, description)
    skillId: skill.id, // Add the skillId property
  }));

  return result;
};

export const illusionPerksSeeds = mapPerksToSkill({
  skillName: "Illusion",
  skills: skillSeeds,
  perks: [
    {
      name: "Novice Illusion",
      description: "Cast Novice level Illusion spells for half magicka.",
      rank: 1,
    },
    {
      name: "Illusion Dual Casting",
      description:
        "Dual casting an Illusion spell overcharges the effects into an even more powerful version.",
      rank: 1,
    },
    {
      name: "Animage",
      description:
        "Illusion spells now work on higher level animals (+8 levels).",
      rank: 1,
    },
    {
      name: "Apprentice Illusion",
      description: "Cast Apprentice level Illusion spells for half magicka.",
      rank: 1,
    },
    {
      name: "Hypnotic Gaze",
      description:
        "Calm spells now work on higher level opponents (+8 levels).",
      rank: 1,
    },
    {
      name: "Kindred Mage",
      description:
        "All Illusion spells work on higher level people (+10 levels).",
      rank: 1,
    },
    {
      name: "Adept Illusion",
      description: "Cast Adept level Illusion spells for half magicka.",
      rank: 1,
    },
    {
      name: "Aspect of Terror",
      description: "Fear spells work on higher level opponents (+10 levels).",
      rank: 1,
    },
    {
      name: "Quiet Casting",
      description:
        "All spells cast from any school of magic are silent to others.",
      rank: 1,
    },
    {
      name: "Rage",
      description: "Frenzy spells work on higher level opponents (+12 levels).",
      rank: 1,
    },
    {
      name: "Expert Illusion",
      description: "Cast Expert level Illusion spells for half magicka.",
      rank: 1,
    },
    {
      name: "Master of the Mind",
      description: "Illusion spells work on undead, daedra, and automatons.",
      rank: 1,
    },
    {
      name: "Master Illusion",
      description: "Cast Master level Illusion spells for half magicka.",
      rank: 1,
    },
  ],
});

export const conjurationPerksSeeds = mapPerksToSkill({
  skillName: "Conjuration",
  skills: skillSeeds,
  perks: [
    {
      name: "Conjuration Dual Casting",
      description:
        "Dual casting a Conjuration spell overcharges the effect, allowing it to last longer.",
      rank: 1,
    },
    {
      name: "Mystic Binding",
      description: "Bound weapons do more damage.",
      rank: 1,
    },
    {
      name: "Soul Stealer",
      description: "Bound Weapons cast Soul Trap on targets.",
      rank: 1,
    },
    {
      name: "Oblivion Binding",
      description:
        "Bound weapons will banish summoned creatures and turn raised ones.",
      rank: 1,
    },
    {
      name: "Summoner 1",
      description: "Can summon Atronachs or raise undead twice as far away.",
      rank: 1,
    },
    {
      name: "Summoner 2",
      description:
        "Can summon Atronachs or raise undead three times as far away.",
      rank: 2,
    },
    {
      name: "Atromancy",
      description: "Double duration for conjured Atronachs.",
      rank: 1,
    },
    {
      name: "Elemental Potency",
      description: "Conjured Atronachs are 50% more powerful.",
      rank: 1,
    },
    {
      name: "Necromancy",
      description: "Greater duration for reanimated undead.",
      rank: 1,
    },
    {
      name: "Dark Souls",
      description: "Reanimated undead has 100 points more health.",
      rank: 1,
    },
    {
      name: "Twin Souls",
      description: "You can have two Atronachs or two reanimated zombies.",
      rank: 1,
    },
  ],
});

export const alterationPerksSeeds = mapPerksToSkill({
  skillName: "Alteration",
  skills: skillSeeds,
  perks: [
    {
      name: "Alteration Dual Casting",
      description:
        "Dual casting an Alteration spell overcharges the effect, either increasing the level of creature it can impact or the duration of a beneficial spell.",
      rank: 1,
    },
    {
      name: "Mage Armor 1",
      description:
        "Protection spells like Stoneflesh are twice as strong if not wearing armor. (Using a Shield is fine!)",
      rank: 1,
    },
    {
      name: "Mage Armor 2",
      description:
        "Protection spells like Stoneflesh are 2.5x as strong if not wearing armor.",
      rank: 2,
    },
    {
      name: "Mage Armor 3",
      description:
        "Protection spells like Stoneflesh are 3x as strong if not wearing armor.",
      rank: 3,
    },
    {
      name: "Magic Resistance 1",
      description: "Adds 10% to magical resistance.",
      rank: 1,
    },
    {
      name: "Magic Resistance 2",
      description: "Adds 20% to magical resistance.",
      rank: 2,
    },
    {
      name: "Magic Resistance 3",
      description: "Adds 30% to magical resistance.",
      rank: 3,
    },
    {
      name: "Stability",
      description: "All Alteration spells have a +50% duration.",
      rank: 1,
    },
    {
      name: "Atronach",
      description: "Absorbs 30% of the Magicka of every spell that hits you.",
      rank: 1,
    },
  ],
});

export const destructionPerksSeeds = mapPerksToSkill({
  skillName: "Destruction",
  skills: skillSeeds,
  perks: [
    {
      name: "Destruction Dual Casting",
      description:
        "Dual casting Destruction spells lets you deal massive burst damage. Costs more mana but is essential for high damage output.",
      rank: 1,
    },
    {
      name: "Impact",
      description:
        "Dual-casting Destruction spells can stagger opponents, interrupting their actions and allowing for more control in combat.",
      rank: 1,
    },
    {
      name: "Augmented Flames 1",
      description: "Increases fire damage by 25% for your fire spells.",
      rank: 1,
    },
    {
      name: "Augmented Flames 2",
      description:
        "Increases fire damage by an additional 25% for a total of 50%.",
      rank: 2,
    },
    {
      name: "Augmented Frost 1",
      description: "Increases frost damage by 25% for your frost spells.",
      rank: 1,
    },
    {
      name: "Augmented Frost 2",
      description:
        "Increases frost damage by an additional 25% for a total of 50%.",
      rank: 2,
    },
    {
      name: "Augmented Shock 1",
      description: "Increases shock damage by 25% for your shock spells.",
      rank: 1,
    },
    {
      name: "Augmented Shock 2",
      description:
        "Increases shock damage by an additional 25% for a total of 50%.",
      rank: 2,
    },
    {
      name: "Rune Master",
      description:
        "Allows you to set up destructive runes that remain undetected by enemies until triggered.",
      rank: 1,
    },
    {
      name: "Intense Flames",
      description:
        "Enemies on fire take additional damage and will flee when their health drops below 20%.",
      rank: 1,
    },
    {
      name: "Deep Freeze",
      description:
        "Paralyzes enemies whose health drops below 20%, making them easier to handle.",
      rank: 1,
    },
    {
      name: "Disintegrate",
      description:
        "Enemies whose health drops below 20% are instantly disintegrated, leaving behind ash and often making loot easier to spot.",
      rank: 1,
    },
  ],
});

export const restorationPerksSeeds = mapPerksToSkill({
  skillName: "Restoration",
  skills: skillSeeds,
  perks: [
    {
      name: "Restoration Dual Casting",
      description:
        "Dual casting Restoration spells increases their effectiveness. Useful for stronger healing, though often a single cast is sufficient.",
      rank: 1,
    },
    {
      name: "Recovery 1",
      description:
        "Increases Magicka regeneration by 25%, helping you cast more frequently.",
      rank: 1,
    },
    {
      name: "Recovery 2",
      description:
        "Increases Magicka regeneration by an additional 25%, for a total of 50%.",
      rank: 2,
    },
    {
      name: "Regeneration",
      description:
        "Healing spells heal 50% more, making them significantly more effective.",
      rank: 1,
    },
    {
      name: "Respite",
      description:
        "Healing spells also restore your Stamina, useful for both melee and ranged combat.",
      rank: 1,
    },
    {
      name: "Necromage",
      description:
        "Spells are 25% more effective against Undead, and Undead (including Vampires) will be affected more by beneficial effects.",
      rank: 1,
    },
    {
      name: "Ward Absorb",
      description:
        "Wards absorb Magicka from incoming spells, helping to maintain your barriers during magical attacks.",
      rank: 1,
    },
    {
      name: "Avoid Death",
      description:
        "Once per game day, you can be revived if your health falls below 10%, provided you are not overkilled.",
      rank: 1,
    },
  ],
});

export const archeryPerksSeeds = mapPerksToSkill({
  skillName: "Archery",
  skills: skillSeeds,
  perks: [
    {
      name: "Overdraw 1",
      description:
        "The Overdraw Perk raises damage 20% for each point, fully doubling all archery damage by the fifth point.",
      rank: 1,
    },
    {
      name: "Overdraw 2",
      description:
        "The Overdraw Perk raises damage 20% for each point, fully doubling all archery damage by the fifth point.",
      rank: 2,
    },
    {
      name: "Overdraw 3",
      description:
        "The Overdraw Perk raises damage 20% for each point, fully doubling all archery damage by the fifth point.",
      rank: 3,
    },
    {
      name: "Overdraw 4",
      description:
        "The Overdraw Perk raises damage 20% for each point, fully doubling all archery damage by the fifth point.",
      rank: 4,
    },
    {
      name: "Overdraw 5",
      description:
        "The Overdraw Perk raises damage 20% for each point, fully doubling all archery damage by the fifth point.",
      rank: 5,
    },
    {
      name: "Eagle Eye",
      description:
        "Hold block with an arrow drawn zooms your view. Helps with sniping at range, and as a prerequisite for Steady Hand's time slowing effect.",
      rank: 1,
    },
    {
      name: "Steady Hand 1",
      description: "Slows time by 25% when you've zoomed in with Eagle Eye.",
      rank: 1,
    },
    {
      name: "Steady Hand 2",
      description: "Slows time by 50% when you've zoomed in with Eagle Eye.",
      rank: 2,
    },
    {
      name: "Power Shot",
      description: "Arrows stagger all but the largest foes 50% of the time.",
      rank: 1,
    },
    {
      name: "Quick Shot",
      description: "Draw a bow 30% faster.",
      rank: 1,
    },
    {
      name: "Critical Shot 1",
      description: "Gives a 10% critical hit chance.",
      rank: 1,
    },
    {
      name: "Critical Shot 2",
      description: "Gives a 15% critical hit chance with 25% extra damage.",
      rank: 2,
    },
    {
      name: "Critical Shot 3",
      description: "Gives a 20% critical hit chance with 50% extra damage.",
      rank: 3,
    },
    {
      name: "Hunter's Discipline",
      description: "Recover twice as many arrows from dead bodies.",
      rank: 1,
    },
    {
      name: "Ranger",
      description: "Move faster with bow drawn.",
      rank: 1,
    },
    {
      name: "Bullseye",
      description: "15% chance of paralyzing a target for 3 seconds.",
      rank: 1,
    },
  ],
});

export const blockPerksSeeds = mapPerksToSkill({
  skillName: "Block",
  skills: skillSeeds,
  perks: [
    {
      name: "Shield Wall 1",
      description:
        "Increases the amount of damage absorbed by your shield when you block, also works for two-handed weapons. This is reportedly bugged, and actually gives 10% absorption bonus, according to testers at UESP.",
      rank: 1,
    },
    {
      name: "Shield Wall 2",
      description:
        "Increases the amount of damage absorbed by your shield when you block, also works for two-handed weapons. This is reportedly bugged, and actually gives 20% absorption bonus, according to testers at UESP.",
      rank: 2,
    },
    {
      name: "Shield Wall 3",
      description:
        "Increases the amount of damage absorbed by your shield when you block, also works for two-handed weapons. This is reportedly bugged, and actually gives 30% absorption bonus, according to testers at UESP.",
      rank: 3,
    },
    {
      name: "Shield Wall 4",
      description:
        "Increases the amount of damage absorbed by your shield when you block, also works for two-handed weapons. This is reportedly bugged, and actually gives 40% absorption bonus, according to testers at UESP.",
      rank: 4,
    },
    {
      name: "Shield Wall 5",
      description:
        "Increases the amount of damage absorbed by your shield when you block, also works for two-handed weapons. This is reportedly bugged, and actually gives 50% absorption bonus, according to testers at UESP.",
      rank: 5,
    },
    {
      name: "Quick Reflexes",
      description:
        "Slows time down whenever you're holding block and a nearby enemy performs a power attack. This gives you time to bash an opponent before they can hit you, interrupting their attack and letting you get the upper hand.",
      rank: 1,
    },
    {
      name: "Deflect Arrows",
      description:
        "Any arrows that happen to hit your shield will do no damage. Shields are pretty big, so this does prevent a lot of damage.",
      rank: 1,
    },
    {
      name: "Elemental Protection",
      description:
        "Reduces Frost, Fire, and Shock damage by 50% while blocking. This doesn't mean the damage has to hit your shield directly, thus is very helpful when you're under attack by multiple casters or dragons.",
      rank: 1,
    },
    {
      name: "Block Runner",
      description:
        "Lets you move faster while blocking with a shield or weapon, improving your ability to close gaps safely.",
      rank: 1,
    },
    {
      name: "Power Bash",
      description:
        "Allows you to power bash by holding the attack button while you block. This staggers foes, and gives you an advantage.",
      rank: 1,
    },
    {
      name: "Deadly Bash",
      description:
        "Multiplies shield damage by 5x, making shield bashing incredibly dangerous to your foes.",
      rank: 1,
    },
    {
      name: "Disarming Bash",
      description:
        "Power Bashing a target gives a chance to disarm them, in addition to the stagger effect.",
      rank: 1,
    },
    {
      name: "Shield Charge",
      description:
        "You can hold the sprint key and charge forward by blocking with this Perk. Most enemies in Skyrim will get knocked back whenever you do so.",
      rank: 1,
    },
  ],
});

export const lightArmorPerksSeeds = mapPerksToSkill({
  skillName: "Light Armor",
  skills: skillSeeds,
  perks: [
    {
      name: "Agile Defender 1",
      description: "Increases Armor Rating from Light Armor by 20%.",
      rank: 1,
    },
    {
      name: "Agile Defender 2",
      description: "Increases Armor Rating from Light Armor by 40%.",
      rank: 2,
    },
    {
      name: "Agile Defender 3",
      description: "Increases Armor Rating from Light Armor by 60%.",
      rank: 3,
    },
    {
      name: "Agile Defender 4",
      description: "Increases Armor Rating from Light Armor by 80%.",
      rank: 4,
    },
    {
      name: "Agile Defender 5",
      description: "Increases Armor Rating from Light Armor by 100%.",
      rank: 5,
    },
    {
      name: "Custom Fit",
      description:
        "25% bonus to Armor when wearing Light Armor in head, chest, hands, and feet slots.",
      rank: 1,
    },
    {
      name: "Light Armor Matching Set",
      description:
        "25% bonus for wearing matching Light Armor gear (head, chest, hands, and feet).",
      rank: 1,
    },
    {
      name: "Unhindered",
      description:
        "Light Armor weighs nothing and doesn’t slow you down when worn.",
      rank: 1,
    },
    {
      name: "Wind Walker",
      description:
        "Stamina regenerates 50% faster when wearing all Light Armor gear slots.",
      rank: 1,
    },
    {
      name: "Deft Movement",
      description:
        "10% chance to dodge melee attacks when wearing all Light Armor gear slots.",
      rank: 1,
    },
  ],
});

export const heavyArmorPerksSeeds = mapPerksToSkill({
  skillName: "Heavy Armor",
  skills: skillSeeds,
  perks: [
    {
      name: "Juggernaut 1",
      description:
        "Juggernaut raises your armor rating passively, and will help you easily reach the Armor cap along with the Well Fitted and Matching Set Perks from this tree. Steel Armor can reach the cap with high Smithing, so you may not need 5 points here if you'll get other Perks and invest points into Smithing as well.",
      rank: 1,
    },
    {
      name: "Juggernaut 2",
      description:
        "Juggernaut raises your armor rating passively by 40%. Continue to invest in this perk to maximize your armor in the late game.",
      rank: 2,
    },
    {
      name: "Juggernaut 3",
      description:
        "Juggernaut raises your armor rating passively by 60%. Keep investing in this perk to further increase your defensive capabilities.",
      rank: 3,
    },
    {
      name: "Juggernaut 4",
      description:
        "Juggernaut raises your armor rating passively by 80%. This perk significantly enhances your armor, providing robust protection.",
      rank: 4,
    },
    {
      name: "Juggernaut 5",
      description:
        "Juggernaut raises your armor rating passively by 100%. Max out this perk to achieve the highest possible armor rating with Heavy Armor.",
      rank: 5,
    },
    {
      name: "Fists of Steel",
      description:
        "Turns bracers into weapons, allowing them to use their armor rating as a damage rating. This can do great damage, though the reach will certainly be found lacking.",
      rank: 1,
    },
    {
      name: "Cushioned",
      description:
        "When wearing Heavy Armor in the head, hands, chest, and feet slots, your Dragonborn takes half damage from falls.",
      rank: 1,
    },
    {
      name: "Conditioning",
      description:
        "Makes Heavy Armor weightless and removes the movement penalty, though this does not help with Sneaking - you'll need the Silence Perk for that.",
      rank: 1,
    },
    {
      name: "Well Fitted",
      description:
        "+25% armor bonus if you are wearing Heavy Armor in the hands, chest, hands, and feet gear slots.",
      rank: 1,
    },
    {
      name: "Tower of Strength",
      description: "50% less stagger when wearing all Heavy Armor.",
      rank: 1,
    },
    {
      name: "Heavy Armor Matching Set",
      description:
        "Gives +25% armor bonus if your four Heavy Armor pieces are all of the same type (Steel, Daedric, Orcish, Dragonplate, etc.).",
      rank: 1,
    },
    {
      name: "Reflect Blows",
      description:
        "Gives a 10% chance to reflect melee damage back to the enemy while wearing all Heavy Armor in the head, chest, hands, and feet gear slots. This can be an amusing Perk for sure, should an enemy occasionally finish himself off by striking your Dragonborn.",
      rank: 1,
    },
  ],
});

export const oneHandedPerksSeeds = mapPerksToSkill({
  skillName: "One-Handed",
  skills: skillSeeds,
  perks: [
    {
      name: "Armsman 1",
      description:
        "This perk increases damage dealt with One-Handed weapons by 20%.",
      rank: 1,
    },
    {
      name: "Armsman 2",
      description:
        "Further increases the damage dealt with One-Handed weapons by 40%.",
      rank: 2,
    },
    {
      name: "Armsman 3",
      description:
        "Further increases the damage dealt with One-Handed weapons by 60%.",
      rank: 3,
    },
    {
      name: "Armsman 4",
      description:
        "Further increases the damage dealt with One-Handed weapons by 80%.",
      rank: 4,
    },
    {
      name: "Armsman 5",
      description:
        "Maximizes the damage dealt with One-Handed weapons by 100%.",
      rank: 5,
    },
    {
      name: "Bladesman 1",
      description:
        "Increases critical hit chance for swords by 10%. Early on, this perk is quite effective, but its value diminishes with very high damage weapons late in the game.",
      rank: 1,
    },
    {
      name: "Bladesman 2",
      description: "Increases critical hit chance for swords by 15%.",
      rank: 2,
    },
    {
      name: "Bladesman 3",
      description: "Increases critical hit chance for swords by 20%.",
      rank: 3,
    },
    {
      name: "Bone Breaker 1",
      description:
        "Ignores 25% of the armor of enemies when using maces. This is particularly effective against armored foes.",
      rank: 1,
    },
    {
      name: "Bone Breaker 2",
      description:
        "Ignores 50% of the armor of enemies when using maces, further increasing damage against armored opponents.",
      rank: 2,
    },
    {
      name: "Bone Breaker 3",
      description:
        "Ignores 75% of the armor of enemies when using maces, making this perk highly effective against most armored enemies.",
      rank: 3,
    },
    {
      name: "Hack and Slash 1",
      description:
        "Adds bleeding damage to War Axes, causing opponents to lose additional health over time.",
      rank: 1,
    },
    {
      name: "Hack and Slash 2",
      description:
        "Increases the bleeding damage dealt by War Axes, making them more effective in prolonged fights.",
      rank: 2,
    },
    {
      name: "Hack and Slash 3",
      description:
        "Maximizes the bleeding damage dealt by War Axes, ensuring opponents take significant damage even after the initial strike.",
      rank: 3,
    },
    {
      name: "Dual Flurry 1",
      description:
        "Increases the attack speed of dual-wielded weapons by 20%, essential for maximizing damage output when dual wielding.",
      rank: 1,
    },
    {
      name: "Dual Flurry 2",
      description:
        "Further increases the attack speed of dual-wielded weapons by 35%, allowing you to overwhelm enemies with rapid strikes.",
      rank: 2,
    },
    {
      name: "Dual Savagery",
      description:
        "Increases the damage of dual-wielded power attacks, making them more powerful and effective in combat.",
      rank: 1,
    },
    {
      name: "Fighting Stance",
      description:
        "Reduces the stamina cost of power attacks by 25%, helping you to sustain powerful attacks in extended fights.",
      rank: 1,
    },
    {
      name: "Critical Charge",
      description:
        "Allows you to sprint forward and deliver a critical hit with a power attack, closing the distance to your enemy while dealing significant damage.",
      rank: 1,
    },
    {
      name: "Savage Strike",
      description:
        "Increases the damage of standing power attacks by 25% and grants a chance to decapitate enemies, unlocking a special kill animation.",
      rank: 1,
    },
    {
      name: "Paralyzing Strike",
      description:
        "Gives a 25% chance to paralyze an opponent with a backward power attack, rendering them helpless for several seconds.",
      rank: 1,
    },
  ],
});

export const twoHandedPerksSeeds = mapPerksToSkill({
  skillName: "Two-Handed",
  skills: skillSeeds,
  perks: [
    {
      name: "Barbarian 1",
      description: "Increases damage with Two-Handed weapons by 20%.",
      rank: 1,
    },
    {
      name: "Barbarian 2",
      description: "Increases damage with Two-Handed weapons by 40%.",
      rank: 2,
    },
    {
      name: "Barbarian 3",
      description: "Increases damage with Two-Handed weapons by 60%.",
      rank: 3,
    },
    {
      name: "Barbarian 4",
      description: "Increases damage with Two-Handed weapons by 80%.",
      rank: 4,
    },
    {
      name: "Barbarian 5",
      description: "Increases damage with Two-Handed weapons by 100%.",
      rank: 5,
    },
    {
      name: "Champion's Stance",
      description: "Makes 2H power attacks cost 25% less stamina.",
      rank: 1,
    },
    {
      name: "Limbsplitter 1",
      description: "Battleaxes cause bleeding damage against opponents.",
      rank: 1,
    },
    {
      name: "Limbsplitter 2",
      description:
        "Battleaxes cause increased bleeding damage against opponents.",
      rank: 2,
    },
    {
      name: "Limbsplitter 3",
      description:
        "Battleaxes cause even more bleeding damage against opponents.",
      rank: 3,
    },
    {
      name: "Deep Wounds 1",
      description: "Gives up to a 5% chance to critical hit with Greatswords.",
      rank: 1,
    },
    {
      name: "Deep Wounds 2",
      description: "Gives up to a 10% chance to critical hit with Greatswords.",
      rank: 2,
    },
    {
      name: "Deep Wounds 3",
      description: "Gives up to a 20% chance to critical hit with Greatswords.",
      rank: 3,
    },
    {
      name: "Skullcrusher 1",
      description: "Warhammers ignore up to 25% of an opponent's armor.",
      rank: 1,
    },
    {
      name: "Skullcrusher 2",
      description: "Warhammers ignore up to 50% of an opponent's armor.",
      rank: 2,
    },
    {
      name: "Skullcrusher 3",
      description: "Warhammers ignore up to 75% of an opponent's armor.",
      rank: 3,
    },
    {
      name: "Great Critical Charge",
      description:
        "Perform a power attack while sprinting, sometimes doing double critical damage and causing a powerful stagger.",
      rank: 1,
    },
    {
      name: "Devastating Blow",
      description:
        "Increases the damage of 2H power attacks and enables the decapitate death animation sometimes.",
      rank: 1,
    },
    {
      name: "Sweep",
      description:
        "Perform a power attack that hits multiple enemies in a wide arc.",
      rank: 1,
    },
    {
      name: "Warmaster",
      description:
        "Backward power attacks have a 25% chance to paralyze an opponent.",
      rank: 1,
    },
  ],
});

export const smithingPerksSeeds = mapPerksToSkill({
  skillName: "Smithing",
  skills: skillSeeds,
  perks: [
    {
      name: "Steel Smithing",
      description:
        "Can create steel armor and weapons at forges, and improve them twice as much.",
      rank: 1,
    },
    {
      name: "Arcane Blacksmith",
      description: "Magical weapons and armor can now be improved.",
      rank: 1,
    },
    {
      name: "Elven Smithing",
      description:
        "Can create Elven armor and weapons at forges, and improve them twice as much.",
      rank: 1,
    },
    {
      name: "Advanced Armors",
      description:
        "Can create scaled and steel plate armor at forges, and improve them twice as much.",
      rank: 1,
    },
    {
      name: "Glass Smithing",
      description:
        "Can create glass armor and weapons at forges, and improve them twice as much.",
      rank: 1,
    },
    {
      name: "Dwarven Smithing",
      description:
        "Can create Dwarven armor and weapons at forges, and improve them twice as much.",
      rank: 1,
    },
    {
      name: "Orcish Smithing",
      description:
        "Can create Orcish armor and weapons at forges, and improve them twice as much.",
      rank: 1,
    },
    {
      name: "Ebony Smithing",
      description:
        "Can create ebony armor and weapons at forges, and improve them twice as much.",
      rank: 1,
    },
    {
      name: "Daedric Smithing",
      description:
        "Can create daedric armor and weapons at forges, and improve them twice as much.",
      rank: 1,
    },
    {
      name: "Dragon Armor",
      description:
        "Can create dragon armor and weapons at forges, and improve them twice as much.",
      rank: 1,
    },
  ],
});

export const enchantingPerksSeeds = mapPerksToSkill({
  skillName: "Enchanting",
  skills: skillSeeds,
  perks: [
    {
      name: "Enchanter 1",
      description: "Enchantments are 20% more powerful.",
      rank: 1,
    },
    {
      name: "Enchanter 2",
      description: "Enchantments are 40% more powerful.",
      rank: 2,
    },
    {
      name: "Enchanter 3",
      description: "Enchantments are 60% more powerful.",
      rank: 3,
    },
    {
      name: "Enchanter 4",
      description: "Enchantments are 80% more powerful.",
      rank: 4,
    },
    {
      name: "Enchanter 5",
      description: "Enchantments are 100% more powerful (twice as powerful).",
      rank: 5,
    },
    {
      name: "Soul Squeezer",
      description: "Soul gems recharge items more efficiently.",
      rank: 1,
    },
    {
      name: "Soul Siphon",
      description:
        "Killing creatures recharges a weapon slightly, extending its use.",
      rank: 1,
    },
    {
      name: "Insightful Enchanter",
      description: "Fortify Skill enchantments on armor are 25% stronger.",
      rank: 1,
    },
    {
      name: "Corpus Enchanter",
      description:
        "Health, Magicka, and Stamina enchantments on armor are 25% stronger.",
      rank: 1,
    },
    {
      name: "Fire Enchanter",
      description: "Fire enchantments on weapons and armor are 25% stronger.",
      rank: 1,
    },
    {
      name: "Frost Enchanter",
      description: "Frost enchantments on weapons and armor are 25% stronger.",
      rank: 1,
    },
    {
      name: "Storm Enchanter",
      description: "Shock enchantments on weapons and armor are 25% stronger.",
      rank: 1,
    },
    {
      name: "Extra Effect",
      description:
        "Add a second magical effect when enchanting a piece of gear.",
      rank: 1,
    },
  ],
});

export const alchemyPerksSeeds = mapPerksToSkill({
  skillName: "Alchemy",
  skills: skillSeeds,
  perks: [
    {
      name: "Alchemist 1",
      description: "Increases the strength or duration of potions by 20%.",
      rank: 1,
    },
    {
      name: "Alchemist 2",
      description: "Increases the strength or duration of potions by 40%.",
      rank: 2,
    },
    {
      name: "Alchemist 3",
      description: "Increases the strength or duration of potions by 60%.",
      rank: 3,
    },
    {
      name: "Alchemist 4",
      description: "Increases the strength or duration of potions by 80%.",
      rank: 4,
    },
    {
      name: "Alchemist 5",
      description: "Increases the strength or duration of potions by 100%.",
      rank: 5,
    },
    {
      name: "Physician",
      description:
        "Health, Magicka, and Stamina potions are 25% more effective.",
      rank: 1,
    },
    {
      name: "Poisoner",
      description: "Poisons are 25% more effective.",
      rank: 1,
    },
    {
      name: "Concentrated Poison",
      description: "Poisons applied to weapons last for twice as many hits.",
      rank: 1,
    },
    {
      name: "Green Thumb",
      description: "Gather two ingredients from plants instead of one.",
      rank: 1,
    },
    {
      name: "Benefactor",
      description: "Beneficial potions you create have 25% greater magnitude.",
      rank: 1,
    },
    {
      name: "Experimenter 1",
      description: "Reveals 2 effects when eating an ingredient.",
      rank: 1,
    },
    {
      name: "Experimenter 2",
      description: "Reveals 3 effects when eating an ingredient.",
      rank: 2,
    },
    {
      name: "Experimenter 3",
      description: "Reveals 4 effects when eating an ingredient.",
      rank: 3,
    },
    {
      name: "Snakeblood",
      description: "50% resistance to all poisons.",
      rank: 1,
    },
    {
      name: "Purity",
      description:
        "Negatives are removed from potions, allowing for better custom combinations.",
      rank: 1,
    },
  ],
});

export const lockpickingPerksSeeds = mapPerksToSkill({
  skillName: "Lockpicking",
  skills: skillSeeds,
  perks: [
    {
      name: "Novice Lockpicking",
      description: "Makes Novice locks easier to pick.",
      rank: 1,
    },
    {
      name: "Apprentice Lockpicking",
      description: "Makes Apprentice locks easier to pick.",
      rank: 1,
    },
    {
      name: "Adept Lockpicking",
      description: "Makes Adept locks easier to pick.",
      rank: 1,
    },
    {
      name: "Expert Lockpicking",
      description: "Makes Expert locks easier to pick.",
      rank: 1,
    },
    {
      name: "Master Lockpicking",
      description: "Makes Master locks easier to pick.",
      rank: 1,
    },
    {
      name: "Quick Hands",
      description: "Pick locks without being noticed.",
      rank: 1,
    },
    {
      name: "Wax Key",
      description:
        "Automatically creates a copy of the picked lock's key if it has one.",
      rank: 1,
    },
    {
      name: "Golden Touch",
      description: "Find more gold in chests.",
      rank: 1,
    },
    {
      name: "Treasure Hunter",
      description: "50% greater chance of finding special treasure.",
      rank: 1,
    },
    {
      name: "Locksmith",
      description: "Pick starts close to the opening position.",
      rank: 1,
    },
    {
      name: "Unbreakable",
      description: "Lock picks never break.",
      rank: 1,
    },
  ],
});

export const pickpocketPerksSeeds = mapPerksToSkill({
  skillName: "Pickpocket",
  skills: skillSeeds,
  perks: [
    {
      name: "Light Fingers 1",
      description: "Increases pickpocketing success chance by 20% per rank.",
      rank: 1,
    },
    {
      name: "Light Fingers 2",
      description: "Increases pickpocketing success chance by 40% total.",
      rank: 2,
    },
    {
      name: "Light Fingers 3",
      description: "Increases pickpocketing success chance by 60% total.",
      rank: 3,
    },
    {
      name: "Light Fingers 4",
      description: "Increases pickpocketing success chance by 80% total.",
      rank: 4,
    },
    {
      name: "Light Fingers 5",
      description: "Increases pickpocketing success chance by 100% total.",
      rank: 5,
    },
    {
      name: "Night Thief",
      description: "25% higher chance to pickpocket if the target is asleep.",
      rank: 1,
    },
    {
      name: "Poisoned",
      description: "Silently place poison in enemies' pockets.",
      rank: 1,
    },
    {
      name: "Extra Pockets",
      description: "Increases carrying capacity by 100.",
      rank: 1,
    },
    {
      name: "Cutpurse",
      description: "Pickpocketing gold is 50% easier.",
      rank: 1,
    },
    {
      name: "Keymaster",
      description: "Pickpocketing keys almost always works.",
      rank: 1,
    },
    {
      name: "Misdirection",
      description: "Can pickpocket equipped items, including clothes.",
      rank: 1,
    },
  ],
});

export const sneakPerksSeeds = mapPerksToSkill({
  skillName: "Sneak",
  skills: skillSeeds,
  perks: [
    {
      name: "Stealth 1",
      description: "Makes it 20% harder to detect while sneaking.",
      rank: 1,
    },
    {
      name: "Stealth 2",
      description: "Makes it 25% harder to detect while sneaking.",
      rank: 2,
    },
    {
      name: "Stealth 3",
      description: "Makes it 30% harder to detect while sneaking.",
      rank: 3,
    },
    {
      name: "Stealth 4",
      description: "Makes it 35% harder to detect while sneaking.",
      rank: 4,
    },
    {
      name: "Stealth 5",
      description: "Makes it 40% harder to detect while sneaking.",
      rank: 5,
    },
    {
      name: "Backstab",
      description:
        "Sneak attacks with one-handed weapons do six times normal damage.",
      rank: 1,
    },
    {
      name: "Deadly Aim",
      description: "Raises bow sneak attack damage from 2x to 3x.",
      rank: 1,
    },
    {
      name: "Assassin's Blade",
      description: "Sneak attacks with daggers do 15x damage.",
      rank: 1,
    },
    {
      name: "Muffled Movement",
      description:
        "Reduces noise of your armor by 50%, making you harder to detect.",
      rank: 1,
    },
    {
      name: "Light Foot",
      description: "You no longer trigger pressure plates while sneaking.",
      rank: 1,
    },
    {
      name: "Silent Roll",
      description: "Sprinting while sneaking makes you roll forward silently.",
      rank: 1,
    },
    {
      name: "Silence",
      description: "Walking and running no longer affect detection.",
      rank: 1,
    },
    {
      name: "Shadow Warrior",
      description:
        "Allows you to stealth during combat if there is some distance between you and the enemy.",
      rank: 1,
    },
  ],
});

export const speechPerksSeeds = mapPerksToSkill({
  skillName: "Speech",
  skills: skillSeeds,
  perks: [
    {
      name: "Haggling",
      description: "Improves buy and sell prices by 10% per rank.",
      rank: 1,
    },
    {
      name: "Haggling 2",
      description: "Improves buy and sell prices by 15% per rank.",
      rank: 2,
    },
    {
      name: "Haggling 3",
      description: "Improves buy and sell prices by 20% per rank.",
      rank: 3,
    },
    {
      name: "Haggling 4",
      description: "Improves buy and sell prices by 25% per rank.",
      rank: 4,
    },
    {
      name: "Haggling 5",
      description: "Improves buy and sell prices by 30% per rank.",
      rank: 5,
    },
    {
      name: "Allure",
      description:
        "Gives 10% better prices when dealing with the opposite sex.",
      rank: 1,
    },
    {
      name: "Merchant",
      description:
        "Allows you to buy and sell any kind of item to any merchant.",
      rank: 1,
    },
    {
      name: "Investor",
      description:
        "Allows you to give a merchant 500 gold to permanently increase their available funds.",
      rank: 1,
    },
    {
      name: "Fence",
      description:
        "Allows you to barter stolen goods with any merchant you've invested in, turning them into a Fence.",
      rank: 1,
    },
    {
      name: "Master Trader",
      description: "Every merchant gains 1000 gold for bartering.",
      rank: 1,
    },
    {
      name: "Bribery",
      description:
        "Allows you to bribe guards to ignore crimes, provided your bounty isn't too high.",
      rank: 1,
    },
    {
      name: "Persuasion",
      description: "Persuasion attempts are 30% easier.",
      rank: 1,
    },
    {
      name: "Intimidation",
      description: "Intimidation attempts are twice as likely to succeed.",
      rank: 1,
    },
  ],
});

export const perkSeeds = setManySeedId([
  ...illusionPerksSeeds,
  ...conjurationPerksSeeds,
  ...alterationPerksSeeds,
  ...destructionPerksSeeds,
  ...restorationPerksSeeds,
  ...archeryPerksSeeds,
  ...blockPerksSeeds,
  ...lightArmorPerksSeeds,
  ...heavyArmorPerksSeeds,
  ...oneHandedPerksSeeds,
  ...twoHandedPerksSeeds,
  ...smithingPerksSeeds,
  ...enchantingPerksSeeds,
  ...alchemyPerksSeeds,
  ...lockpickingPerksSeeds,
  ...pickpocketPerksSeeds,
  ...sneakPerksSeeds,
  ...speechPerksSeeds,
]);

export const perkSeeder = (
  db: PrismaClient,
  data = perkSeeds,
): Prisma.PrismaPromise<Prisma.BatchPayload> => {
  return db.perk.createMany({ data });
};
