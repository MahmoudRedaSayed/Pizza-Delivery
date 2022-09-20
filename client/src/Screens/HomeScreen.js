// import pizzas from "../4.1 pizzasdata"
import Pizza from "../components/Pizza"
import React, { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { getAllPizzas } from "../actions/PizzaActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
export default function HomeScreen(){
    const pizzasState = useSelector((state) => state.getAllPizzas);
    const{pizzas,error,loading}=pizzasState
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllPizzas())
    },[dispatch])

    return(
        loading?(<Loader></Loader>):
        error?(<Error data="something is wrong"></Error>)
        :<div className="row">
            {
                pizzas.map(pizza=>(
                    <div className="col-md-4" key={pizza.name}>
                        <div>
                            <Pizza pizza={pizza}></Pizza>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}