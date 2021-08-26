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

// [1] Just test connection, we don't neeed this in actual. --> REMOVE THIS SECTION
// [2] For dev exploration convenience, we forced synchronisation.
db.sequelize.sync({ force: true }); // --> REPLACE THIS

setTimeout(createPikachu, 500);
