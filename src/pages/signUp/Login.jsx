import React, { useState } from "react";
import "./SignUp.css";
import { Button } from "../../components/utility/Button";
import Gicon from "../../assets/google.png.png";
import { auth, googleProvider } from "../../config/config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onlogin(e) {
    // e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/user/createAccount");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMsg = error.message;
        console.log(errorCode, errorMsg);
        alert(errorMsg)
      });
  }

  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/user/createAccount");

      console.log("Sign in with Google successful.");
      // Close the popup after successful sign-in
      //  window.location.href = "/confirmation.html";
    } catch (err) {
      console.error(err.message);
    }
  }
  return (
    <main className="travellers-createAcc">
      <div className="wrapper">
        <h2>Login</h2>
        <form>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="policy">
            <input type="checkbox" />
            <h3>I accept all terms & condition</h3>
          </div>
          <div className="Login btn" onClick={onlogin}>
            {/* <Button textAlign="center">Login</Button> */}
            Login
          </div>
          <div className="text">
            <h3>
              Don't have an account?
              <NavLink to="/signUp"> Register now</NavLink>
            </h3>
          </div>
          <div className="register-google" onClick={signInWithGoogle}>
            <Button
              bgColor="#fff"
              textColor="#6E6B6B"
              border="2px solid #ccc"
              textAlign="center"
              width="100%"
            >
              <img
                src={Gicon}
                alt="google"
                height="25"
                width="25"
                style={{ verticalAlign: "middle" }}
              />
              <p
                style={{
                  display: "inline-block",
                  marginLeft: "1rem",
                  lineHeight: "20px",
                  fontWeight: "bold",
                }}
              >
                Sign in with Google
              </p>
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
