const express=require("express")
const cors=require("cors")
const ConnectDB=require("./config/db")
const PizzaRouter=require("./Routes/Pizza")
const app=express()
app.use(cors());
app.use(express.json());
app.listen(5000,()=>{
    ConnectDB();
    console.log("the server is on")
})
app.use("/api/pizzas",PizzaRouter);
