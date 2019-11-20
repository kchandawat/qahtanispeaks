import React, { Component } from "react";
import Navbar1 from "./navbar1";
import Navbar2 from "./navbar2";

function Navbar({ location }) {
  console.log(location);
  if (location.pathname == "/") {
    return <Navbar1 location={location} />;
  } else if (location.pathname == "/The+Power+Of+Words") {
    return <div></div>;
  } else {
    return <Navbar2 location={location} />;
  }
}

export default Navbar;
