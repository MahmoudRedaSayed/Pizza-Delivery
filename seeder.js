const Pizza =require("./models/Pizza");
const ConnectDB=require("./config/db");
const pizzas=require("./data/pizza")


const importData=async ()=>{
    try{
        ConnectDB();
       await Pizza.deleteMany();


        const createdPizzas=await Pizza.insertMany(pizzas);

        console.log("the data is imported");      
        process.exit();  
    }
    catch(error){
        console.log(error.message);
    }
}

const destroyData=async ()=>{
    try{
       await Pizza.deleteMany();


        console.log("the data is destroied");      
        process.exit();  
    }
    catch(error){
        console.log(error.message);
    }
}

if(process.argv[2]==="-d")
{
    destroyData();
}
else{
    importData();
}


