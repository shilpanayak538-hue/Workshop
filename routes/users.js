const express = require("express");
const {createUser, getAllUsers,getUserById,updateUser,deleteUser}= require("../controllers/userController");


const router = express.Router();


// POST /api/users - Create a new user
router.post("/", createUser);
router.get("/",getAllUsers);
router.get("/:id",getUserById);
// PUT /api/users/:id - Update user by ID
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
// PATCH update user
router.patch("/:id", updateUser);


module.exports=router;