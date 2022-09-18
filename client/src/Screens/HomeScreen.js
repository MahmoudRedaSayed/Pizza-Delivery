import pizzas from "../4.1 pizzasdata"
import Pizza from "../components/Pizza"
import React from "react"
export default function HomeScreen(){

    return(
        <div className="row">
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