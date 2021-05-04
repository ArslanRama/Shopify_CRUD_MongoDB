const express = require("express");
const router = express.Router();
const login = require("../controllers/login");

router.get("/", login.loginForm);
router.post("/", login.loginUser);

//! ADMIN
router.get("/admin", login.loginAdmin);

// Create a New user  
router.post("/admin", login.createNewUser);

// Update User 
router.get("/admin/update/:id", login.updateUser);

// Updated User
router.post("/admin/update/:id", login.updatedUser);

// Delete User 
router.get("/admin/delete/:id", login.deleteUser);

//! USER
router.get("/user", login.loginUserAccount);

// Add Product 
router.post("/user", login.addProduct);

// Update Product
router.get("/user/update/:id", login.updateProduct);

// Updated Product
router.post("/user/update/:id", login.updatedProduct);

// Delete Product
router.get("/user/delete/:id", login.deleteProduct);

module.exports = router;