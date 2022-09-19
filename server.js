const express=require("express")
const ConnectDB=require("./config/db")
const app=express()
app.listen(5000,()=>{
    ConnectDB();
    console.log("the server is on")
})