import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {Link } from "react-router-dom"  
import { logoutUserAction } from "../actions/User"
export default function NavBar(){
  const cartState=useSelector(state=>state.addToCart)
  const {user}=useSelector(state=>state.loginUser);
  const dispatch=useDispatch();
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-5 bg-body rounded">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto">
        {user?
          (<div><a className="nav-link " aria-current="page" onClick={()=>dispatch(logoutUserAction())}>logout</a>
          <a className="nav-link " aria-current="page" href="/login">orders</a></div>):
        (<a className="nav-link " aria-current="page" href="/login">Login</a>)
        }
        
        <a className="nav-link" href="/Cart">Cart <span style={{color:cartState.cartItems.length?"red":"black"}}>{cartState.cartItems.length}</span></a>
      </div>
    </div>
  </div>
</nav>
    )
}