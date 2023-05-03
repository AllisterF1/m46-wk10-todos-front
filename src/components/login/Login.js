import React from "react";
import { useState } from "react";
import {loginUser} from"../utils";

const Login = ({ newUser }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    await loginUser(username, password, newUser)
  };

  return (
    <div className="login-container">
      <h1>Login Below</h1>

      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username:</label>

        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="username"
          name="username"
          required
        />

       
        <label htmlFor="password">Password:</label>

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          name="password"
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;