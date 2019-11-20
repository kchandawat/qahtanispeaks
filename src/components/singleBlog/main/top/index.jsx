import React from "react";
import Blog from "./blog";
import Subscribe from "./subscribe";
import Author from "./author";

const Top = props => {
  return (
    <div className="blog-single-top pri-pad">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 blog-single">
            <Blog posts={props.posts} post={props.post} />
            <Subscribe post={props.post} />
            <Author post={props.post} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
