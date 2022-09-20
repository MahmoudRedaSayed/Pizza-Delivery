import axios from "axios"
import {GET_PIZZAS_REQUEST,GET_PIZZAS_SUCCESS,GET_PIZZAS_FAIL} from "../constants/Pizza"

export const getAllPizzas=()=>async (dispatch,getState)=>{
    try{
        dispatch({type:GET_PIZZAS_REQUEST})
        const response=await axios.get("http://localhost:5000/api/pizzas");
        console.log(response)
        console.log("here")
        dispatch({type:GET_PIZZAS_SUCCESS,payload:response.data})
        console.log(getState().getAllPizzas.pizzas)
        console.log(getState().getAllPizzas.loading)
    }
    catch(error)
    {
        dispatch({type:GET_PIZZAS_FAIL,payload:error})
    }
}

export const filterPizzasAction=(searchkey , category)=>async dispatch=>{

  
    dispatch({type:'GET_PIZZAS_REQUEST'})

    try {
        var filteredPizzas ;
        const response = await axios.get('http://localhost:5000/api/pizzas')
        filteredPizzas = response.data.filter(pizza=>pizza.name.toLowerCase().includes(searchkey.toLowerCase()))
         
        if(category!='all')
        {
            filteredPizzas = response.data.filter(pizza=>pizza.category.toLowerCase()==category)

        }
        dispatch({type:'GET_PIZZAS_SUCCESS' , payload : filteredPizzas})
    } catch (error) {
        dispatch({type:'GET_PIZZAS_FAILED' , payload : error})
    }

}