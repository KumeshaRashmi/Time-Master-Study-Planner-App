import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to authenticate. Please check your credentials.");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      navigate("/timer");
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("Could not connect to the server. Please try again later.");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "transparent" }}>
        <div style={{ backgroundColor: "white", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "24px", width: "400px" }}>
          <Typography variant="h4" align="center" gutterBottom style={{ color: "#F63333", fontWeight: "bold", fontSize: "2rem" }}>
            Log in
          </Typography>
          <form onSubmit={handleSignIn}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" type="submit" fullWidth sx={{ marginTop: "16px", padding: "12px", fontSize: "1rem", backgroundColor: "#F43333", "&:hover": { backgroundColor: "#931111" }, fontWeight: "bold" }}>
              Log in
            </Button>
          </form>
        </div>
      </div>
      <div style={{ flex: 1, backgroundImage: `url('/src/assets/signup.jpg')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
    </div>
  );
}
