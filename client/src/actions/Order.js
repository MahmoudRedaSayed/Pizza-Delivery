import {
    PLACE_ORDER_FAIL,
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    GET_USER_ORDERS_FAIL,
    GET_USER_ORDERS_REQUEST,
    GET_USER_ORDERS_SUCCESS
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
export const getUserOrdersAction=()=>async(dispatch,getState)=>{
    const user=getState().loginUser.user;
    const userid=user._id;
    try{
        dispatch({type:GET_USER_ORDERS_REQUEST})
        const response=await axios.get(`http://localhost:5000/api/orders/${userid}`)
        dispatch({type:GET_USER_ORDERS_SUCCESS,payload:response.data})
        console.log(response);
    }
    catch(error)
    {
        dispatch({type:GET_USER_ORDERS_SUCCESS,payload:error})
    }
}