const express=require("express")
const {admin}=require("../Middleware/isAdmin")
const {getAllPizzas,addPizza,getPizzaById,editPizza,deletePizza}=require("../Controllers/Pizza")
const router=express.Router();
router.route("/").get(getAllPizzas).post(admin,addPizza).put(admin,editPizza)
router.route("/:id").get(admin,getPizzaById).delete(admin,deletePizza)
module.exports= router;