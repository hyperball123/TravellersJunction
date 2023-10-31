import React, { useState } from "react";
import "./SignUp.css";
import { Button } from "../../components/utility/Button";
import Gicon from "../../assets/google.png.png";
import { NavLink } from "react-router-dom";
import { auth, googleProvider } from "../../config/config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const SignUp = () => {
  const navigate = useNavigate();

  const initialState = {
    name: "",
    password: "",
    email: "",
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [formData, setFormData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || !email || !password) {
      alert("Please fill in all the details.");
      return false; //  2 Prevent the form from submitting
    } else {
      SignIn();
    }

    // If the fields are valid, continue with the sign-up process.
  }

  // async function SignIn() {
  //   if (!name || !email || !password) {
  //     alert("Please fill in all the details.");
  //     return;
  //   }
  //   try {
  //     const result = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     const token = cookies.set("auth-token", result.user.refreshToken);

  //     console.log(token);
  //   } catch (err) {
  //     console.error("Sign in Error" + err);
  //   }
  // }
  async function SignIn() {
    // if (!name || !email || !password) {
    //   alert("Please fill in all the details.");
    //   return false;
    // } else {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = cookies.set("auth-token", result.user.refreshToken);
      console.log(token);

      // Redirect to the login page after successful sign-up
      navigate("/Login");
    } catch (err) {
      console.error("Sign in Error" + err);
    }
    // }
  }
  
  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/user/createAccount");

      console.log("Sign in with Google successful.");
      // Close the popup after successful sign-in
      //  window.location.href = "/confirmation.html";
    } catch (err) {
      console.error(err);
    }
  }
  // how to validate token in firebase authentication
  // how to handle authentication in firebase (signup/login)
  return (
    <main className="travellers-createAcc">
      <div className="wrapper">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Create password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="policy">
            <input type="checkbox" />
            <h3>I accept all terms & condition</h3>
          </div>

          <div className="input-box button">
            <input type="Submit" />
          </div>
          <div className="text">
            <h3>
              Already have an account? <NavLink to="/Login">Login now</NavLink>
            </h3>
          </div>
          <div className="register-google" onClick={signInWithGoogle}>
            <Button
              bgColor="#fff"
              textColor="#6E6B6B"
              border="2px solid #ccc"
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
                className="google-btn"
              >
                Sign up with Google
              </p>
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};
