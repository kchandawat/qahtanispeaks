import React from "react";
import { Link } from "react-router-dom";

const Book = () => {
  return (
    <div className="featured-sale ">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-7 left text-center">
            <div className="title-wrap text-center mb-35">
              <h2 className="text-uppercase">The Power of Words</h2>
              <h5>The journey of a stuttering champion.</h5>
            </div>

            <div className="content-wrap text-center mb-45">
              <p>
                a young boy born with a sever stuttering. was laughed at and
                mocked as a child. grew up later to be the world champion of
                public speaking. becoming a motivational speaker in over 30
                countries. this is the story of his journey
              </p>
            </div>

            <Link
              to="/The+Power+Of+Words"
              className="btn btn-lg text-uppercase"
            >
              Order now!
            </Link>
          </div>

          <div className="col-md-5 col-sm-5 right">
            <figure>
              <img src="assets/images/book.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
