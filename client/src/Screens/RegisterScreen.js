import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUserAction } from "../actions/User";
import Error from "../components/Error";
import Loader from "../components/Loader";
export default function RegisterScreen(){
    const [name,setName]=useState();
    const [password,setPassword]=useState();
    const [cpassword,setCpassword]=useState();
    const [email,setEmail]=useState();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {error,loading}=useSelector(state=>state.registerUser)
    const handleSubmit=(e)=>{
        e.preventDefault()
        const user={
            name,
            email,
            password,
            cpassword
        }
        if(password!==cpassword)
        {
            alert("the password not matched");
        }
        else
        {
            console.log(user);
            dispatch(registerUserAction(user))
            setName("");
            setPassword("");
            setCpassword("");
            setEmail("")
        }
    }
    return(
        <div className="row justify-content-center algin-items-center register">
             {loading?(<Loader></Loader>):""}
            {error?(<Error data="error in data"></Error>):""}
            <h1 >Register</h1>
            <form className="col-md-5 m-5" onSubmit={handleSubmit}>
                <input required value={name} onChange={(e)=>{setName(e.target.value)}}  className="form-control m-2 pd-2" type={"text"} placeholder="name"/>
                <input  required value={email} onChange={(e)=>{setEmail(e.target.value)}}  className="form-control m-2 pd-2"  type="email" placeholder="email"/>
                <input  required value={password}  onChange={(e)=>{setPassword(e.target.value)}} className="form-control m-2 pd-2"  type={"password"} placeholder="password"/>
                <input  required value={cpassword}  onChange={(e)=>{setCpassword(e.target.value)}} className="form-control m-2 pd-2"  type={"password"} placeholder="password"/>
                <button type="submit" className="btn m-2" >Register</button>
            </form>
            <div> <a style={{textDecoration:"none"}} href="/Login">Click here to Login</a></div>
        </div>
    )
}