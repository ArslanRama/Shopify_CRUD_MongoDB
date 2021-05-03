const express = require("express");
const router = express.Router();
const loginController = require("../controllers/login");

router.get("/", loginController.loginForm);
router.post("/", loginController.loginWithUser);
//! Login Admin
router.get("/admin", loginController.adminLoggedIn);
//! createUserAdmin
router.post("/admin", loginController.createNewUser);


//! DeleteUser Admin
router.get("/admin/delete/:id", loginController.deleteUser);
//! Login User
router.get("/user", loginController.loginUser);
//! Add Product User
router.post("/user", loginController.addProduct);
//! Update Product User
router.get("/user/update/:id", loginController.updateProduct);
//! Delete Product User
router.get("/user/delete/:id", loginController.deleteProduct);
module.exports = router;