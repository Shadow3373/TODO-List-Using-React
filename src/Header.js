import React from "react";

const Header = () => {
  const headerStyle = {
    background: "#333",
    color: "#fb65689",
    textAlign: "center",
    padding: "10px",
  };
  return (
    <header className="App-header" style={headerStyle}>
      <h1>Hello Mame</h1>
      <p>Welcome to React</p>
      <hr />

      <img
        className="App-logo"
        src="favicon.ico"
        alt="React Logo"
        style={{ width: "200px" }}
      />
    </header>
  );
};

export default Header;
