import React, { Component } from "react";
import Nav from "./nav";

function Navbar1({ location }) {
  return (
    <header className="style1">
      <Nav location={location} />
    </header>
  );
}

export default Navbar1;
