// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrders } from "../actions/Order";
// import Error from "../components/Error";
// import Loader from "../components/Loader";
// import {deleteUser, getAllUsers} from '../actions/userActions'
// export default function Userslist() {
//     const dispatch = useDispatch()
//   const {error , loading , users} = useSelector(state=>state.getAllUsers)
//     useEffect(() => {

//         dispatch(getAllUsers())
        
//     }, [])
//     return (
//         <div>

//             <h1>Users list</h1>
//             {loading && <Loader />}
//       {error && <Error data="Something went wrong" />}
//        <table className='table table-striped table-bordered table-responsive-sm'>
//            <thead className='thead-dark'>
//          <tr>
//              <th>User Id</th>
//              <th>Name</th>
//              <th>Email</th>
//              <th>Delete</th>
//          </tr>
//            </thead>

//            <tbody>
//                {users && users.map(user=>{
//                    return <tr>
//                        <td>{user._id}</td>
//                        <td>{user.name}</td>
//                        <td>{user.email}</td>
//                        <td><i className='fa fa-trash' onClick={()=>{dispatch(deleteUser(user._id))}}></i></td>
//                    </tr>
//                })}
//            </tbody>

//        </table>

//         </div>
//     )
// }