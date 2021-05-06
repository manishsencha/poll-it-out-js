import React, { useState } from "react";
import "./Login.css";

import { useSelector, useDispatch } from "react-redux";
import { selectAuth, setAuthenticate } from "../../features/authSlice";
export default function Login() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectAuth);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    dispatch(setAuthenticate({ username: user, password: pass }));
  };
  return (
    <div className="login__container">
      <h2>Login</h2>

      <form className="login__form" autoComplete="off">
        <div className="login__imgContainer">
          <img
            src={require("../../assets/avatar-placeholder.jpg").default}
            alt="Avatar"
            className="login__avatar"
          />
        </div>
        <div className="login__inputContainer">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            onChange={(e) => setUser(e.target.value)}
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            onChange={(e) => setPass(e.target.value)}
          />

          <button type="submit" onClick={handleLogin}>
            Login
          </button>
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
        </div>
      </form>
      <div>{isAuthenticated.toString()}</div>
    </div>
  );
}
