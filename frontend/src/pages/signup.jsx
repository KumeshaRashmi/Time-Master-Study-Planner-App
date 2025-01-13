import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function SignUp() {
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSignIn = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
};

return (
    <div
    style={{
        display: "flex",
        height: "100vh",
        fontFamily: "'Roboto', sans-serif",
    }}
    >
      {/* Left Side - Form Section */}
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
        {/* Sign-In Form */}
        <div
        style={{
            backgroundColor: "white",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            padding: "24px",
            width: "400px",
        }}
        >
        <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{
            color: "#F63333",
            fontWeight: "bold",
            fontSize: "2rem",
            }}
        >
            Create an Account
        </Typography>
        <form onSubmit={handleSignIn}>
            {/* Username Field */}
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                fontSize: "1rem",
                "& fieldset": {
                    borderColor: "#1a202c",
                },
                "&:hover fieldset": {
                    borderColor: "#F52A2A",
                },
                "&.Mui-focused fieldset": {
                    borderColor: "#ED0808",
                },
                },
            }}
            />
            {/* Email Field */}
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  fontSize: "1rem",
                  "& fieldset": {
                    borderColor: "#1a202c",
                  },
                  "&:hover fieldset": {
                    borderColor: "#F52A2A",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ED0808",
                  },
                },
            }}
            />
            {/* Password Field */}
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  fontSize: "1rem",
                  "& fieldset": {
                    borderColor: "#1a202c",
                },
                "&:hover fieldset": {
                    borderColor: "#ED0808",
                },
                "&.Mui-focused fieldset": {
                    borderColor: "#ED0C08",
                },
                },
            }}
            />
            {/* Submit Button */}
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                marginTop: "16px",
                padding: "12px",
                fontSize: "1rem",
                backgroundColor: "#F43333",
                "&:hover": {
                backgroundColor: "#931111",
                },
                fontWeight: "bold",
            }}
            >
            SignUp
            </Button>
            <Typography
              align="center"
              variant="body2"
              style={{
                marginTop: "16px",
                fontSize: "0.9rem",
            }}
            >
              Already have an account?{" "}
              <a
                href="/sign-in"
                style={{ textDecoration: "none", color: "#F63333" }}
            >
                Log in
            </a>
            </Typography>
        </form>
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
}
