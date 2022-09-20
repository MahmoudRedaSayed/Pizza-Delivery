const mongoose = require("mongoose");

const order= mongoose.Schema({
    name : {type: String , require},
    email: {type: String , require},
    userid : {type: String , require},
    orderItems : [],
    shippingAddress : {type:Object},
    orderAmount : {type:Number , require},
    isDelivered : {type:Boolean , require , default: false},
    transactionId : {type:String , require}
},{
    timestamps : true
})

const Order = mongoose.models?.Order || mongoose.model('Order', order);
module.exports=Order;