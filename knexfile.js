// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./database/auth.db3"
    },
    migrations: {
      tableName: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};
