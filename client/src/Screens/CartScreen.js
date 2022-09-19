import React from "react"
import { useDispatch,useSelector } from "react-redux"
export default function CartScreen(){
    const dispatch=useDispatch()
    const cartState=useSelector(state=>state.addToCart)
    const {cartItems}=cartState;
    return <div className="row">
        <div className='col-md-6'>
            <h2 className="text-center" style={{fontSize:"40px"}}>My Cart</h2>
            <hr></hr>
            {
                cartItems.map(item=>(
                    <>
                    <div className=" flex-container text-left"  style={{dispaly:'flex' , padding:"10px"}}>
                        <div className=" m-1 w-200">
                            <p>{item.name} [{item.varient}]</p>
                            <p>price: {item.quantity }*{item.prices[0][item.varient]}={item.price}</p>
                            <p style={{display:"inline"}}>Quantity</p>
                            <i className="fa-solid fa-plus"></i>
                            <b>{item.quantity}</b>
                            <i className="fa-solid fa-minus"></i>
                            <hr></hr>

                        </div>
                        <div className="m-1 w-25">
                            <img src={item.image} style={{height:"80px",width:"80px"}}></img>
                        </div>
                        <div className="m-1 w-25">
                        <i className="fa-solid fa-trash m-5"></i>
                        </div>
                    </div>
                    </>
                ))
            }
        </div>
        <div className='col-md-4'></div>
        
    </div>
}