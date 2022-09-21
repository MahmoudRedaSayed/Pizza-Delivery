import {GET_PIZZAS_REQUEST,
    GET_PIZZAS_SUCCESS,
    GET_PIZZAS_FAIL,
    ADD_PIZZA_REQUEST,
    ADD_PIZZA_SUCCESS,
    ADD_PIZZA_FAIL,
    EDIT_PIZZA_REQUEST,
    EDIT_PIZZA_SUCCESS,
    EDIT_PIZZA_FAIL,
    DELETE_PIZZA_REQUEST,
    DELETE_PIZZA_SUCCESS,
    DELETE_PIZZA_FAIL,
    GET_PIZZA_BY_ID_REQUEST,
    GET_PIZZA_BY_ID_SUCCESS,
    GET_PIZZA_BY_ID_FAIL} from "../constants/Pizza"

export const getAllPizzasReducer=( state={pizzas:[]} ,action)=>{
    switch(action.type){

        case GET_PIZZAS_REQUEST:return{
            loading:true,pizzas:[]
        }
        case GET_PIZZAS_SUCCESS:return{
            loading:false,pizzas:action.payload,
        }
        case GET_PIZZAS_FAIL:return{
            error:action.payload,loading:false
        }
        default: return {...state,loading:false}
    }
}


export const addPizzaReducer=(state={},action)=>
{
    switch(action.type){

        case ADD_PIZZA_REQUEST:return{
            loading:true
        }
        case ADD_PIZZA_SUCCESS:return{
            loading:false,success:true,
        }
        case ADD_PIZZA_FAIL:return{
            error:action.payload,loading:false
        }
        default: return {...state,loading:false}
    }
}

export const getPizzaByIdReducer=(state={},action)=>{
    switch(action.type)
    {
        case GET_PIZZA_BY_ID_REQUEST:
            return{
                loading:true
            }
        case GET_PIZZA_BY_ID_SUCCESS:
            return {
                loading:false,
                pizza:action.payload,
                success:false
            }
        case GET_PIZZA_BY_ID_FAIL:
            return{
                error:action.payload,
                success:false,
                loading:false
            }

        default:
            return state;
    }
}

export const editPizzaReducer=(state={},action)=>{
    switch(action.type)
    {
        case EDIT_PIZZA_REQUEST:
            return{
                editloading:true
            }
        case EDIT_PIZZA_SUCCESS:
            return {
                editloading:false,
                editsuccess:true
            }
        case EDIT_PIZZA_FAIL:
            return{
                editloading:false,
                editerror:action.payload
            }
        default: return  state
    }
}

export const deletePizzaReducer=(state={},action)=>
{
    switch(action.type)
    {
        case DELETE_PIZZA_REQUEST:
            return{
                loading:true
            }
        case DELETE_PIZZA_SUCCESS:
            return {
                loading:false,
                success:true
            }
        case DELETE_PIZZA_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default: return  state
    }
}