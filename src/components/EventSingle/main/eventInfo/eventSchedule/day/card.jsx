import React, { Component } from "react";
class Card extends Component {
  state = {};
  render() {
    return (
      <li>
        <span className="thumb faa-parent animated-hover">
          <i className="fa fa-circle faa-burst" />
        </span>

        <div className="box">
          <span className="sec-color">7:00am - 8:00 am</span>
          <h6 className="mb-20">Participants Registration</h6>
          <div className="content-wrap mb-0">
            <p>
              Praesent quis nibh sed magna vulputate porta ac id nunc. Phasellus
              fringilla libero eget tortor auctor, nec varius erat tincidunt.
              Sed erat erat, sodales a sollicitudin nec, gravida ullamcorper
              libero. Sed bibendum augue eu augue risus efficitur.
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default Card;
