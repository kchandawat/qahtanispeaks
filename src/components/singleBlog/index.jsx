import React, { Component } from "react";

import $ from "jquery/src/jquery";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import "../assets/js/jquery.countdown.min.js";
import "../assets/js/YouTubePopUp.jquery.js";
import Error from "./error";
import Image from "material-ui-image";
import Banner from "./banner";
import Main from "./main";
import { MetaTags } from "react-meta-tags";
class SingleBlog extends Component {
  state = {};
  componentDidMount() {
    this.initializeJq();
    document.title = "Loading Article";
  }
  componentDidUpdate(prevProps, prevState) {
    this.initializeJq();
  }
  render() {
    if (this.props.posts) {
      return (
        <div>
          <MetaTags>
            <meta
              name="description"
              content={
                this.props.posts["title"] +
                " : " +
                this.props.posts["description"].split("<p>")[0]
              }
            />
            <title>{this.props.posts["title"]}</title>
            <meta name="robots" content="index, follow" />
          </MetaTags>
          <Banner post={this.props.posts} />
          <Main posts={this.props.post} post={this.props.posts} />
        </div>
      );
    } else {
      if (!this.props.requested["posts"])
        return (
          <Image
            onClick={() => console.log("onClick")}
            src=""
            style={{ marginTop: "2vh", marginBottom: "50vh" }}
            aspectRatio={16 / 9}
          />
        );
      else {
        document.title = "404 Article Not Found";
        return <Error />;
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
    posts: state.firebase.data.posts ? state.firebase.data.posts[id] : null,
    post: state.firebase.data.posts ? state.firebase.data.posts : null,
    requested: state.firebase.requested ? state.firebase.requested : null
  };
};

export default compose(
  connect(mapStateToProps),
  firebaseConnect([{ path: "posts/" }])
)(SingleBlog);
