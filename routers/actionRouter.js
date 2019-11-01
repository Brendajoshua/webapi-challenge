const express = require("express");

//import database
const projectDb = require("../data/helpers/projectModel");
const actionDb = require("../data/helpers/actionModel");

//import middleware
const validateProjectid = require("../middleware/validateProjectID");

const router = express.Router();

module.exports = router;