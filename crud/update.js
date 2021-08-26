const db = require("../db/models/index.js");

const { Op } = require("sequelize");

// const updatePikachu2 = async (hp, category) => {
//   // No returning records by default
//   console.log("Entering Update functions ");
//   const numberOfAffectedRecords = await db.SimplePokemon.update(
//     { baseHP: hp },
//     {
//       where: {
//         category: {
//           [Op.like]: `%${category}%`,
//         },
//       },
//     }
//   );
// };

const updatePikachu = async (hp, category) => {
  // With updated records
  const [numberOfAffectedRecords, updatedPokemons] =
    await db.SimplePokemon.update(
      { baseHP: hp },
      {
        where: {
          category: {
            [Op.like]: `%${category}%`,
          },
        },
      }
    );
  console.log("Updated pokemons " + updatedPokemons);
  return numberOfAffectedRecords;
};

module.exports = { updatePikachu };
