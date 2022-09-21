import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserAction } from "../actions/User";
import Loader from "../components/Loader";
import Error from "../components/Error";
export default function LoginScreen(){
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const dispatch=useDispatch();
    const loginUser=useSelector(state=>state.loginUser)
    const{user,loading,success,error}=loginUser;
    const navigate=useNavigate()
    useEffect(()=>{
        if(user)
        {
            navigate("/")
        }
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        const user={
            email,
            password
        }
        dispatch(loginUserAction(user))
        console.log(user)
    }
    return(
        <div className="row justify-content-center items-center login">
            {loading?(<Loader></Loader>):""}
            {error?(<Error data="error in data"></Error>):""}
            <h1>Login</h1>
            <form className="col-md-5 m-5" onSubmit={handleSubmit} >
                <input required onChange={(e)=>{setEmail(e.target.value)}} className="form-control m-2 pd-2" type={"email"} placeholder="email"/>
                <input  required  onChange={(e)=>{setPassword(e.target.value)}} className="form-control m-2 pd-2"  type={"password"} placeholder="password"/>
                <button type="submit" className="btn m-2">Login</button>
            </form>
            <div> <a style={{textDecoration:"none"}} href="/register">Click here to register</a></div>
        </div>
    )
}