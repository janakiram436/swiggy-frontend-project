import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (username === "" || email === "" || password === "") {
      setError("Please enter all the details.");
      return;
    }

    const newUser = { username, email, password };

    axios
      .post("https://swiggy-backend-code.onrender.com/user/register", newUser)
      .then((res) => {
        setEmail("");
        setName("");
        setPassword("");
        setError("");
        console.log(newUser);
        navigate("/");
      })
      .catch((err) => {
        console.error("Failed to create user", err);
        setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(to right, #6a11cb, #2575fc)",
        color: "#fff",
      }}
    >
      <div
        className="card p-4 shadow-lg col-10 col-md-6 col-lg-4"
        style={{
          borderRadius: "20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h1
          className="text-center mb-4"
          style={{
            color: "#6a11cb",
            fontWeight: "bold",
            fontSize: "1.8rem",
          }}
        >
          Sign Up
        </h1>
        <form onSubmit={handleSubmitForm}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Enter Username
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="username"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Enter Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Enter Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn w-100 text-white"
            style={{
              backgroundColor: "#6a11cb",
              border: "none",
              padding: "12px",
              fontSize: "16px",
            }}
          >
            Sign Up
          </button>
        </form>
        {error && (
          <p className="text-danger text-center mt-3" style={{ fontSize: "14px" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default UserRegister;
