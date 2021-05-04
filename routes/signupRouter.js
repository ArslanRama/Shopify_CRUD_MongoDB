const express = require("express");
const router = express.Router();
const signupController = require("../controllers/signup");
router.get("/", signupController.signUpForm);
router.post("/", signupController.signUpPost);
module.exports = router;