import React, { Component } from "react";
class Card extends Component {
  state = {};
  render() {
    return (
      <li className="col-sm-4">
        <div className="box">
          <div className="content-wrap mb-70">
            <p>
              <em>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </em>
            </p>
          </div>
        </div>

        <div className="author">
          <figure className="rounded-crcl">
            <img src="assets/images/auth1.png" alt="" />
          </figure>
          David John Doe
          <span>Responsive Pixel, CEO/Founder </span>
        </div>
      </li>
    );
  }
}

export default Card;
