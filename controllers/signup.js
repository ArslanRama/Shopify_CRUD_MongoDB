/* const url = require("url");  */
const bcrypt = require('bcrypt')
const signUpForm = (req, res) => {
  res.render("signup");
};
const User = require("../models/UserSchema");
const signUpPost = async(req, res) => {
  const { name , email, password ,address, country,city_zip_code , salary, role} = req.body
  const newUser = new User({
    name, email , password ,address, country,city_zip_code, salary, role
  });
  const userData  = await User.findOne({email});
  /* req.check('email', 'your email address is Invalid').isEmail() */
    if(userData){
       return res.status(400).json({ Msg :"user already exist, try to login !!"}) 
       /* res.redirect(
        url.format({
          pathname: "/register",
          query: {
            Msg: "User-Email already exist, try to login !!"
          },
        })
      ); */
    }
  /* req.check('password', 'password did not match').isLength({min:6}).equal(req.body.confirmPassword)
    let errors = req.validationErrors()
    if(errors){
        req.session.errors = errors
    } */
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(password , salt )
  

  console.log("New user created:", newUser);
  newUser.save(() => {
    res.redirect("/login");
  });
};

module.exports = { signUpForm, signUpPost };