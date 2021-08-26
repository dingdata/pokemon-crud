// crud/create.js
const db = require("../db/models/index.js");

const createPikachu = async () => {
  const pikachu = {
    name: "Pikachu",
    japaneseName: "ピカチュウ",
    baseHP: 35,
    category: "Mouse Pokemon",
  };
  const created = await db.SimplePokemon.create(pikachu);
  console.log("Pikachu was saved to the database!");

  console.log(created.toJSON()); // The recommended way to log an instance, but do note that this might still log sensitive data stored in database. Need processing.
};

module.exports = createPikachu;
