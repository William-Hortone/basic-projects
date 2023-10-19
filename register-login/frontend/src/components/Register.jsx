import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [pseudo, setPseudo] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/register", { pseudo, email, password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="form-section">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="pseudo">Pseudo</label>
          <input
            type="text"
            name="pseudo"
            placeholder="Your pseudo"
            onChange={(e) => setPseudo(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">PAssword</label>
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
