import React from "react";
import "../style/login.css";

import loginImg from "../images/login.png";
import userIcon from "../images/user.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login_left">
        <img src={loginImg} alt="" />
      </div>
      <div className="login_right">
        <div className="login_content">
          <img src={userIcon} alt="" />
          <h1>Login</h1>
          <div className="login_input">
            <input type="text" placeholder="Email" /> <br />
            <input type="text" placeholder="Password" />
            <br />
            <button>Login</button>
          </div>
          <div className="account">
            <span>Don't have an account? </span>
            <NavLink to="/register">Create</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
