import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  return (
    <div>
      <li className="grid-view-list">
        <div className="blog-g-v">
          <div className="content text-white">
            <Link to={"/blog/" + props.url} className="overlap">
              <br />
            </Link>

            <div className="wrap">
              <div className="inner">
                <h4 className="post-title text-white">{props.title}</h4>

                <div className="content-wrap mb-0">
                  <p>{props.more}</p>
                </div>
              </div>
            </div>
          </div>

          <figure className="overlay">
            <img
              src={props.img}
              style={{
                width: "470px",
                height: "390px",
                objectFit: "cover"
              }}
              alt=""
            />
          </figure>
        </div>
      </li>
    </div>
  );
};

export default Card;
