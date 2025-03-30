import { useState } from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Header2() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // To programmatically navigate

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Clear tokens or session logic here if needed

    // Redirect to login page after logout
    navigate("/sign-in");
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
        <Button component={Link} to="/timer" sx={{ color: "red" }}>
          Timer
        </Button>
        <Button component={Link} to="/todo" sx={{ color: "red" }}>
          ToDo
        </Button>

        {/* Logout Button */}
        <Button onClick={handleLogout} sx={{ color: "red" }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
