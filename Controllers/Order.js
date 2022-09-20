const stripe=require("stripe")("sk_test_51Lk44xDFJKV4Y7Ss49FH6jZZh7uvHpMspYaLmhS9iyR9QUMUAzK0ldEooGrzV0gT99NMbhI98mY1dDzr0LVbAxLZ00K2ypxIJd")
const {v4:uuidv4}=require("uuid");
const placeOrder=async(req,res)=>{
    try{
        const {token,user,subTotal,cartItems}=req.body
        const idempontencyKey = uuidv4()
        return stripe.customers.create({
            email: token.email,
            source: token.id
        })
            .then(customer => {
                stripe.charges.create(
                    {
                        amount:(subTotal*100),
                        currency:"inr",
                        customer:customer.id,
                        receipt_email:token.email
                    }, { idempontencyKey:idempontencyKey})
            })
            .then(result => res.status(200).json("payment done"))
            .catch(err => res.status(400).json(err))
    }
    catch(error){
        res.status(400).send("error in server"+error);
    }   
}
module.exports={placeOrder}