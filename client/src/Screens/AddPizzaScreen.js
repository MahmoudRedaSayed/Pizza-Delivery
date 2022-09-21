import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addPizzaAction } from "../actions/PizzaActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from '../components/Success'
import {Link} from "react-router-dom";
export default function Addpizza() {
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const dispatch = useDispatch()

  const { success, error, loading } = useSelector(state => state.addPizza)
  function formHandler(e) {

    e.preventDefault();

    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallprice,
        medium: mediumprice,
        large: largeprice
      },
      varients: ["small", "medium", "large"]

    }
    setname("");
    setsmallprice("");
    setmediumprice("");
    setlargeprice("");
    setcategory("");
    setimage("");
    setdescription("");



    console.log(pizza);
    dispatch(addPizzaAction(pizza));

  }

  return (
    <div>
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
      <div className='text-left shadow-lg p-3 mb-5 bg-white rounded'>
        <h1>Add Pizza</h1>

        {loading && (<Loader />)}
        {error && (<Error data='Something went wrong' />)}
        {success && (<Success data='New Pizza added successfully' />)}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="small varient price"
            value={smallprice}
            onChange={(e) => {
              setsmallprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="medium varient price"
            value={mediumprice}
            onChange={(e) => {
              setmediumprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="large varient price"
            value={largeprice}
            onChange={(e) => {
              setlargeprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <button className='btn mt-3' type='submit'>Add Pizza</button>
        </form>
      </div>
    </div>
  );
}