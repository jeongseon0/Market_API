const mongoose = require('mongoose');


const connect = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/sun_market', {dbName:"node_lv1"})
  .then(() => console.log("MongoDB Connection Success"))
  .catch(error => console.log("MongoDB Connection Error", error));
};

mongoose.connection.on("error", error => {
  console.error("MongoDB Connection Error", error);
});

module.exports = connect;