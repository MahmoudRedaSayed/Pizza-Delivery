const stripe=require("stripe")("sk_test_51Lk44xDFJKV4Y7Ss49FH6jZZh7uvHpMspYaLmhS9iyR9QUMUAzK0ldEooGrzV0gT99NMbhI98mY1dDzr0LVbAxLZ00K2ypxIJd")
const {v4:uuidv4}=require("uuid");
const Order=require("../models/Order")
const placeOrder=async(req,res)=>{
    const {token,user,subTotal,cartItems}=req.body
    try {
        const customer = await stripe.customers.create({
            email : token.email,
            source:token.id
        })
  
        const payment = await stripe.charges.create({
            amount:subTotal*100,
            currency:'inr',
            customer : customer.id,
            receipt_email : token.email
        }, {
            idempotencyKey : uuidv4()
        })
  
        if(payment)
        {
           
            const neworder = new Order({
                name : user.name,
                email : user.email ,
                userid : user._id ,
                orderItems : cartItems , 
                orderAmount : subTotal,
                shippingAddress : {
                    street : token.card.address_line1,
                    city : token.card.address_city,
                    country : token.card.address_country,
                    pincode : token.card.address_zip
                },
                transactionId : payment.source.id
            })
            
            neworder.save()
  
            res.send('Order placed successfully')
        }
        else{
            res.send('Payment failed')
        }
  
    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' + error});
    }
  
}
const getUserOrders=async(req, res) => {
    const userid = req.params.id;
    console.log(userid)
    try {
        const orders = await Order.find({userid : userid}).sort({_id : -1})
        console.log(orders)
        res.json(orders)
    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' });
    }
  }
module.exports={placeOrder,getUserOrders}