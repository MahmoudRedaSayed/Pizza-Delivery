const express=require("express");
const { registerUser,loginUser,getAllUsers,deleteUser } = require("../Controllers/User");
const {admin}=require("../Middleware/isAdmin")
const router=express.Router();
router.post("/register",registerUser);
router.post("/login",loginUser);
router.route("/").get(admin,getAllUsers)
router.route("/:id").delete(admin,deleteUser);
module.exports=router;