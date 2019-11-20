import React, { Component } from "react";
import Banner from "./banner";
import Main from "./main";
import $ from "jquery/src/jquery";
import MetaTags from "react-meta-tags";
class Contact extends Component {
  state = {};
  componentDidMount() {
    document.title = "Contact Me ";
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
            content="Contact Mohammed Qahtani in case of any queries or to get personally mentored. CONTACT ME
            You can reach me via the form below."
          />
          <meta name="robots" content="index, follow" />
        </MetaTags>
        <Banner />
        <Main />
      </div>
    );
  }
}

export default Contact;
