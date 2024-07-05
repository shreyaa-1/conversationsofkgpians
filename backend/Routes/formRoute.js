const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const formModel = require("../Models/formModel");
const app = express();
const router = express.Router();
const formController = require("../Controllers/formController");
router.route("/").post(formController.postform);
module.exports = router;
