const mongoose =require("mongoose")
const pizzaSchema=mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
    prices:[],
    varients:[]
},{
    timestamps:true
})

const Pizza = mongoose.models?.Pizza || mongoose.model('Pizza', pizzaSchema);
module.exports=Pizza;