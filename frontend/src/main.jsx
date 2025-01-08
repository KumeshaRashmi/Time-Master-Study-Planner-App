import React from 'react'; // Import React (not always necessary but good practice)
import { createRoot } from 'react-dom/client'; // For React 18+
import './index.css'; // Ensure Tailwind CSS is imported
import App from './App.jsx'; // Import the main app component

// Render the App component inside the 'root' div
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
