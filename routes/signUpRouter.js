const express = require("express");
const router = express.Router();
const signUpController = require("../controllers/signUp");
router.get("/", signUpController.signUpForm);
router.post("/", signUpController.signUpPost);
module.exports = router;