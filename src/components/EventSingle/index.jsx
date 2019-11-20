import React, { Component } from "react";
import $ from "jquery/src/jquery";
import "../assets/js/jquery.countdown.min.js";
import "../assets/js/YouTubePopUp.jquery.js";
import MainBanner from "./mainBanner";
import Main from "./main";
import "../assets/css/YouTubePopUp.css";
import { FetchEvent } from "../../actions";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import Error from "./error";
import Image from "material-ui-image";
import { MetaTags } from "react-meta-tags";
class EventSingle extends Component {
  componentDidUpdate() {
    this.initializeJq();
  }

  componentDidMount() {
    document.title = "Loading Event";
    this.initializeJq();
  }

  render() {
    if (this.props.events) {
      return (
        <div>
          <MetaTags>
            <meta
              name="description"
              content={
                this.props.events["name"] +
                " : " +
                this.props.events["about"].split("<p>")[0]
              }
            />
            <meta name="robots" content="index, follow" />
            <title>{this.props.events["name"]}</title>
          </MetaTags>
          <MainBanner event={this.props.events} />

          <Main event={this.props.events} />
        </div>
      );
    } else {
      if (!this.props.requested["events"])
        return (
          <div>
            <Image
              onClick={() => console.log("onClick")}
              src=""
              aspectRatio={16 / 9}
              style={{ marginTop: "2vh", marginBottom: "50vh" }}
            />
          </div>
        );
      else {
        document.title = "404 Event Not Found";

        return <Error></Error>;
      }
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
  const id = ownProps.match.params.id;

  return {
    events: state.firebase.data.events ? state.firebase.data.events[id] : null,
    requested: state.firebase.requested ? state.firebase.requested : null
  };
};

export default compose(
  connect(mapStateToProps),
  firebaseConnect([{ path: "events/" }])
)(EventSingle);
