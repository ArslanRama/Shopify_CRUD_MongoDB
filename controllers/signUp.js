const url = require("url");
const signUpForm = (req, res) => {
  res.render("signUpForm");
};
const User = require("../models/UserSchema");
const signUpPost = (req, res) => {
  const newUser = new User(req.body);
  console.log("New user created:", newUser);
  newUser.save(() => {
    res.redirect("/login");
  });
};

module.exports = { signUpForm, signUpPost };