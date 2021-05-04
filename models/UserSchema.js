const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
        type: String,
        required : [true, 'Name is required ..!!'],
        minLength: [2, 'Name must be at least 2 characters'],
        maxLength:[66 , 'Name must be less than 66 chars']
  },
  email: {
        type: String,
        required : [true, 'Email is required ..!!'],
  },
  password: {
        type: String,
        required : [true, 'password is required ..!!'],
        minLength: 6
  },
  country: String,
  address: String,
  zip: String,
  salary: Number,
  role: String,
});
// Custom validation for email
userSchema.path('email').validate((val) => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, 'Invalid e-mail.');

const User = mongoose.model("User", userSchema);
module.exports = User;