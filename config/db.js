const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO);
    console.log("Conexión DB realizada con éxito 💪🤖!");
  } catch (error) {
    console.log("🚀 ~ file: db.js ~ line 8 ~ error", error);
    process.exit(1); // detener la app
  }
};

module.exports = conectarDB;
