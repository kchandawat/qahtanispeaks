import React from "react";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";

import { Spin, Icon } from "antd";

const antIcon = (
  <Icon
    type="loading"
    style={{
      fontSize: 96
    }}
    spin
  />
);

const Stories = props => {
  const { feedback } = props;
  if (feedback) {
    return (
      <div className="praise pri-pad-b">
        <div className="parallax-wrap">
          <div className="image" data-type="background" data-speed="12">
            <div className="stuff pri-pad text-white text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="title-wrap mb-50">
                      <h2 className="mb-0">Stories</h2>
                    </div>
                  </div>

                  <div className="col-md-12 col-sm-12">
                    <ul className="prise-list praise-slide">
                      {feedback.map((feed, index) => (
                        <li key={index}>
                          <div className="box">
                            <div className="content-wrap mb-70">
                              <p>
                                <em>{feed["feedback"]}</em>
                              </p>
                            </div>
                          </div>

                          <div className="author">
                            <figure className="rounded-crcl">
                              <img src={feed["img"]} alt="" />
                            </figure>
                            {feed["name"]}
                            <span>{feed["work"]}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Spin
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",

            padding: "200px 0px",
            width: "40%"
          }}
          indicator={antIcon}
        />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    feedback: state.firebase.data.Home
      ? state.firebase.data.Home.feedback
      : null
  };
};

export default compose(
  connect(mapStateToProps),
  firebaseConnect([
    {
      path: "/Home/feedback"
    }
  ])
)(Stories);
