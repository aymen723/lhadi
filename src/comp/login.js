import React, { useState } from "react";
import "./login.css";
import { TextField } from "@mui/material";
function Login() {
  const [username, setusername] = useState(null);
  const [password, setpassword] = useState(null);

  function hundleusername(e) {
    console.log(e.target.value);
    setusername(e.target.value);
  }

  function hundlepassord(e) {
    setpassword(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      <img class="wave" src="C:\Users\heith\Downloads\wave1.png"></img>
      <div class="container">
        <div class="img">
          <img src="C:\Users\heith\Downloads\undraw_digital_currency_qpak.svg"></img>
        </div>
        <div class="login-content">
          <form action="index.html">
            <img src="C:\Users\heith\Downloads\undraw_personal_info_re_ur1n.svg"></img>
            <h2 class="title">Welcome</h2>
            <div class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                <h5>Username</h5>
                <input
                  type="text"
                  defaultValue={username}
                  onChange={(e) => {
                    hundleusername(e);
                  }}
                  class="input"
                ></input>
              </div>
            </div>
            <div class="input-div pass">
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                <h5>Password</h5>
                <input
                  type="password"
                  defaultValue={password}
                  onChange={(e) => {
                    hundlepassord(e);
                  }}
                  class="input"
                ></input>
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <input type="submit" class="btn" value="Login"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
