const db = require("../db/models/index.js");

const { Op } = require("sequelize");

const updatePikachu = async () => {
  // No returning records by default
  // const numberOfAffectedRecords = await SimplePokemon.update(
  //   { baseHP: 100 },
  //   {
  //     where: {
  //       category: {
  //         [Op.like]: "%Turtle%",
  //       },
  //     },
  //   }
  // );

  // With updated records
  const [numberOfAffectedRecords, updatedPokemons] =
    await db.SimplePokemon.update(
      { baseHP: 50 },
      {
        where: {
          category: {
            [Op.like]: "%Turtle%",
          },
        },
        returning: true,
      }
    );
};

module.exports = updatePikachu;
