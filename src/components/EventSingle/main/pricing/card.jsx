import React, { Component } from "react";
class Card extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-4 col-sm-4">
        <div className="price-box text-center">
          <h6 className="title mb-40">GENERAL ADMISSION</h6>
          <h2>
            <sup>$</sup>199
          </h2>
          <span className="copy text-uppercase">Per participants</span>
          <hr />
          <ul>
            <li> Onsite Sessions </li>
            <li> Firewalk Experience </li>
            <li> Seating in Upper Level </li>
            <li> Direct entry to the venue </li>
            <li> Lunch and High Tea </li>
          </ul>
          <a href="#" className="btn sec-bg text-uppercase">
            secure my seat
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
