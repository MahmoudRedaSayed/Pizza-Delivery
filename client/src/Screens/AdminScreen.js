import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes,BrowserRouter as Router } from "react-router";
import { Link } from "react-router-dom";

import Addpizza from "./AddPizzaScreen";
import Editpizza from "./EditPizzaScreen";
import Orderslist from "./OrdersListScreen";
import Pizzaslist from "./PizzasListScreen";
import Userslist from "./UsersListScreen";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUser);
  const { user } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.Admin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

          <ul className="adminfunctions">
            <li>
              <Link to={'/admin/userslist'} style={{color: 'white'}}>Users List</Link>
            </li>
            <li>
            <Link to={'/admin/pizzaslist'} style={{color: 'white'}}>Pizzas List</Link>
            </li>
            <li>
            <Link to={'/admin/addpizza'} style={{color: 'white'}}>Add Pizza</Link>
            </li>
            <li>
            <a href={'/admin/orderslist'} style={{color: 'white'}}>Orders List</a>
            </li>

            
          </ul>
        </div>
      </div>
    </div>
  );
}