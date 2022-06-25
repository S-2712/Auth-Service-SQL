module.exports = {
  HOST: "authservice.ckrsy3hwduss.ap-south-1.rds.amazonaws.com",
  USER: "gpth",
  PASSWORD: "gpth123",
  DB: "hometute",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
