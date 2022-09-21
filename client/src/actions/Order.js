import {
    PLACE_ORDER_FAIL,
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    DELIVER_ORDER_FAIL,
    DELIVER_ORDER_REQUEST,
    DELIVER_ORDER_SUCCESS,
    GET_USER_ORDERS_FAIL,
    GET_USER_ORDERS_REQUEST,
    GET_USER_ORDERS_SUCCESS,
    GET_ALL_ORDERS_FAIL,
    GET_ALL_ORDERS_REQUEST,
    GET_ALL_ORDERS_SUCCESS
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
        dispatch({type:GET_USER_ORDERS_FAIL,payload:error})
    }
}

export const getAllOrdersAction=()=>async(dispatch,getState)=>{
    const user=getState().loginUser.user;
    try{
        if(user.Admin)
        {
            dispatch({type:GET_ALL_ORDERS_REQUEST})
            const config={
                headers: {
                    Authorization:`${user.Admin}`,
                  },
            }
            const response=await axios.get(`http://localhost:5000/api/orders`,config)
            dispatch({type:GET_ALL_ORDERS_SUCCESS,payload:response.data})
            
        }
        else
        {
            throw Error("Access denied");
            window.location.href="/";
        }
    }
    catch(error)
    {
        dispatch({type:GET_ALL_ORDERS_SUCCESS,payload:error})
    }
}

export const deliverOrderAction=(id)=>async(dispatch,getState)=>
{
    const user=getState().loginUser.user;
    try{
    if(user.Admin)
        {
            dispatch({type:DELIVER_ORDER_REQUEST})
            const config={
                headers: {
                    Authorization:`${user.Admin}`,
                  },
            }
            const response=await axios.put(`http://localhost:5000/api/orders/${id}`,{},config)
            dispatch({type:DELIVER_ORDER_SUCCESS})
            console.log(response);
            dispatch(getAllOrdersAction())

        }
        else
        {
            window.location.href="/";
            throw Error("Access denied");
        }
    }
    catch(error)
    {
        dispatch({type:DELIVER_ORDER_FAIL,payload:error})
    }
}