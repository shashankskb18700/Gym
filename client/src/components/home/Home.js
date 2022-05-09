import React from "react";
import { authService } from "../fbase/fbase";
import { Redirect, Link } from "react-router-dom";

import "./Home.css";
const Home = () => {
  const signOut = () => {
    const auth = authService.getAuth();
    authService.signOut(auth, () => {
      console.log("Sign out ");
    });
  };
  return (
    <div className="home">
      <div className="cont">
        <h1> HOME PAGE</h1>
        <h2>TUSSLE</h2>

        <button onClick={() => signOut()}>Sign Out</button>

        <Link to="/auth">
          <button>Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
