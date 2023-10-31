import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../../config/config";
import { Button } from "../../components/utility/Button";
function User() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      {loading ? (
        <h1>Loading PLease Hang on for a moment</h1>
      ) : user ? (
        <Outlet />
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <h1>
          Login First
          <NavLink to="/login">
            <Button marginTop="-0.2rem" marginLeft="0.5rem">
              Login
            </Button>
          </NavLink>
        </h1>
      )}
    </div>
  );
}

export default User;
