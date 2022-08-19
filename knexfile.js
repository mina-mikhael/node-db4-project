const sharedConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: { directory: "./data/migrations" },
  pool: { afterCreate: (conn, done) => conn.run("PRAGMA foreign_keys= ON", done) },
  seeds: { directory: "./data/seeds" },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: {
      filename: "./data/food_recipes.db3",
    },
  },
  testing: {
    ...sharedConfig,
    connection: {
      filename: "./data/food_recipes.test.db3",
    },
  },
  production: {
    ...sharedConfig,
    connection: {
      filename: "./data/food_recipes.prod.db3",
    },
  },
};
