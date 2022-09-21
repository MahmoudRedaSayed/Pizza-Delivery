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

const addPizza=async(req,res)=>{
    const {pizza}=req.body;
    console.log(pizza);
    try{
        const addedPizza=await Pizza.create(pizza);
        if(addedPizza)
        {
            res.status(200).json("pizza added successfully");
        }
        else
        {
            res.status(400).json("error in server");
        }
    }
    catch(error)
    {
        res.status(400).send("error in data");
    }
}
const getPizzaById=async(req,res)=>{
    try{
        const {id}=req.params;
        const pizza=await Pizza.findById(id);
        if(pizza)
        {
            res.status(200).json(pizza);
        }
        else
        {
            res.status(404).json("not found")
        }
    }
    catch(error)
    {
        res.status(400).send("error in data");
    }
}

const editPizza=async(req,res)=>{
    try{
        const {pizza}=req.body;
        const editedPizza=await Pizza.findByIdAndUpdate(pizza._id,{...pizza});
        if(editedPizza)
        {
            console.log("edited",editedPizza)
            res.status(200).json(editedPizza);
        }
        else
        {
            res.status(404).json("not found")
        }
    }
    catch(error)
    {
        res.status(400).send("error in data");
    }
}
const deletePizza=async(req,res)=>
{
    try{
        const {id}=req.params;
        await Pizza.findByIdAndDelete(id);
        res.status(200).json("deleted")

    }
    catch(error)
    {
        res.status(400).send("error in data");
    }
}
module.exports={getAllPizzas,addPizza,getPizzaById,editPizza,deletePizza}