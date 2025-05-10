import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  
import"./login.css";
// import Navbar from "../components/website/navbar";

export default function Login(){
    const [form , setform]=useState({
        name:"",
        password:""
 } )
 function handlechange(e){
 setform({...form , [e.target.name]:e.target.value})

 } console.log(form)
 function handlesubmit(e){
  e.preventDefault()
  if(form.name.trim()===""){
    toast.error("enter your username")
  }
  if(form.password.trim()===""){
    toast.error("enter your password")
  }

 }
 return(
  <div className="login-container">
   <ToastContainer 
    position="top-right" 
    autoClose={3000} 
    hideProgressBar={false} 
    newestOnTop={true}  
    closeOnClick
    pauseOnHover
    draggable
/>

    <form className="login-form" onSubmit={handlesubmit}>
    <div className="login-field">
        <label className="login-label">UserName</label>
        <input className="login-input" placeholder="username" value={form.name} name="name" onChange={handlechange} type="text"/>
        <label className="login-label">password</label>
        <input className="login-input" type="password" name="password"placeholder="password" value={form.password} onChange={handlechange}/>
    </div>
    <button type="submit" to="/" className="login-btn">Login</button>
    <Link to="/register" className="login-link">don't have an account? register now.</Link>
    </form>
  </div>
 )
}