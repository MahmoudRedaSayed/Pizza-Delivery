import React, { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { addToCartAction,deleteFromCartAction } from "../actions/CartActions"
import Checkout from "../components/Checkout"
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css"
export default function CartScreen(){
    AOS.init();
    const dispatch=useDispatch()
    const cartState=useSelector(state=>state.addToCart)
    const {cartItems}=cartState;
    const subTotal=cartItems.reduce((x,item)=>x+item.price,0);
    return <div data-aos="fade-down" className="row">
        <div className='col-md-6'>
            <h2 className="text-center" style={{fontSize:"40px"}}>My Cart</h2>
            <hr></hr>
            {
                cartItems.map(item=>(
                    <div key={item._id} className=" flex-container text-left"  style={{dispaly:'flex' , padding:"10px"}}>
                        <div className=" m-1 w-200">
                            <p>{item.name} [{item.varient}]</p>
                            <p>price: {item.quantity }*{item.prices[0][item.varient]}={item.price}</p>
                            <p style={{display:"inline"}}>Quantity</p>
                            <i className="fa-solid fa-plus" onClick={()=>{dispatch(addToCartAction(item,item.varient,item.quantity+1))}}></i>
                            <b>{item.quantity}</b>
                            <i className="fa-solid fa-minus" onClick={()=>{dispatch(addToCartAction(item,item.varient,item.quantity-1))}}></i>
                            <hr></hr>

                        </div>
                        <div className="m-1 w-25">
                            <img src={item.image} style={{height:"80px",width:"80px"}}></img>
                        </div>
                        <div className="m-1 w-25" onClick={()=>{dispatch(deleteFromCartAction(item))}}>
                        <i className="fa-solid fa-trash m-5"></i>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='col-md-4'>
            <span style={{fontSize:"45px" , display :'block'}}>SubTotal : {subTotal}/_ EG</span>
            <Checkout subTotal={subTotal}></Checkout>
        </div>
        
    </div>
}