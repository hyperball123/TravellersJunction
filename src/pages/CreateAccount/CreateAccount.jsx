import React from "react";
import { Button } from "../../components/utility/Button";
import { signOut } from "firebase/auth";
import { auth } from "../../config/config";
import { useNavigate } from "react-router-dom";
import "./CreateAcc.css";

function CreateAccount() {
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    console.log("LOGGED OUT SUCCESSFULLY");
    navigate("/");
  };
  return (
    <div className="createAcc-section">
      <h1>Welcome! lets create Your Profile</h1>
      <form className="createAcc-form">
        <input type="file" name="upload" accept="image/*" />
      </form>
      <span onClick={logout}>
        <Button>Logout</Button>
      </span>
    </div>
  );
}

export default CreateAccount;
