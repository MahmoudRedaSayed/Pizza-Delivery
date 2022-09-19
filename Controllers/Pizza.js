const Pizza=require("../models/Pizza");
const getAllPizzas=async(req,res)=>{
    try{
         const pizzas=await Pizza.find({});
         res.json(pizzas);
    }
    catch(error)
    {
        res.status(400).send("error in data");
    }
}

module.exports={getAllPizzas}