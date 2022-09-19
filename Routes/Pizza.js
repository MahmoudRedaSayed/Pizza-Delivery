const express=require("express")
const {getAllPizzas}=require("../Controllers/Pizza")
const router=express.Router();
router.get("/",getAllPizzas)
module.exports= router;