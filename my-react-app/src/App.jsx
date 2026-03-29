import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    /* 1. Ternary changes the background class */
    <div className={`container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      
      <h1>
        {isDarkMode ? "Dark Mode is ON 🌙" : "Light Mode is ON ☀️"}
      </h1>

      {/* 2. Ternary changes the button class */}
      <button 
        className={`toggle-button ${isDarkMode ? 'button-dark' : 'button-light'}`} 
        onClick={handleToggle}
      >
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

    </div>
  );
}

export default App;