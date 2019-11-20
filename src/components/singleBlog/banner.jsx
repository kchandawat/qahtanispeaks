import React from "react";

const Banner = props => {
  const { post } = props;
  return (
    <div className="banner main-banner inner-banner">
      <div className="fixed-banner blog-single overlay">
        <div className="banner-content">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-12">
                <div className="content-wrap text-center text-white">
                  <div className="inner">
                    <div className="tagcloud">
                      <a>Coaching</a>
                    </div>

                    <h3 className="text-white">{post["title"]}</h3>

                    <div className="mb-10">
                      <p>{post["more"]}</p>
                    </div>

                    <div className="post-info">
                      <span>
                        <i className="fa fa-calendar" />{" "}
                        {new Date(post["date"]).toDateString()}
                      </span>
                      <span>
                        <i className="fa fa-user" /> Mohammed Qahtani{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
