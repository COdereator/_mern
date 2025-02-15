import React from "react";
import loginImg from "../images//register.png";
import userIcon from "../images/user.png";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="login" style={{ height: "450px" }}>
      <div className="login_left">
        <img src={loginImg} alt="" />
      </div>
      <div className="login_right">
        <div className="login_content">
          <img src={userIcon} alt="" />
          <h1>Register</h1>
          <div className="login_input">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" /> <br />
            <input type="text" placeholder="Password" />
            <br />
            <button>Create Account</button>
          </div>
          <div className="account">
            <span>Already have an account? </span>
            <NavLink to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
