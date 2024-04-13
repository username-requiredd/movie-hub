import React, { useState } from "react";
import "./login.css"; // Import CSS file for styling
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="_profile-signup-container">
      <h2 className="_profile-heading">Sign Up</h2>
      <form onSubmit={handleSubmit} className="_profile-form">
        <div className="_profile-form-group">
          <label htmlFor="name" className="_profile-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="_profile-input"
          />
        </div>
        <div className="_profile-form-group">
          <label htmlFor="email" className="_profile-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="_profile-input"
          />
        </div>
        <div className="_profile-form-group">
          <label htmlFor="password" className="_profile-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="_profile-input"
          />
        </div>
        <Link
          className="_profile-button"
          to={name && password && email !== "" ? "/profile" : ""}
        >
          Sign Up
        </Link>
        {/* <button type="submit"></button> */}
      </form>
    </div>
  );
};

export default Login;
