// // index.js
// const sequelizeConnection = require("./db/index.js");
// const getSimplePokemonModel = require("./db/models/simple-pokemon.model.js");

// // A sequelize model instance that has been connected to the database for usage later.
// let SimplePokemon;

// Promise.resolve(sequelizeConnection.sync({ force: true }))
//   // .resolve(sequelizeConnection.sync()
//   .then(console.info("All models were synchronized successfully."))
//   .then(function () {
//     SimplePokemon = getSimplePokemonModel(sequelizeConnection);
//   });

const db = require("./db/models/index.js"); // --> Connecting to index.js
const createPikachu = require("./crud/create"); //  --> Add this for creation.
const updatePikachu = require("./crud/update"); //  --> Add this for update.
const deletePikachu = require("./crud/delete"); //  --> Add this for deletion.
// [1] Just test connection, we don't neeed this in actual. --> REMOVE THIS SECTION
// [2] For dev exploration convenience, we forced synchronisation.
// db.sequelize.sync({ force: true }); // --> REPLACE THIS
// setTimeout(createPikachu, 300);

const Read = require("./crud/read");
setTimeout(() => Read.findPokemonsWithBaseHPGreaterThan(40), 500); // 500 is the time out
setTimeout(() => Read.findPokemonWithNameOrBaseHP("Pikachu", 59), 500);

// const Update = require("./crud/update");
// setTimeout(updatePikachu, 500);

setTimeout(() => deletePikachu.numberOfDeletedRecord(1), 500);
