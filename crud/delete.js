const db = require("../db/models/index.js");

const { Op } = require("sequelize");

const deletePikachu = async (id) => {
  const numberOfDeletedRecord = await db.SimplePokemon.destroy({
    where: {
      id: id,
    },
  });
  return numberOfDeletedRecord;
};

module.exports = { deletePikachu };
