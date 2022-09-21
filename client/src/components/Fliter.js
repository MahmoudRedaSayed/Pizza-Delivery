import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizzasAction } from "../actions/PizzaActions";
export default function Filter() {
    const dispatch = useDispatch()
    const[searchkey , setsearchkey] = useState('')
    const[category , setcategory] = useState('all')
    return (
        <div className="container" style={{padding:"0 100px",marginBottom:"50px"}}>
            <div className="row  justify-content-center shadow-lg p-3 mb-5 bg-white rounded" style={{alignItems:"center"}}>

                    <div className=" col-md-3 w-30">
                      <input
                      onChange={(e)=>{setsearchkey(e.target.value)}}
                      value={searchkey} type="text" className="form-control w-100" placeholder="search pizzas"/>
                    </div>
                    <div className="col-md-3 w-30">
                        <select className="form-control w-100 " value={category} onChange={(e)=>setcategory(e.target.value)}>
                            <option value="all">All</option>
                            <option value="veg">Veg</option>
                            <option value="nonveg">Non Veg</option>
                        </select>
                    </div>
                    <div className="col-md-3 w-30">
                       <button className='btn w-100 ' onClick={()=>{dispatch(filterPizzasAction(searchkey,category))}} >FILTER</button>
                    </div>

            </div>
        </div>
    )
}