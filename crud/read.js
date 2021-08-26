// crud/read.js
const db = require("../db/models/index.js");

const { Op } = require("sequelize");

const findPokemonByName = async (name) => {
  const foundPokemons = await db.SimplePokemon.findAll({
    where: {
      name: {
        [Op.eq]: name,
      },
    },
  });
  console.log(
    `RESULT FOR findPokemonWithNameOrBaseHP: ${foundPokemons.length}`
  );
  console.log(foundPokemons);
  return foundPokemons;
};

const findPokemonsWithBaseHPGreaterThan = async (baseHP) => {
  const foundPokemons = await db.SimplePokemon.findAll({
    where: {
      baseHP: {
        [Op.gt]: baseHP,
      },
    },
    //raw: true, //sequlize. values will ignore the more advanced fields
  });
  console.log(
    `RESULT FOR findPokemonsWithBaseHPGreaterThan: ${foundPokemons.length}`
  );
  console.log(foundPokemons);
  return foundPokemons;
};

const findPokemonWithNameOrBaseHP = async (name, baseHP) => {
  const foundPokemons = await db.SimplePokemon.findAll({
    where: {
      [Op.or]: [{ name: name }, { baseHP: baseHP }],
    },
  });
  console.log(
    `RESULT FOR findPokemonWithNameOrBaseHP: ${foundPokemons.length}`
  );
  console.log(foundPokemons);
  return foundPokemons;
};

module.exports = {
  findPokemonsWithBaseHPGreaterThan,
  findPokemonWithNameOrBaseHP,
  findPokemonByName,
};
