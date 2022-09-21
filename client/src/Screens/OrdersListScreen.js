import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrderAction,getAllOrdersAction } from "../actions/Order";
import {Link} from "react-router-dom"
import Error from "../components/Error";
import Loader from "../components/Loader";
export default function Orderslist() {
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector((state) => state.getAllOrders);
  useEffect(() => {
    dispatch(getAllOrdersAction());
  }, []);
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
      {loading && <Loader />}
      {error && <Error data="Something went wrong" />}
      <table className="table table-striped table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.userid}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>
                    {order.isDelivered ? (
                      <h1>Delivered</h1>
                    ) : (
                      <button className="btn" onClick={()=>{dispatch(deliverOrderAction(order._id)); }} >Deliver</button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}