module.exports = {
 HOST: "us-cdbr-east-03.cleardb.com",
  USER: "b2c193776e7f29",
  PASSWORD: "538091d4",
  DB: "heroku_80a7bac2b1e04b5",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
