import React, { useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", formData);
      
      navigate("/sign-in"); // Redirect to the timer page
    } catch (err) {
      console.error(err);
      alert("Signup failed!");
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Left Side - Form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            padding: "24px",
            width: "400px",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom style={{ color: "#F72C2CFF" }}>
            Create an Account
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <input
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "16px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "16px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "16px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "4px",
                backgroundColor: "#F74545FF",
                color: "white",
                border: "none",
              }}
            >
              Signup
            </button>
          </form>
          <Typography variant="body2" align="center" style={{ marginTop: "16px" }}>
            Already have an account?{" "}
            <a href="/sign-in" style={{ color: "#FF4A4AFF" }}>
              Log in
            </a>
          </Typography>
        </div>
      </div>

      

      {/* Right Side - Background Image */}
      <div
        style={{
          flex: 1,
          backgroundImage: `url('/src/assets/signup.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};

export default Signup;