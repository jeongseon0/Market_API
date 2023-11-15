const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_DB_URI, { dbName: process.env.MONGO_DB_NAME })
    .then(() => console.log("MongoDB Connection Success"))
    .catch((error) => console.log("MongoDB Connection Error", error));
};

mongoose.connection.on("error", (error) => {
  console.error(`MongoDB Connection Error
  >>${error}`);
});

module.exports = connect;
