module.exports = {
  HOST: "localhost",
  USER: "procon31",
  PASSWORD: "Seahorse_10_2",
  DB: "mysql",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
