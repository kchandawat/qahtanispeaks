import React, { Component } from "react";
import Nav from "./nav";
import { Link } from "react-router-dom";

function Navbar2({ location }) {
  return (
    <header className="style3">
      <div className="top dark-blue hidden-xs">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-5 col-xs-5 left">
              <span>
                EMAIL :{" "}
                <a href="mailto:mohammed.alqahtani.42@gmail.com">
                  {" "}
                  mohammed.alqahtani.42@gmail.com
                </a>
              </span>
            </div>

            <div className="col-md-2 col-sm-2 col-xs-2 mid text-center">
              <Link to="/" className="navbar-brand">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/footer-logo.png"
                  }
                  alt=""
                />
              </Link>
            </div>

            <div className="col-md-5 col-sm-5 col-xs-5 right">
              <ul className="social-icons">
                <li>
                  <a href="https://www.facebook.com/mohammed.qahtani.5">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/2015wcps">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/qahtani_speaks?igshid=2sjh37yynoqm">
                    <i className="fa fa-instagram " />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mohammed-qahtani-08b90931">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Nav location={location} />
    </header>
  );
}

export default Navbar2;
