// crud/create.js
const db = require("../db/models/index.js");

const createPikachu = async (pikachu) => {
  //   const pikachu = {
  //     name: "Pikachu",
  //     japaneseName: "ピカチュウ",
  //     baseHP: 35,
  //     category: "Mouse Pokemon",
  //   };
  const created = await db.SimplePokemon.create(pikachu);
  console.log("Pikachu was saved to the database!");

  console.log(created.toJSON()); // The recommended way to log an instance, but do note that this might still log sensitive data stored in database. Need processing.
  return created;
  //   const pokemons = [
  //     {
  //       name: "Squirtle",
  //       japaneseName: "ゼニガメ",
  //       baseHP: 44,
  //       category: "Tiny Turtle Pokemon",
  //     },
  //     {
  //       name: "Wartortle",
  //       japaneseName: "カメール",
  //       baseHP: 59,
  //       category: "Turtle Pokémon",
  //     },
  //     {
  //       name: "Meowth",
  //       japaneseName: "ニャース",
  //       baseHP: 40,
  //       category: "Scratch Cat Pokémon",
  //     },
  //   ];

  //   const created2 = await db.SimplePokemon.bulkCreate(pokemons);
};

module.exports = createPikachu;
