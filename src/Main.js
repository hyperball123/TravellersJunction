import React, { useState } from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/signUp/Login";
import { SignUp } from "./pages/signUp/SignUp";
// import Cookies from "universal-cookie";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import User from "./pages/User/User";

// const cookies = new Cookies();

function Main() {
  // const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/user" element={<User />}>
          <Route path="createAccount" element={<CreateAccount />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Main;
