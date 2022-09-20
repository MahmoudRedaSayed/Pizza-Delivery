import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout"
import { placeOrderAction } from "../actions/Order";
export default function Checkout({subTotal}){
    const dispatch=useDispatch();
    const handleToken=(token)=>{
        console.log(token)
        dispatch(placeOrderAction(subTotal,token))
    }
    return (
        <div>
            <StripeCheckout
                token={handleToken}
                shippingAddress
                amount={subTotal*100}
                currency="INR"
                stripeKey="pk_test_51Lk44xDFJKV4Y7SsJGz17BGFxsuLOMyF91Hjs2DqPrlz85MScfEZ2JbMrtWTXxV3HvhTYvivFMjIZOGyqEURGCej00cm6b8fK8"
            >
                <button className="btn"> pay Now</button>
            </StripeCheckout> 
        </div>
    )
}