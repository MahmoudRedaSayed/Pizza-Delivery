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
export const placeOrderReducer=(state={} ,action)=>
{
    switch(action.type)
    {
        case PLACE_ORDER_REQUEST:
            return{
                loading:true
            }
        case PLACE_ORDER_SUCCESS:
            return{loading:false,success:true}
        case PLACE_ORDER_FAIL:
            return {
                loading:false,error:action.payload
            }
    default: return state
    }
}

export const getUserOrdersReducer=(state={} ,action)=>
{
    switch(action.type)
    {
        case GET_USER_ORDERS_REQUEST:
            return{
                loading:true
            }
        case GET_USER_ORDERS_SUCCESS:
            return{loading:false,success:true,orders:action.payload}
        case GET_USER_ORDERS_FAIL:
            return {
                loading:false,error:action.payload
            }
    default: return state
    }
}


export const getAllOrdersReducer=(state={},action)=>
{
    switch(action.type)
    {
        case GET_ALL_ORDERS_REQUEST:
            return {
                loading:true
            }
        case GET_ALL_ORDERS_SUCCESS:
            return {
                loading:false,
                success:true,
                orders:action.payload
            }
        case GET_ALL_ORDERS_FAIL:
            return {
                loading:false,
                success:false,
                error:action.payload
            }
        default: return state
    }
}

export const deliverOrderReducer=(state={},action)=>{
    switch(action.type)
    {
        case DELIVER_ORDER_REQUEST:
            return {
                loading:true
            }
        case DELIVER_ORDER_SUCCESS:
            return {
                loading:false,
                success:true,
            }
        case DELIVER_ORDER_FAIL:
            return {
                loading:false,
                success:false,
                error:action.payload
            }
        default: return state
    }
}