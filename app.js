const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());

const db = require("./db/models/index.js"); // --> Connecting to index.js
db.sequelize.sync(); // inistialising.
// setTimeout(createPikachu, 300);
/**Router codes **/
const pokemonRouter = require("./router/pokemon.router.js");
app.use("/pokemon", pokemonRouter);

// const Read = require("./crud/read");

app.get("/", (req, res) => {
  res.send("Welcome to my homepage");
});

module.exports = app;
