import React, { Component } from "react";

function Navbar({ isLibraryActive, setIsLibraryActive }) {
  const libraryHandler = () => {
    setIsLibraryActive(!isLibraryActive);
  };
  return (
    <nav className="nav">
      <h1 className="nav__title">asjn3e's player</h1>
      <button className="nav__library-button" onClick={libraryHandler}>
        Library
      </button>
    </nav>
  );
}

export default Navbar;
