import { useEffect } from "react";
import React from "react";
import Nav from "../../components/Nav/Nav";
import Slogan from "../../components/utility/Slogan";

const Home = () => {
  // useEffect(() => {
  //   const auth = localStorage.getItem("auth");
  //   console.log(auth);
  // }, []);

  return (
    <div className="Main">
      <div className="travellers-content">
        <Nav />
      </div>
      <Slogan />
    </div>
  );
};

export default Home;
