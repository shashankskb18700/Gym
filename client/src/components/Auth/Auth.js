import React from "react";
import "./Auth.css";
import Country from "../country/country";

const Auth = () => {
  return (
    <div className="auth">
      <div className="flow">
        <div className="logo">
          <div className="icon">I</div>
          <div className="brandName">
            <b>TUSSLE.FIT</b>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            fontFamily: "monospace",
            fontSize: "15px",
            paddingTop: "4%",
          }}
          className="bestSelf"
        >
          Become your best self.
        </div>
        <div className="login">
          <div style={{ width: "90%" }}>Log in</div>
          <div className="inputs">
            {/* <input
              type="text"
              defaultValue="text"
              style={{ width: "10%", marginRight: "4%" }}
            ></input>
            <input
              type="number"
              defaultValue="532438203"
              style={{
                width: "85%",
              }}
            ></input> */}
            <Country />
          </div>

          {/* <button>Login</button> */}
          <div
            style={{
              textAlign: "right",
              width: "90%",
              fontSize: "13px",
              marginTop: "50px",
            }}
          >
            {" "}
            Contact Support
          </div>
        </div>
        <div className="beta">Tussle.fit is currently in closed beta</div>
        <div className="footer">
          <span>contact support</span>
          <span>Term of services</span>
          <span>Privacy policy</span>
        </div>
      </div>
    </div>
  );
};

export default Auth;
