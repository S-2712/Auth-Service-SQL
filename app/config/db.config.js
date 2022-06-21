module.exports = {
  HOST: "authservice.ckrsy3hwduss.ap-south-1.rds.amazonaws.com",
  USER: "root",
  PASSWORD: "root1234",
  DB: "hometute",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
