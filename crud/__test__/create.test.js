const createPikachu = require("../create.js");

const db = require("../../db/models/index");
const PokemonModel = db.SimplePokemon;
jest.setTimeout(3000);

const pokemon1 = {
  name: "Pikachu",
  japaneseName: "ピカチュウ",
  baseHP: 350,
  category: "Mouse Pokemon",
};

describe("create", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await PokemonModel.truncate();
    await db.sequelize.close();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  /* eslint-disable no-unused-vars, no-unused-expressions, jest/no-disabled-tests */

  it("should create a pokemon", async () => {
    const created = await createPikachu(pokemon1);

    expect(created.id).not.toBeNull();
    // expect(created).toEqual(pokemon1); // false
    // expect(created).toContainEqual(pokemon1); // false
    expect(created).toMatchObject(pokemon1);
  });

  it("should not create pokemon without name", async () => {
    // run

    // const created = await createPikachu({
    //   ...pokemon1,
    //   name: null,
    // });

    // assert
    await expect(
      createPikachu({
        ...pokemon1,
        name: null,
      })
    ).rejects.toThrow();
  });

  it("should not create pokemon with empty name", async () => {
    // run
    const created = await createPikachu({
      ...pokemon1,
      name: "",
    });

    // assertion
    await expect(
      createPikachu({
        ...pokemon1,
        name: "",
      })
    ).rejects.toThrow();
  });

  it.skip("should not create pokemon with duplicated name", async () => {
    // set up
    await createPikachu(pokemon1);

    // run
    const created = await createPikachu(pokemon1);

    // assertion
  });
});
