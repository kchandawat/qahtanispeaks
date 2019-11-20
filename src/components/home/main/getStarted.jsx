import React from "react";

const GetStarted = () => {
  return (
    <div className="sign-up pri-pad-b">
      <div className="parallax-wrap">
        <div className="image" data-type="background" data-speed="14">
          <div className="stuff pri-pad">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-sm-5 col-sm-offset-4">
                  <div className="dark-blue box text-white">
                    <h3 className="text-white">
                      You’re meant for some thing <span>BIG </span> & it{" "}
                      <span>Starts Here!</span>
                    </h3>
                    <div className="content-wrap mb-45">
                      <p />
                    </div>

                    <form action="#">
                      <div className="form-group mb-25">
                        <input type="text" placeholder="Full Name" />
                      </div>

                      <div className="form-group mb-25">
                        <input type="text" placeholder="Email Address" />
                      </div>

                      <div className="form-group mb-0 text-center">
                        <input
                          type="submit"
                          className="btn sec-bg"
                          value="get started now!"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
