import React from "react";
import { Link } from "react-router-dom";

const List = props => {
  console.log(props);
  return (
    <li>
      <figure className="post-thumb">
        <Link to={"/event/" + props.index} className="image-effect overlay">
          <img src={props.image} alt="" />
        </Link>
      </figure>

      <div className="entry-post">
        <h6 className="mb-5">
          <Link to={"/event/" + props.index}>{props.title} </Link>
        </h6>
        <div className="post-info">
          <span>{props.date.toDateString()} </span>
          <span>{props.location} </span>
        </div>
      </div>

      <div className="button-wrap text-right">
        <Link
          className="btn btn-bdr text-uppercase"
          to={"/event/" + props.index}
        >
          more infomation
        </Link>
      </div>
    </li>
  );
};

export default List;
