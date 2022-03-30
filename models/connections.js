require("dotenv").config();
const mongoose = require("mongoose");

//setting up mongoose connection

const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//connect to mongoose

mongoose.connect(DATABASE_URL, CONFIG);
//CONNECTION MESSAGE
mongoose.connection
  .on("open", () => console.log("Connected to Mongo"))
  .on("close", () => console.log("disconnected from mongo"))
  .on("error", (error) => console.log(error));

module.exports = mongoose;
