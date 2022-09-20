const express=require("express");
const router=express.Router();
const {placeOrder,getUserOrders}=require("../Controllers/Order");
router.post("/placeorder",placeOrder)
router.get("/:id",getUserOrders);
module.exports=router;