import React, { Component } from "react";
import withFirebasePagination from "firebase-react-paginated";
import firebase from "../../firebase";
import $ from "jquery/src/jquery";
import Banner from "./banner";
import Main from "./main";
import Image from "material-ui-image";
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import { Empty, Button, Layout } from "antd";
import "antd/dist/antd.css";
const { Content } = Layout;
class BlogList extends Component {
  componentDidMount() {
    document.title = "Articles and Videos";
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
  state = {};
  render() {
    console.log(this.props);
    if (this.props.pageItems.length > 0) {
      return (
        <div>
          <MetaTags>
            <meta
              name="description"
              content="ARTICLES AND VIDEOS
Stay updated with the latest articles and video, scroll now to view latest content by the world champion himself."
            />
            <meta name="robots" content="index, follow" />
          </MetaTags>
          <Banner />
          <Main data={this.props} />
        </div>
      );
    } else {
      if (this.props.isLoading)
        return (
          <Image
            onClick={() => console.log("onClick")}
            src=""
            style={{ marginTop: "2vh", marginBottom: "50vh" }}
            aspectRatio={16 / 9}
          />
        );
      else {
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
                    No recent posts <Link to="/events">Upcoming Events</Link>
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
  }
}

export default withFirebasePagination(firebase)({
  path: "posts/",
  length: 15,
  orderBy: "date"
})(BlogList);
