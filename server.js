const express=require("express")
const cors=require("cors")
const ConnectDB=require("./config/db")
const PizzaRouter=require("./Routes/Pizza")
const UserRouter=require("./Routes/User")
const OrderRouter=require("./Routes/Order")
const app=express()
app.use(cors());
app.use(express.json());
app.listen(5000,()=>{
    ConnectDB();
    console.log("the server is on")
})
app.use("/api/pizzas",PizzaRouter);
app.use("/api/users",UserRouter);
app.use("/api/orders",OrderRouter);
