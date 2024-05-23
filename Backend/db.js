const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://lordrolex4u:X9HUhHH3XoQXvJLy@ims.46s2esi.mongodb.net/";
//"mongodb://127.0.0.1:27017/IMS";
const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
