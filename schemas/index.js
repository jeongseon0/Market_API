const mongoose = require('mongoose');
const MONGO_DB_PATH = require('.env');


const connect = () => {
  mongoose.connect(MONGO_DB_PATH, {dbName:"node_lv1"})
  .then(() => console.log("MongoDB Connection Success"))
  .catch(error => console.log("MongoDB Connection Error", error));
};

mongoose.connection.on("error", error => {
  console.error("MongoDB Connection Error", error);
});

module.exports = connect;