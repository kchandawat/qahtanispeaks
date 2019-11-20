import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery/src/jquery";
const collapse = () => {
  var $navbar = $(".navbar-collapse"),
    $navBtn = $("button.navbar-toggle");

  $navbar.removeClass("collapse").addClass("collapsing");
  setTimeout(function() {
    $navbar.removeClass("in collapsing").removeAttr("aria-expanded");
  }, 300);

  $navBtn.removeAttr("aria-expanded").addClass("collapsed");
};
const Nav = ({ location }) => {
  console.log(location.pathname);
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header visible-xs">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <NavLink className="navbar-brand" to="/">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
              alt=""
            />
          </NavLink>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li
              className={
                location.pathname == "/"
                  ? "current-menu-item dropdown"
                  : "dropdown"
              }
            >
              <NavLink to="/" className="dropdown-toggle " onClick={collapse}>
                Home
              </NavLink>
            </li>

            <li
              className={
                location.pathname == "/events" ||
                location.pathname.match(/\/event\/[.]*/)
                  ? "current-menu-item dropdown"
                  : "dropdown"
              }
            >
              <NavLink
                to="/events"
                className="dropdown-toggle"
                onClick={collapse}
              >
                Events
              </NavLink>
            </li>

            <li
              className={
                location.pathname == "/blogs" ||
                location.pathname.match(/\/blog\/[.]*/)
                  ? "current-menu-item dropdown"
                  : "dropdown"
              }
            >
              <NavLink
                to="/blogs"
                className="dropdown-toggle"
                onClick={collapse}
              >
                Articles & Videos
              </NavLink>
            </li>

            <li
              className={
                location.pathname == "/The+Power+Of+Words"
                  ? "current-menu-item dropdown"
                  : "dropdown"
              }
            >
              <NavLink
                to="/The+Power+Of+Words"
                className="dropdown-toggle"
                onClick={collapse}
              >
                The Power Of words
              </NavLink>
            </li>

            <li
              className={
                location.pathname == "/book"
                  ? "current-menu-item dropdown"
                  : "dropdown"
              }
            >
              <NavLink
                to="/book"
                className="dropdown-toggle"
                onClick={collapse}
              >
                Book Me
              </NavLink>
            </li>

            <li
              className={
                location.pathname == "/contact"
                  ? "current-menu-item dropdown"
                  : "dropdown"
              }
            >
              <NavLink
                to="/contact"
                className="dropdown-toggle"
                onClick={collapse}
              >
                Contact
              </NavLink>
            </li>

            <li
              className={
                location.pathname == "/about"
                  ? "current-menu-item dropdown"
                  : "dropdown"
              }
            >
              <NavLink
                to="/about"
                className="dropdown-toggle"
                onClick={collapse}
              >
                About{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
