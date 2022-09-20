import {
        PLACE_ORDER_FAIL,
        PLACE_ORDER_REQUEST,
        PLACE_ORDER_SUCCESS
        }from "../constants/Order";
import axios from "axios";
export const placeOrderAction=(subTotal,token)=>async(dispatch,getState)=>{
    const user=getState().loginUser.user;
    const cartItems=getState().addToCart.cartItems;

    try{
        dispatch({type:PLACE_ORDER_REQUEST})
        const response=await axios.post("http://localhost:5000/api/orders/placeorder",{subTotal,token,user,cartItems})
        dispatch({type:PLACE_ORDER_SUCCESS})
        console.log(response);
    }
    catch(error)
    {
        dispatch({type:PLACE_ORDER_SUCCESS,payload:error})
    }
}