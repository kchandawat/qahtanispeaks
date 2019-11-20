import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { MetaTags } from "react-meta-tags";
class Error extends Component {
  componentDidMount() {
    document.title = "404 Page Not Found";
  }
  render() {
    return (
      <div id="notfound">
        <MetaTags>
          <meta name="robots" content="noindex, nofollow" />
        </MetaTags>
        <div class="notfound">
          <div class="notfound-404">
            <h1>Oops!</h1>
            <h2>404 - The Page cannot be found</h2>
          </div>
          <Link to="/">Go to Home</Link>
        </div>
      </div>
    );
  }
}

export default Error;
