const express=require("express");
const router=express.Router();
const {placeOrder}=require("../Controllers/Order");
router.post("/placeorder",placeOrder)
module.exports=router;