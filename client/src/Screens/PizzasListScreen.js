import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePizza, getAllPizzas } from "../actions/PizzaActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
export default function Pizzaslist() {
  const dispatch = useDispatch();

  const { pizzas, error, loading } = useSelector((state) => state.getAllPizzas);

  useEffect(() => {
    dispatch(getAllPizzas());
    
  }, []);
  return <div>
    <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

<ul className="adminfunctions">
    <li>
        <Link to={'/admin/userslist'} style={{ color: 'white' }}>Users List</Link>
    </li>
    <li>
        <Link to={'/admin/pizzaslist'} style={{ color: 'white' }}>Pizzas List</Link>
    </li>
    <li>
        <Link to={'/admin/addpizza'} style={{ color: 'white' }}>Add Pizza</Link>
    </li>
    <li>
        <a href={'/admin/orderslist'} style={{ color: 'white' }}>Orders List</a>
    </li>
</ul>
    <h2>Pizzas List</h2>
    {loading && (<Loader/>)}
    {error && (<Error data='Something went wrong'/>)}

    <table  className='table table-bordered table-responsive-sm'>

        <thead className='thead-dark'>
            <tr>
                <th>Name</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {pizzas && pizzas.map(pizza=>{

            return <tr>
                <td>{pizza.name}</td>
                <td>

                   Small : {pizza.prices[0]['small']} <br/>
                   Medium : {pizza.prices[0]['medium']} <br/>
                   Large : {pizza.prices[0]['large']}
                    
                </td>
                <td>{pizza.category}</td>
                <td>
                    <i className='fa fa-trash m-1' onClick={()=>{dispatch(deletePizza(pizza._id)); }}></i>
                    <Link to={`/admin/editpizza/${pizza._id}`}><i className='fa fa-edit m-1'></i></Link>
                </td>

            </tr>

        })}
        </tbody>

    </table>

   
  </div>;
}