import { useState } from "react";
import { Link } from "react-router-dom";
import"./login.css"
import { toast, ToastContainer } from "react-toastify";

export default function Register(){
    const[form , setform]=useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        password_confirmation:""
    })
    function handlechange(e){
        setform({...form , [e.target.name]: e.target.value})
    }
    function handlesubmit(e){
        e.preventDefault();
        if(form.name.trim()===""){toast.error("enter your user name"); return; }
        if(form.email.trim()===""){toast.error("enter your user email");return; }
        if(form.phone.trim()===""){toast.error("enter your user phone number");return; }
        if(form.password.trim()===""){toast.error("enter your user password");return; }
        if(form.password_confirmation.trim()===""){toast.error("enter your user password again");return; }
        if(form.phone.length<11){toast.error("phone number must be 11 digit");return;}
        if(form.password.length<8){toast.error("password should be 8 characters");return;}
        if(form.password_confirmation!==form.password){toast.error("confirmation password is not right");return;}
    }
    return(
        <div className="login-container">
             <ToastContainer  position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={true}  closeOnClick pauseOnHover draggable
/>
            <form className="login-form" onSubmit={handlesubmit}>
               <div className="login-field">
                <label className="login-label">username</label>
                <input className="login-input" type="text" name="name" value={form.name}placeholder="enter your username" onChange={handlechange} />
                <label className="login-label">email</label>
                <input className="login-input" type="email" name="email" value={form.email}placeholder="enter your email" onChange={handlechange} />
                <label className="login-label">phone number</label>
                <input className="login-input" type="number" name="phone" value={form.phone}placeholder="enter your phone number" onChange={handlechange} />
                <label className="login-label">password</label>
                <input className="login-input" type="password" name="password" value={form.password}placeholder="enter your password" onChange={handlechange} />
                <label className="login-label">password_confirmation</label>
                <input className="login-input" type="password" name="password_confirmation" value={form.password_confirmation}placeholder="enter your password again" onChange={handlechange} />
                </div> 
                <button type="submit" className="login-btn" to="/login">signup</button>
                <Link to="/login" className="login-link">already have an account</Link>
            </form>
        </div>
    )
}