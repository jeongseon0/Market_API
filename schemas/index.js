const mongoose = require('mongoose');
require('dotenv').config()

const id = process.env.MONGO_DB_ID;
const pw = process.env.MONGO_DB_PW;

const connect = () => {
  mongoose.connect(`mongodb+srv://${id}:${pw}@cluster0.ffquotr.mongodb.net/`, {dbName:"seon_market_db"})
  .then(() => console.log("MongoDB Connection Success"))
  .catch(error => console.log("MongoDB Connection Error", error));
};

mongoose.connection.on("error", error => {
  console.error("MongoDB Connection Error", error);
});

module.exports = connect;