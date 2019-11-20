import React, { Component } from "react";
import Banner from "./banner";
import Main from "./main";
import MetaTags from "react-meta-tags";
import $ from "jquery/src/jquery";

class Book extends Component {
  state = {
    eventType:
      this.props.match.params.eventType === "keynote"
        ? 1
        : this.props.match.params.eventType === "coaching"
        ? 2
        : this.props.match.params.eventType === "workshop"
        ? 3
        : 1
  };
  componentDidMount() {
    document.title = "Book Me";
    var $win = $(window),
      $header = $("header");
    $win.scroll(function() {
      if ($(this).scrollTop() > 0) {
        $header.addClass("scrolled");
      } else {
        $header.removeClass("scrolled");
      }
    });
  }
  componentDidUpdate(prevProps, prevState) {
    var $win = $(window),
      $header = $("header");
    $win.scroll(function() {
      if ($(this).scrollTop() > 0) {
        $header.addClass("scrolled");
      } else {
        $header.removeClass("scrolled");
      }
    });
  }
  render() {
    return (
      <div>
        <MetaTags>
          <meta
            name="description"
            content="MOHAMMED QAHTANI
              CHAMPION SPEAKER | CORPORATE TRAINER | PUBLIC SPEAKING & COMMUNICATION COACH Book Mohammed Qahtani To get personally mentored"
          />
          <meta name="robots" content="index, follow" />
        </MetaTags>
        <Banner />
        <Main eventType={this.state.eventType} />
      </div>
    );
  }
}

export default Book;
