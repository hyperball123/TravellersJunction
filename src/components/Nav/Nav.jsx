import React from "react";
import { Button } from "../utility/Button";
import Logo from "../utility/Logo";
import { NavLink } from "react-router-dom";


function Nav() {
  return (
    <>
      <Logo />
      <nav className="travellers_nav">
        <ul className="travellers_ul">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/Blog">
            <li>Blog</li>
          </NavLink>
          <NavLink to="/Contact">
            <li>Contact</li>
          </NavLink>
          <NavLink to='/login'>
            <Button marginTop="-0.2rem" marginLeft="0.5rem">
              Login
            </Button>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
