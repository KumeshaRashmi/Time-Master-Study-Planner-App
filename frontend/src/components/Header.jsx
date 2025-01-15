import { useState } from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Clear tokens or session logic here if needed
  };


  return (
    <AppBar position="static" sx={{ backgroundColor: "#FFFFFF" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          {/* Logo and Title */}
          <Link
            to="/"
            style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
          >
            <Box
              component="img"
              src="/src/assets/logo1.png"
              alt="Logo"
              sx={{ height: "50px", marginRight: "10px" }}
            />
            <Typography variant="h6" sx={{ color: "red", fontWeight: "bold" }}>
              TimeMaster
            </Typography>
          </Link>
        </Box>

        {/* Navigation Buttons */}
        <Button component={Link} to="/about" sx={{ color: "red" }}>
          About
        </Button>

        {isLoggedIn ? (
          <>
            <Button component={Link} to="/timer" sx={{ color: "red" }}>
              Timer
            </Button>
            {/* Profile Avatar */}
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                overflow: "hidden",
                marginLeft: "10px",
              }}
            >
              <img
                src="/Avatar.jfif" // Updated path to public folder
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Button onClick={handleLogout} sx={{ color: "red" }}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button component={Link} to="/timer" sx={{ color: "red" }}>
              Timer
            </Button>
            <Button component={Link} to="/" sx={{ color: "red" }}>
              Home
            </Button>
            <Button component={Link} to="/sign-in" sx={{ color: "red" }}>
              Login
            </Button>
            <Button component={Link} to="/sign-up" sx={{ color: "red" }}>
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
