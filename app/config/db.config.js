module.exports = {
  HOST: "lus-cdbr-east-02.cleardb.com",
  USER: "b53e600c2df1f9",
  PASSWORD: "148db343",
  DB: "heroku_5d5bba4dd1d3b1a",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
