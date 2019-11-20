import React, { Component } from "react";
import $ from "jquery/src/jquery";
import "../assets/js/jquery.countdown.min.js";
import "../assets/js/YouTubePopUp.jquery.js";

import Banner from "./banner";

import Main from "./main";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import Image from "material-ui-image";
import { Link } from "react-router-dom";
import { MetaTags } from "react-meta-tags";
import { Empty, Button, Layout } from "antd";
import "antd/dist/antd.css";
const { Content } = Layout;
class EventList extends Component {
  state = {};
  componentDidUpdate() {
    this.initializeJq();
  }
  componentWillUnmount() {
    this.forceUpdate();
    console.log("unmount");
  }
  componentDidMount() {
    this.initializeJq();
    document.title = "Upcoming Events";
  }
  render() {
    if (this.props.events) {
      return (
        <div>
          <MetaTags>
            <meta
              name="description"
              content="OUR EVENTS
            Confirmed International Speaking and Seminar Engagements. View latest events by the champion himself take this opportunity to get personally mentored"
            />
            <meta name="robots" content="index, follow" />
          </MetaTags>
          <Banner />
          <Main event={this.props.events} />
        </div>
      );
    } else {
      if (!this.props.requested["events"])
        return (
          <Image
            onClick={() => console.log("onClick")}
            src=""
            style={{ marginTop: "2vh", marginBottom: "50vh" }}
            aspectRatio={16 / 9}
          />
        );
      else
        return (
          <Layout>
            <Content>
              <Empty
                image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                style={{
                  heigh: "100%",
                  margin: "40vh 0"
                }}
                imageStyle={{
                  height: 60
                }}
                description={
                  <span>
                    No upcoming events <Link to="/blogs">Learn More</Link>
                  </span>
                }
              >
                <Link to="/">
                  <Button type="primary">Home</Button>
                </Link>
              </Empty>
            </Content>
          </Layout>
        );
    }
  }
  initializeJq = () => {
    var $countWrap = $(".count-down-wrap"),
      $win = $(window),
      $header = $("header"),
      $scrollup = $(".scrollup"),
      $htmlbody = $("html, body"),
      $abla1 = $("a.bla-1");

    $win.scroll(function() {
      if ($(this).scrollTop() > 0) {
        $header.addClass("scrolled");
      } else {
        $header.removeClass("scrolled");
      }
    });

    //Back to top
    $win.scroll(function() {
      if ($(this).scrollTop() > 200) {
        $scrollup.fadeIn();
      } else {
        $scrollup.fadeOut();
      }
    });

    $scrollup.on("click", function() {
      $htmlbody.animate(
        {
          scrollTop: 0
        },
        600
      );
      return false;
    });

    if ($countWrap.length) {
      var endDate = $countWrap.attr("data-end-date");
      $countWrap.countdown({
        date: endDate,
        render: function(data) {
          $(this.el).html(
            '<div class="wrap"><h4>' +
              this.leadingZeros(data.days, 2) +
              "</h4> <span>DAYS </span></div>" +
              '<div class="wrap"><h4>' +
              this.leadingZeros(data.hours, 2) +
              "</h4> <span>HOURS </span></div>" +
              '<div class="wrap"><h4>' +
              this.leadingZeros(data.min, 2) +
              "</h4> <span>MINS </span></div>" +
              '<div class="wrap"><h4>' +
              this.leadingZeros(data.sec, 2) +
              "</h4> <span>SEC </span></div>"
          );
        }
      });
    }
    $abla1.YouTubePopUp();
  };
}
const mapStateToProps = (state, ownProps) => {
  return {
    events: state.firebase.ordered.events
      ? state.firebase.ordered.events.slice().reverse()
      : null,
    requested: state.firebase.requested ? state.firebase.requested : null
  };
};

export default compose(
  connect(mapStateToProps),
  firebaseConnect([
    {
      path: "events/",
      queryParams: ["orderByChild=lastDate", "limitToLast=5"]
    }
  ])
)(EventList);
