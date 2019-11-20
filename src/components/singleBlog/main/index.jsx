import React, { Component } from "react";
import Related from "./related";
import $ from "jquery";
import "../../assets/js/slick.min.js";
import Top from "./top";
class Main extends Component {
  state = {};
  componentDidMount() {
    this.initJq();
  }

  render() {
    return (
      <main className="main blog-single-page">
        <Top posts={this.props.posts} post={this.props.post} />
        <Related posts={this.props.posts} post={this.props.post} />
      </main>
    );
  }
  initJq = () => {
    var $relatedslide = $(".related-slide");
    $relatedslide.not(".slick-initialized").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      draggable: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  };
}

export default Main;
