import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - The Post cannot be found</h2>
        </div>
        <Link to="/blogs">More Posts</Link>
      </div>
    </div>
  );
};

export default Error;
