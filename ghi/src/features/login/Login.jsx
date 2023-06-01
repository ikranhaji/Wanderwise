import './Login.css';
import { useLoginMutation, useGetTokenQuery } from "../../app/apiSlice";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { data: account } = useGetTokenQuery();
  const [login, results] = useLoginMutation();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
    navigate("/myprofile");
  };
  return (
    <div className="login-form">
      <div class="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div class="user-box">
            <input id="u" type="text" name="" required
              value={username}
              onChange={(e) => {
                setUserName(e.target.value)
              }}
              placeholder='Username'
            />

          </div>
          <div class="user-box" >
            <input id="p" type="password" name="" required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />

          </div>

          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
