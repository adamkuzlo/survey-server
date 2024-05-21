module.exports = {
  HOST: "sql5.freesqldatabase.com",
  USER: "sql5708132",
  PASSWORD: "XNn7vWDRWG", // Replace with your actual password
  DB: "sql5708132",
  dialect: "mysql",
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000,
  // },
  // Add error handling
  async connect() {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  },
};
