import React from "react";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { Spin, Icon } from "antd";

const antIcon = (
  <Icon
    type="loading"
    style={{
      fontSize: 96
    }}
    spin
  />
);

const Blogs = props => {
  let { posts } = props;

  if (posts) {
    posts = posts.slice(0, 3);
    return (
      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-sm-10 col-sm-offset-1 text-center">
              <div className="title-wrap mb-50">
                <h2>Latest from Blog</h2>
                <p></p>
              </div>
            </div>

            {posts.map((post, index) => {
              let about = post["value"]["description"];
              about = about.split("<p>");
              about = about[0];
              about = about.toLowerCase();
              about = about.length > 180 ? about.indexOf(0, 181) : about;
              return (
                <div className="col-md-4 col-sm-4" key={index}>
                  <div className="blog-wrap">
                    <figure>
                      <Link
                        to={"/blog/" + post["key"]}
                        className="image-effect overlay"
                      >
                        <img
                          src={post["value"]["Imgurl"]}
                          style={{
                            width: "460px",
                            height: "360px",
                            objectFit: "cover"
                          }}
                          alt=""
                        />
                      </Link>
                    </figure>

                    <div className="post-info">
                      <span>
                        {new Date(post["value"]["date"]).toDateString()}
                      </span>
                    </div>

                    <h5>
                      <Link to={"/blog/" + post["key"]}>
                        {post["value"]["title"]}
                      </Link>
                    </h5>

                    <div className="content-wrap mb-0">
                      <p>{about + "..."}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.firebase.ordered.posts
      ? state.firebase.ordered.posts.slice().reverse()
      : null
  };
};

export default compose(
  connect(mapStateToProps),
  firebaseConnect([
    {
      path: "/posts",
      queryParams: ["orderByChild=date"]
    }
  ])
)(Blogs);
