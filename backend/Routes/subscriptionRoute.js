const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const formModel = require("../Models/formModel");
const app = express();
const router = express.Router();
const subscriptionController = require("../Controllers/subscriptionController");
router.route("/").post(subscriptionController.postsubscription);
module.exports = router;
