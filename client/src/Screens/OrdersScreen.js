import React , {useState, useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { getUserOrdersAction } from '../actions/Order'
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from '../components/Success'
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css"
export default function OrdersScreen() {
    AOS.init();
    const dispatch = useDispatch()
    const orderstate = useSelector(state=>state.getUserOrders)
    const {orders , error , loading,success} = orderstate
    const {user} = useSelector(state=>state.loginUser)

    useEffect(() => {
        if(user)
        {
            dispatch(getUserOrdersAction())
        }
        else
        window.location.href="/login"
    }, [])

    return (
        <div>
            <h2 style={{fontSize:'35px'}}>My Orders</h2>
            <hr/>
            <div className="row justify-content-center">
                {loading && (<Loader/>)}
                {error && (<Error data='Something went wrong'/>)}
                {success&&orders && orders.map(order=>{
                    return <div data-aos="fade-down" key={order._id} className="col-md-8 m-2 p-1" data-aos='fade-down'  style={{backgroundColor:'red' , color:'white'}}>
                            <div key={order._id} className="flex-container">
                                <div className='text-left w-100 m-1'>
                                    <h2 style={{fontSize:'25px'}}>Items</h2>
                                    <hr/>
                                    {order.orderItems.map(item=>{
                                        return <div>
                                            <p>{item.name} [{item.varient}] * {item.quantity} = {item.price}</p>
                                        </div>
                                    })}
                                </div>
                                <div className='text-left w-100 m-1'>
                                   
                                <h2 style={{fontSize:'25px'}}>Address</h2>
                                <hr/>
                                <p>Street : {order.shippingAddress.street}</p>
                                <p>City : {order.shippingAddress.city}</p>
                                <p>Country : {order.shippingAddress.country}</p>
                                <p>Pincode : {order.shippingAddress.pincode}</p>
                                </div>
                                <div className='text-left w-100 m-1'>
                                <h2 style={{fontSize:'25px'}}>Order Info</h2>
                                <hr/>
                                <p>Order Amount : {order.orderAmount}</p>
                                <p>Date : {order.createdAt.substring(0,10)}</p>
                                <p>Transaction Id : {order.transactionId}</p>
                                <p>Order Id : {order._id}</p>
                                </div>
                            </div>

                    </div>
                })}
            </div>
        </div>
    )
}