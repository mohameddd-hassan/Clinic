import { Route, Routes } from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/register";
import Home from "./pages/website/home";
import AboutUs from "./pages/website/aboutus";
import Doctors from "./pages/website/doctors";
import Account from "./pages/website/account";

function App() {
  return (
    <div >

    <Routes>
      <Route path="/login"element={<Login/>}></Route>
      <Route path="/register"element={<Register/>}></Route>
      <Route path="/"element={<Home/>}></Route>
      <Route path="/about"element={<AboutUs/>}></Route>
      <Route path="/doctors"element={<Doctors/>}></Route>
      <Route path="/account"element={<Account/>}></Route>



    </Routes>
    </div>
  );
}

export default App;
