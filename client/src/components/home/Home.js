import React from "react";
import { authService } from "../fbase/fbase";

const Home = () => {
  const signOut = () => {
    const auth = authService.getAuth();
    authService.signOut(auth, () => {
      console.log("Sign out ");
    });
  };
  return (
    <div className="home">
      <h1> home page tussle</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Home;
