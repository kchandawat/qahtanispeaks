import React, { Component } from "react";
import SlideTop from "./slide-top";
import Main from "./main";
import $ from "jquery/src/jquery";
import "../assets/js/jquery.bxslider.min.js";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import { MetaTags } from "react-meta-tags";
class Home extends Component {
  componentDidMount() {
    this.InitializeJquery();
    document.title = "Welcome to Qahtani Speaks";
  }
  componentDidUpdate() {
    this.InitializeJquery();
  }
  state = {};
  render() {
    return (
      <div className="App">
        <MetaTags>
          <meta
            name="description"
            content="Impacting the Soul and Purpose of Today’s Leader
              Mohammed Qahtani is a leading Coach, Mentor and Speaker
              Get coached by the world champion himself and experiece the change in you.Mohammed Qahtani, a Saudi Arabian engineer, won the Toastmasters World Championship of Public Speaking. Qahtani, won after several eliminating rounds that took six months with 30,000 participants from more than 100 countries."
          />
          <meta name="robots" content="index, follow" />
        </MetaTags>
        <SlideTop home={this.props.Home} />
        <Main />
      </div>
    );
  }
  InitializeJquery = () => {
    var $win = $(window),
      $header = $("header"),
      $scrollup = $(".scrollup"),
      $htmlbody = $("html, body"),
      $praiseslide = $(".praise-slide");

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

    if ($win.width() > 767) {
      $praiseslide.bxSlider({
        minSlides: 3,
        maxSlides: 4,
        slideWidth: 370,
        slideMargin: 30,
        moveSlides: 1,
        auto: true,
        pager: false
      });
    } else {
      $praiseslide.bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 370,
        slideMargin: 30,
        moveSlides: 1,
        auto: true,
        pager: false
      });
    }
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    Home: state.firebase.ordered.Home
  };
};
export default compose(
  connect(mapStateToProps),
  firebaseConnect([
    {
      path: "/Home"
    }
  ])
)(Home);
