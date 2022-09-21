import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { deleteUserAction, getAllUsersAction } from '../actions/User'
import {Link} from "react-router-dom";
export default function Userslist() {
    const dispatch = useDispatch()
    const { error, loading, users } = useSelector(state => state.getAllUsers)
    useEffect(() => {

        dispatch(getAllUsersAction())

    }, [])
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

            <h1>Users list</h1>
            {loading && <Loader />}
            {error && <Error data="Something went wrong" />}
            <table className='table table-striped table-bordered table-responsive-sm'>
                <thead className='thead-dark'>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {users && users.map(user => {
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><i className='fa fa-trash' onClick={() => { dispatch(deleteUserAction(user._id)) }}></i></td>
                        </tr>
                    })}
                </tbody>

            </table>

        </div>
    )
}