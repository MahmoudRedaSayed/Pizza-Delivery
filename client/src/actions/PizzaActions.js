import axios from "axios"
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

export const addPizzaAction=(pizza)=>async (dispatch,getState)=>{
    try{
        const user=getState().loginUser.user;
        if(user.Admin)
        {
            dispatch({type:ADD_PIZZA_REQUEST})
            const config={
                headers: {
                    Authorization:`${user.Admin}`,
                },
            }
            const response=await axios.post("http://localhost:5000/api/pizzas",{pizza},config);
            console.log(response)
            dispatch({type:ADD_PIZZA_SUCCESS})
        }
        else
        {
            window.location.href="/";
        }

        
    }
    catch(error)
    {
        dispatch({type:ADD_PIZZA_FAIL,payload:error})
    }
}
export const deletePizza=(id)=>async (dispatch,getState)=>{
    try{
        const user=getState().loginUser.user;
        if(user.Admin)
        {
            dispatch({type:DELETE_PIZZA_REQUEST})
            const config={
                headers: {
                    Authorization:`${user.Admin}`,
                },
            }
            const response=await axios.delete(`http://localhost:5000/api/pizzas/${id}`,config);
            console.log(response)
            dispatch({type:DELETE_PIZZA_SUCCESS})
            dispatch(getAllPizzas());
        }
        else
        {
            window.location.href="/";
        }
    }
    catch(error)
    {
        dispatch({type:DELETE_PIZZA_FAIL,payload:error})

    }

}

export const getPizzaById=(id)=>async (dispatch,getState)=>{
    try{
        const user=getState().loginUser.user;
        if(user.Admin)
        {
            dispatch({type:GET_PIZZA_BY_ID_REQUEST})
            const config={
                headers: {
                    Authorization:`${user.Admin}`,
                },
            }
            const response=await axios.get(`http://localhost:5000/api/pizzas/${id}`,config);
            console.log(response)
            dispatch({type:GET_PIZZA_BY_ID_SUCCESS,payload:response.data})
        }
        else
        {
            window.location.href="/";
        }

        
    }
    catch(error)
    {
        dispatch({type:GET_PIZZA_BY_ID_FAIL,payload:error})
    }

}


export const editPizza=(pizza)=>async(dispatch,getState)=>{
    try{
        const user=getState().loginUser.user;
        if(user.Admin)
        {
            dispatch({type:EDIT_PIZZA_REQUEST})
            const config={
                headers: {
                    Authorization:`${user.Admin}`,
                },
            }
            const response=await axios.put(`http://localhost:5000/api/pizzas`,{pizza},config);
            console.log(response)
            dispatch({type:EDIT_PIZZA_SUCCESS})
        }
        else
        {
            window.location.href="/";
        }
    }
    catch(error)
    {
        dispatch({type:EDIT_PIZZA_FAIL,payload:error})

    }
}