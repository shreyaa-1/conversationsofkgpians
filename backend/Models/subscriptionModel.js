const { url } = require("inspector");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const subscriptionSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {validator:(value) => validator.isEmail(value),
        message:"Provide valid email"
      }
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("subscription", subscriptionSchema);
