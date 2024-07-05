const { url } = require("inspector");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const formSchema = new Schema(
  {
    name: {
      type: String,
      required: [true,"Name is required"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {validator:(value) => validator.isEmail(value),
        message:"Provide valid email"
      }
    },
    contact: {
      type: Number,
      required: [true,"Contact No. is required"],
    },
    linkedin_url:{
        type:String,
        required:[true, "lnkedin profile is required"]
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("form", formSchema);
