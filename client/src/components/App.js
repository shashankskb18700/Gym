import React, { useEffect, useState } from "react";
import Auth from "./Auth/Auth";
import Country from "./country/country";
import { authService } from "./fbase/fbase";
import AppRouter from "./Router";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged(authService.getAuth(), (user) => {
      if (user) {
        setIsLoggedIn(true);
      }
      setInit(true);
    });
  }, []);
  // console.log(firebase);
  console.log(authService.getAuth().currentUser);
  return (
    <div>
      {/* <div>
        <NavHeader authStatus={isLoggedIn} />
      </div> */}
      <div>{init ? <AppRouter isLoggedIn={isLoggedIn} /> : "loading"}</div>
      {/* <Auth /> */}

      {/* <Search /> */}
    </div>
  );
};

export default App;
