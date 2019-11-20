import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import $ from "jquery/src/jquery";
import "../../../assets/js/YouTubePopUp.jquery.js";
import "../../../assets/css/YouTubePopUp.css";
import "antd/dist/antd.css";

import Like from "./like";
import { Link } from "react-router-dom";
class Blog extends Component {
  state = {};
  initializeJq = () => {
    var $abla1 = $("a.bla-1");
    $abla1.YouTubePopUp();
  };
  componentDidMount() {
    this.initializeJq();
  }
  componentDidUpdate(prevProps, prevState) {
    this.initializeJq();
  }
  /* parser code (c) khush chandawat */
  transform = post => {
    let parsedText = post;
    var split = parsedText.split("<p>");
    parsedText = "";
    split.map(item => {
      parsedText = parsedText + "<p>" + item + "</p>";
    });
    var regx = /[ ]*[A-Z]+[^a-z]*[A-Z]+[ \.\n]/g;
    var str = parsedText.replace(regx, x => {
      x = x.replace(/\w\S*/g, function(txt) {
        txt = txt.toLowerCase();
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
      return "<h4>" + x.trim() + " </h4><br/> ";
    });
    regx = /(?:\*)([^*]*)(?:\*)/g;
    str = str.replace(regx, "<b>$1</b>");
    regx = /(?:\")([^"]*)(?:\")/g;
    str = str.replace(regx, "<blockquote><p>$1</p> </blockquote>");
    return str;
  };

  render() {
    const { post } = this.props;
    let prev;
    let next;

    let { posts } = this.props;

    let str = this.transform(post["description"]);
    let shortVideoId = String(post["video"]).split("youtu.be/");
    let longVideoId = String(post["video"]).split("v=");
    longVideoId = String(longVideoId[1]).split("&");
    const videoId = shortVideoId[1] ? shortVideoId[1] : longVideoId[0];
    Object.keys(posts).some((key, index) => {
      if (posts[key]["title"] == post["title"]) {
        prev = posts[Object.keys(posts)[index - 1]]
          ? posts[Object.keys(posts)[index - 1]]
          : null;
        next = posts[Object.keys(posts)[index + 1]]
          ? posts[Object.keys(posts)[index + 1]]
          : null;
        return true;
      }
    });
    return (
      <div className="blog-single style2 mb-70">
        <div className="content-wrap entry-content clearfix">
          <img
            src={post["Imgurl"]}
            style={{ maxHeight: "460px" }}
            className="alignleft"
            alt=""
          />
          <br />

          {ReactHtmlParser(str)}
          {post["video"].trim() !== "" && (
            <div style={{ margin: "auto" }}>
              <div className="col-md-5 col-sm-6">
                <div className="vid-wrap">
                  <figure className="overlay">
                    <img
                      src={
                        "https://img.youtube.com/vi/" +
                        videoId +
                        "/hqdefault.jpg"
                      }
                      alt=""
                    />
                  </figure>
                  <a href={post["video"]} className="bla-1 play-btn dafoe">
                    <span>
                      <i className="fa fa-play" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <Like id={post["key"]} />

        <div className="bottom box-border clearfix mb-40">
          <div className="share">
            <span className="pull-left">Share this post</span>
            <ul className="social-icons pull-right">
              <li>
                {" "}
                <a
                  href={
                    "https://www.facebook.com/sharer/sharer.php?u=" +
                    window.location.href
                  }
                >
                  <i className="fa fa-facebook" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href={
                    "http://twitter.com/share?text=Checkout this amazing blog by world champion of public speaking on " +
                    post["title"] +
                    "&url=" +
                    window.location.href +
                    "&hashtags=MohammedQahtani,QahtaniSpeaks,NewArticleAlert"
                  }
                >
                  <i className="fa fa-twitter" />
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  href={
                    "https://www.linkedin.com/shareArticle?mini=true&url=" +
                    window.location.href +
                    "&title=" +
                    post["title"] +
                    "&summary=Checkout this amazing blog by world champion of public speaking on " +
                    post["title"] +
                    "&source="
                  }
                >
                  <i className="fa fa-linkedin" />
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="btn-wrap">
          {prev && (
            <div className="wrap text-left">
              <Link to={"/blog/" + prev["key"]} className="btn-link">
                Previous Post
              </Link>
              <h5 className="entry-title">
                <Link to={"/blog/" + prev["key"]} className="btn-link">
                  {prev["title"]}
                </Link>
              </h5>
            </div>
          )}

          {next && (
            <div className="wrap text-right">
              <Link to={"/blog/" + next["key"]} className="btn-link">
                Next Post
              </Link>
              <h5 className="entry-title">
                <Link to={"/blog/" + next["key"]} className="btn-link">
                  {next["title"]}
                </Link>
              </h5>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Blog;
