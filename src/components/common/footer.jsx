import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <ul className="footer-link">
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/blogs">Articles & Videos</Link>
              </li>
              <li>
                <Link to="/The+Power+Of+Words">The Power of Words</Link>
              </li>
              <li>
                <Link to="/book">Book Me</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <hr />
            <div className="copy-right mb-15">
              Designed and Developed with ❤ Khush Chandawat.
            </div>

            <div className="social">
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
    </footer>
  );
};

export default Footer;
