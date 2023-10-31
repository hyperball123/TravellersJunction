import React from "react";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";

function Note() {
  return (
    <div className="travellers-note">
      <p>
        Connect with fellow travellers,share your experiences,and plan your next
        adventure
      </p>
      <NavLink to='/signUp'>
        <Button paddingNote="1rem 2.2rem">Connect</Button>
      </NavLink>
    </div>
  );
}

export default Note;
