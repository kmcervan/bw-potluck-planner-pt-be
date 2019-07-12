require("dotenv").config();

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/dev.db3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds/"
    },
    useNullAsDefault: true
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds/"
    },
    useNullAsDefault: true
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds/"
    },
    useNullAsDefault: true
  }
};
