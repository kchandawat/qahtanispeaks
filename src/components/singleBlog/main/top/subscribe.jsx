import React from "react";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div className="subscription mb-40">
      <div className="content">
        <h2 className="text-white text-uppercase mb-15">
          unleash your inner power
        </h2>

        <div className="content-wrap">
          <p>
            The Power Of Words: The Journey of a Stuttering Champion How to be
            master the esensential of an Unleash Inner Power Achieve the
            impossible. Sorround yourself with the extraordinary.
          </p>
        </div>

        <form action="#" className="form-inline">
          <div className="form-group"></div>
          <Link to="/The+Power+Of+Words">
            <input
              type="submit"
              className="btn dark-blue text-white text-uppercase"
              value="More Info"
            />
          </Link>
        </form>
      </div>

      <figure>
        <img
          src={process.env.PUBLIC_URL + "/assets/images/smallBook.png"}
          alt=""
        />
      </figure>
      <div className="clearfix" />
    </div>
  );
};

export default Subscribe;
