import React from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const redTheme = createTheme({
  palette: {
    primary: {
      main: '#f44336', 
    },
    secondary: {
      main: '#ff7961',
    },
  },
});

const Profile = () => {
  const user = {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    bDay: '1995-05-15',
    gender: 'Female',
    phone: '+1234567890',
  };

  const handleChange = (e) => {
    // Handle form field changes (empty for now)
  };

  const handleOpenConfirmation = () => {
    // Handle profile update action (empty for now)
  };

  const handleCancel = () => {
    // Handle reset action (empty for now)
  };

  return (
    <ThemeProvider theme={redTheme}>
      <div className="absolute top-0 left-0 w-full h-[200px] bg-red-500 flex items-center justify-center" 
           style={{ backgroundImage: "url('/src/assets/ProfileBg3.jfif')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <div 
          className="relative w-full max-w-4xl rounded-lg shadow-lg p-6 mb-4 bg-white border-2 border-red-500"
          style={{ marginLeft: 'auto' }}
        >
          <div className="flex flex-col items-center mb-8">
            <label htmlFor="fileInput">
              <Avatar
                alt="Profile Avatar"
                src="/src/assets/Avatar.jfif"
                sx={{ width: 100, height: 100 }}
              />
            </label>

            <Typography 
              className="mt-4" 
              variant="h2" 
              component="h2" 
              color="primary" 
              sx={{ fontSize: '1.5rem' }} // Adjust font size here
            >
              {user.firstName} {user.lastName}
            </Typography>
          </div>

          <div className="space-y-6">
            <div className="mb-6 text-2xl font-semibold text-gray-700">
              <TextField
                label="First Name"
                name="firstName"
                variant="outlined"
                fullWidth
                value={user.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6 text-2xl font-semibold text-gray-700">
              <TextField
                label="Last Name"
                name="lastName"
                variant="outlined"
                fullWidth
                value={user.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6 text-2xl font-semibold text-gray-700">
              <TextField
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                value={user.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6 text-2xl font-semibold text-gray-700">
              <TextField
                label="Phone No"
                name="phone"
                type="tel"
                variant="outlined"
                fullWidth
                value={user.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6 text-2xl font-semibold text-gray-700">
              <TextField
                label="Birthday"
                name="bDay"
                type="date"
                variant="outlined"
                fullWidth
                value={user.bDay}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6 text-2xl font-semibold text-gray-700">
              <TextField
                label="Gender"
                name="gender"
                variant="outlined"
                fullWidth
                select
                value={user.gender}
                onChange={handleChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </TextField>
            </div>
          </div>

          <div className="mt-8 flex justify-between w-full space-x-4">
            <Button variant="contained" color="primary" onClick={handleOpenConfirmation}>
              Update
            </Button>
            <Button variant="contained" color="primary" onClick={handleCancel}>
              Reset
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Profile;  
