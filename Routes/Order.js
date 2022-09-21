const express=require("express");
const router=express.Router();
const {admin}=require("../Middleware/isAdmin");
const {placeOrder,getUserOrders,getAllOrders,deliverOrder}=require("../Controllers/Order");
router.post("/placeorder",placeOrder)
router.route("/:id").get(getUserOrders).put(admin,deliverOrder);
router.route("/").get(admin,getAllOrders)
module.exports=router;