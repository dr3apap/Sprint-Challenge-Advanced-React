import React from "react";
import useDarkMode from "./useDarkMode";
import styled from "styled-components";

const ToggleMode = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className="dark-mode__toggle">
      <button
        onClick={toggleMode}
        className={darkMode ? "toggle toggled" : "toggle"}
      >
        Dark Mode!
      </button>
    </div>
  );
};

export default ToggleMode;
