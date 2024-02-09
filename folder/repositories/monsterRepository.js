import Monster from "../models/monsterModel";

export const getMonstersFromRepository = async (query) => {
  try {
    const monsters = await Monster.find(query);
    return monsters;
  } catch (e) {
    throw Error("Error while fetching monsters: ", e);
  }
}


export const updateMonstersInRepository = async (query, update) => {
  try {
    const monster = await Monster.findOneAndUpdate(
      { ...query },
      { ...update },
      { new: true }
    ).lean();
    return monster;
  } catch (e) {
    throw Error("Error while updating monster: ", e);
  } 
}

export const deleteMonsterFromRepository = async (query) => {
  try {
    const monster = await Monster.findOneAndDelete({ ...query });
    return monster;
  } catch (e) {
    throw Error("Error while deleting a monster: ", e);
  }
}

export const createMonsterInRepository = async (payload) => {
  try {
    const newMonster = new Superhero(payload);
    const savedMonster = await newMonster.save();
    return savedMonster;
  } catch (e) {
    throw Error("Error while creating a monster: ", e);
  }
}
