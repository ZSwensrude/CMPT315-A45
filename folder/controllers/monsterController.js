// Code adapted from https://github.com/mrchenliang/learning-node

import { getMonstersFromRepository, updateMonstersInRepository, deleteMonsterFromRepository, createMonsterInRepository } from "../repositories/monsterRepository.js";

export const getMonsters = async (req, res) => {
  try {
    const monsters = await getMonstersFromRepository();
    res.status(200).send(monsters);
  } catch (e) {
    console.log("Failed to : ", e); 
  }
}

export const getMonster = async (req, res) => {
  try {
    const { id } = req.params;
    const monster = await getMonstersFromRepository({ _id: id })
    res.status(200).send(monster);
  } catch (e) {
    console.log("Failed to : ", e); 
  }
}

export const updateMonster = async (req, res) => {
  try {

  } catch (e) {
    console.log("Failed to : ", e); 
  }
}

export const deleteMonster = async (req, res) => {
  try {

  } catch (e) {
    console.log("Failed to : ", e); 
  }
}

export const createMonster = async (req, res) => {
  try {

  } catch (e) {
    console.log("Failed to : ", e); 
  }
}
