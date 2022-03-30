//dependencies
const mongoose = require("mongoose");
// schema
const Schema = mongoose.Schema;
const model = mongoose.model;

//foam schema

const foamsSchema = new Schema(
  Schema(
    {
      url: String,
      foam: String,
    },
    { timestamp: true }
  )
);
const Foam = mongoose.model("Foam", foamsSchema);

module.exports = Foam;
