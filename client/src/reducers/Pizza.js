import {GET_PIZZAS_REQUEST,GET_PIZZAS_SUCCESS,GET_PIZZAS_FAIL} from "../constants/Pizza"

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
