import { NavLink } from "react-router-dom";
import "../website/navbar.css"

export default function Navbar(){
    return(
        <div className="nav-container">
        <div className="nav-logo">MedCare</div>
        <div className="navlink">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/doctors">Doctors</NavLink>
          <NavLink to="/account">Account</NavLink>
          <NavLink to="/login">Logout</NavLink>
        </div>
      </div>
    )
}