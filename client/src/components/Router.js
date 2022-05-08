import React from "react";

import { authService } from "../components/fbase/fbase";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Auth from "./Auth/Auth";
import Home from "./home/Home";

const AppRouter = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  // console.log(authService.getAuth().currentUser.phoneNumber);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        exact
        path="/auth"
        render={() => (isLoggedIn ? <Redirect to="/" /> : <Auth />)}
      />
      {/* <Route path="/auth" element={<Auth />}

      render ={
        ()=> (authService.getAuth().currentUser ?<Redirect to="/" /> : <Auth />) }
     
      /> */}
      {/* <Route
        path="/"
        element={() => (isLoggedIn ? <Home /> : <Navigate to="/auth" />)}
      /> */}

      {/* {isLoggedIn ? (
        <Navigate to="/" replace />
      ) : (
        <Route path="/auth" element={<Auth />}></Route>
      )} */}

      {/* <Route
        path="/auth"
        element={
          authService.getAuth().currentUser ? (
            <Navigate replace to="/" />
          ) : (
            <Auth />
          )
        }
      /> */}
      {/* <Route path="/" element={<Home />}></Route>

      <Route path="/auth" element={<Auth />}></Route> */}
    </Switch>
  );
};

export default AppRouter;
