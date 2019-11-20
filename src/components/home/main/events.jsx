import React, { Component } from "react";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { Spin, Icon } from "antd";
import $ from "jquery/src/jquery";
import "../../assets/js/jquery.bxslider.min.js";

const antIcon = (
  <Icon
    type="loading"
    style={{
      fontSize: 96
    }}
    spin
  />
);

class Events extends Component {
  state = {};
  componentDidUpdate(prevProps, prevState) {
    this.initializeJq();
  }
  componentDidMount() {
    this.initializeJq();
  }

  render() {
    let { events } = this.props;

    console.log(events);
    if (events) {
      if (events.length > 3) events = events.slice(0, 3);
      return (
        <div className="up-comming-event pri-pad-b">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <ul className="up-comming-list up-comming-slide">
                  {events.map((event, index) => {
                    let parsedText = event["value"]["about"];
                    var split = parsedText.split("<p>");
                    return (
                      <li key={index}>
                        <div className="row">
                          <div className="col-sm-7">
                            <figure>
                              <Link
                                to={"/event/" + event["key"]}
                                className="image-effect"
                              >
                                <img
                                  src={event["value"]["image"]}
                                  alt=""
                                  style={{ maxHeight: "600px" }}
                                />
                              </Link>
                            </figure>
                          </div>

                          <div className="col-sm-5 text-center right">
                            <small>
                              {new Date(
                                event["value"]["lastDate"]
                              ).toDateString()}{" "}
                              | {event["value"]["Location"]}
                            </small>
                            <h5 className="border-title mb-35">
                              <Link to={"/event/" + event["key"]}>
                                {event["value"]["name"]}
                              </Link>
                            </h5>
                            <div className="content-wrap">
                              <p>{split[0] + "..."}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  initializeJq = () => {
    var $upcommingslide = $(".up-comming-slide");
    $upcommingslide.bxSlider({
      auto: true,
      pager: false,
      touchEnabled: false
    });
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    events: state.firebase.ordered.events
      ? state.firebase.ordered.events.slice().reverse()
      : null
  };
};

export default compose(
  connect(mapStateToProps),
  firebaseConnect([
    {
      path: "/events",
      queryParams: ["orderByChild=lastDate"]
    }
  ])
)(Events);
