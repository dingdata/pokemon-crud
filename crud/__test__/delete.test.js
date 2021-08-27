const { deletePikachu, deletePikachuByName } = require("../delete.js");

const db = require("../../db/models/index");
const PokemonModel = db.SimplePokemon;

jest.setTimeout(3000);

const pokemons = [
  {
    name: "Pikachu",
    japaneseName: "ピカチュウ",
    baseHP: 35,
    category: "Mouse Pokemon",
  },
  {
    name: "Squirtle",
    japaneseName: "ゼニガメ",
    baseHP: 44,
    category: "Tiny Turtle Pokemon",
  },
  {
    name: "Wartortle",
    japaneseName: "カメール",
    baseHP: 59,
    category: "Turtle Pokémon",
  },
  {
    name: "Meowth",
    japaneseName: "ニャース",
    baseHP: 40,
    category: "Scratch Cat Pokémon",
  },
];

describe.only("delete", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await PokemonModel.bulkCreate(pokemons);
  });

  afterAll(async () => {
    await PokemonModel.truncate();
    await db.sequelize.close();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  /* eslint-disable no-unused-vars, no-unused-expressions, jest/no-disabled-tests */

  it("should delete pokemon by id", async () => {
    const result = await deletePikachu(1);
    console.log(result);
    expect(result).toEqual(1);
  });

  it("should delete pokemon by Name", async () => {
    const result = await deletePikachuByName("Wartortle");
    console.log(result);
    expect(result).toEqual(1);
  });
});
