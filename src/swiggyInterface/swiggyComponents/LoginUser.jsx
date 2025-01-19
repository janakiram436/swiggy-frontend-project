import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      setError("Please enter the details");
      return;
    }
    try {
      const response = await axios.post("https://swiggy-backend-code.onrender.com/user/login", { email, password });
      console.log(response);
      navigate("/home");
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong. Please try again later.");
    }
  };

  const guestLoginHandle = async () => {
    const userLogin = {
      email: "ram@gmail.com",
      password: "17f21a0436",
    };
    try {
      const response = await axios.post("https://swiggy-backend-code.onrender.com/user/login", userLogin);
      console.log(response);
      navigate("/home");
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong. Please try again later.");
    }
  };

  return (
    <div
      className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center"
      style={{
        background: "linear-gradient(to right, #00bcd4, #ff4081)", // More vibrant gradient for full coverage
      }}
    >
      {/* Heading */}
      <h1
        className="text-white text-center mb-5"
        style={{
          fontWeight: "bold",
          fontSize: "3rem",
          textShadow: "3px 3px 10px rgba(0,0,0,0.5)",
          lineHeight: "1.2",
        }}
      >
        ORDER YOUR FOOD
      </h1>

      <div className="row w-100 px-3">
        {/* Left side image - hidden on mobile */}
        <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0 d-none d-md-flex">
          <img
            src="https://img.freepik.com/free-vector/video-blogger-composition-with-desktop-computer-character-fast-food-male-blogger-with-meal-vector-illustration_1284-66577.jpg"
            alt="Food Illustration"
            className="img-fluid rounded shadow-lg"
            style={{
              maxWidth: "90%",
              borderRadius: "15px",
            }}
          />
        </div>

        {/* Right side login form */}
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div
            className="card p-5 shadow-lg w-100"
            style={{
              maxWidth: "420px",
              borderRadius: "20px",
              backgroundColor: "#fff",
            }}
          >
            <h2 className="text-center mb-4" style={{ color: "#ff4081", fontWeight: "bold" }}>
              Login Form
            </h2>
            <form onSubmit={handleSubmitForm}>
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
                className="btn btn-primary w-100 mb-3"
                style={{
                  backgroundColor: "#ff4081",
                  border: "none",
                  padding: "12px",
                  fontSize: "18px",
                  borderRadius: "10px",
                }}
              >
                Login
              </button>
            </form>
            <p className="text-center mb-3">
              Don't have an account? <Link to="/signup" className="text-primary">Sign up</Link>
            </p>
            {error && <p className="text-danger text-center">{error}</p>}
          </div>
        </div>
      </div>

      {/* Guest login button - stacked below the form on mobile */}
      <button
        className="btn btn-warning mt-4"
        style={{
          padding: "12px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          color: "#fff",
          backgroundColor: "#ff9800", // Vibrant color for the guest login button
          borderColor: "#ff9800",
        }}
        onClick={guestLoginHandle}
      >
        Guest Login
      </button>
    </div>
  );
};

export default LoginUser;
