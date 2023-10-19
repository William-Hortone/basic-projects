import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Login = () => {
  return (
    <div className="container">
      <div className="form-section">
        <h2>Login</h2>
        <form>
          <label htmlFor="pseudo">Pseudo</label>
          <input type="text" name="pseudo" placeholder="Your pseudo" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Your Email" />
          <label htmlFor="password">PAssword</label>
          <input type="password" name="password" placeholder="Your Password" />
        </form>
        <button>Login</button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
