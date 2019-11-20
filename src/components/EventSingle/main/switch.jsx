import React from "react";

const Switch = () => {
  return (
    <div className="blue-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <ul className="nav nav-tabs event-tab">
              <li role="presentation" className="active">
                <a href="#about" data-toggle="tab">
                  About
                </a>
              </li>
              <li role="presentation">
                <a href="#event-info" data-toggle="tab">
                  Event Info
                </a>
              </li>
              <li role="presentation">
                <a href="#faq" data-toggle="tab">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switch;
