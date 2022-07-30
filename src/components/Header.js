import React from "react";

const Header = ({ handleThemeMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="save"
        onClick={() => handleThemeMode((prevDarkMode) => !prevDarkMode)}
      >
        Theme Mode
      </button>
    </div>
  );
};

export default Header;
