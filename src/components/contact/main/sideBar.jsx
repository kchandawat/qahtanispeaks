import React from "react";

const SideBar = () => {
  return (
    <div className="col-md-3 col-sm-3 right-block sidebar">
      {/* <div className="subscription widget text-center">
        <h3>
          <span>Subscribe For Getting Access To</span> EXCLUSIVE CONTENT
        </h3>
        <form action="#">
          <div className="form-group">
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="form-group">
            <input type="text" placeholder="Your Email" />
          </div>

          <input type="submit" className="btn" value="subscribe now!" />
        </form>
      </div> */}

      <div className="widget">
        <a
          href="https://www.youtube.com/watch?v=aRpaRwBM2hc"
          className="image-effect"
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/images/sidebar-banner.jpg"}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default SideBar;
