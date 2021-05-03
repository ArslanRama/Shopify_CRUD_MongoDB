const express = require("express");
const router = express.Router();
const login = require("../controllers/login");

router.get("/", login.loginForm);
router.post("/", login.loginWithUser);
//! Login Admin "R"
router.get("/admin", login.adminLoggedIn);

//! createUserAdmin "C"
router.post("/admin", login.createNewUser);
//! Update User Admin "U"
router.get("/admin/update/:id", login.updateUser1);
//! updated user by admin "U"
router.post("/admin/update/:id", login.updatedUser);
//! DeleteUser Admin "D"
router.get("/admin/delete/:id", login.deleteUser);
//! Login User "R"
router.get("/user", login.loginUser);
//! Add Product User "C"
router.post("/user", login.addProduct);
//! Update Product User "U"
router.get("/user/update/:id", login.updateProduct1);
//! UpdateD Product User "U"
router.post("/user/update/:id", login.updatedProduct);
//! Delete Product User "D"
router.get("/user/delete/:id", login.deleteProduct);
module.exports = router;