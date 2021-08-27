const { request } = require("express");
const express = require("express");
const router = express.Router();

const createPikachu = require("../crud/create.js");
const { deletePikachuByName, deletePikachu } = require("../crud/delete.js");
const { findPokemonByName } = require("../crud/read.js");

router.post("/create", async (req, res) => {
  const data = req.body;
  console.log("Inside create - " + data);

  try {
    const pokemon = await createPikachu(data);
    res.send(pokemon);
  } catch (Error) {
    res.status(500).end();
  }
});

router.get("/getbyname/:name", async (req, res) => {
  const name = req.params.name;
  console.log("Inside Get PokemonBy Name - " + name);

  try {
    const pokemon = await findPokemonByName(name);
    res.send(`${pokemon.json()} is retrieved`);
  } catch (Error) {
    res.status(500).end();
  }
});

router.delete("/byname/:name", async (req, res) => {
  const name = req.params.name;
  console.log("Inside delete");

  try {
    const pokemon = await deletePikachuByName(name);
    res.send(`${pokemon} pokemon is deleted`);
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

router.delete("/byid/:id", async (req, res) => {
  const id = req.params.id;
  console.log("Inside delete by ID");

  try {
    const pokemon = await deletePikachu(id);
    res.send(`${pokemon} pokemon is deleted`);
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

module.exports = router;

router.use((err, req, res, next) => {
  if (err.message === "Invalid ID") {
    console.log(err.message);
    res.sendStatus(err.status);
  } else {
    console.log(err.message);
    next(err);
  }
});
