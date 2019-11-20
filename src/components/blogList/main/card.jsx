import React, { Component } from "react";
import { Link } from "react-router-dom";
const Card = props => {
  return (
    <div className="col-md-4 col-sm-4 grid-view-list">
      <div className="blog-g-v">
        <div className="content text-white">
          <Link to={"/blog/" + props.index} className="overlap">
            &nbsp;
          </Link>

          <div className="wrap">
            <div className="inner">
              <h4 className="post-title text-white">
                {props.title ? props.title : ""}
              </h4>

              <div className="content-wrap mb-0">
                <p>{props.more ? props.more : ""}</p>
              </div>
            </div>
          </div>
        </div>

        <figure className="overlay">
          <img
            src={props.img ? props.img : ""}
            alt=""
            style={{
              width: "360px",
              height: "460px",
              objectFit: "cover"
            }}
          />
        </figure>
      </div>
    </div>
  );
};

export default Card;
