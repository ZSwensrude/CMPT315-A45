// Code adapted from https://github.com/mrchenliang/learning-node

import Monster from "../models/monsterModel.js";

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

// This func gets the highest id in the database and increments it by one so its
// always a unique id. The main reason i went with this as opposed to another method
// of generating unique ids is to keep the id number small and simple, rather than
// mongo's id system which is a complicated number
const getUniqueMonsterID = async () => {
  const maxIdDocument = await Monster.findOne({}, { id: 1 }).sort({ id: -1 });
  const maxId = maxIdDocument ? maxIdDocument.id : 0;
  return maxId + 1;
}

export const createMonsterInRepository = async (payload) => {
  try {
    // get a new id
    const newId = await getUniqueMonsterID();
    // add it to the payload obj
    payload = {...payload, id: newId};
    // then add to the DB
    const newMonster = new Monster(payload);
    const savedMonster = await newMonster.save();
    return savedMonster;
  } catch (e) {
    throw Error("Error while creating a monster: ", e);
  }
}
