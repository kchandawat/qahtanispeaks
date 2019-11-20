import React from "react";
import { Link } from "react-router-dom";
const Subscribe = () => {
  return (
    <div className="option-form event blue-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-9">
            <h3 className="text-uppercase mb-5">
              GET NOTIFICATIONS FOR NEW EVENTS!
            </h3>
            <p>Subscribe to get latest updates on our upcoming events</p>
          </div>

          <div className="col-md-3 col-sm-3">
            <Link
              to="/"
              className="btn btn-lg dark-blue text-uppercase text-white pull-right"
            >
              subscribe now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
