import React from "react";
const Counter = props => {
  const { event } = props;
  const lastDate = event["lastDate"];
  const date = new Date(lastDate);
  const timestamp = Date.now();
  const formatted =
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
  const validURL = str => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };
  return (
    <div className="about-count-down pri-pad-b">
      <div className="parallax-wrap">
        <div
          className="image overlay"
          data-type="background"
          data-speed="12"
          style={{ backgroundPosition: "50% 12.5833px" }}
        >
          <div className="stuff text-white">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 text-center">
                  <div className="title-wrap mb-60">
                    <h2 className="text-white text-uppercase">
                      confirm your seat today!
                    </h2>
                  </div>

                  <div
                    className="count-down-wrap mb-60"
                    data-end-date={formatted}
                  />
                  {validURL(event["registrationLink"]) && (
                    <a
                      href={event["registrationLink"]}
                      disabled={timestamp >= lastDate}
                      className="btn btn-lg sec-bg text-white text-uppercase"
                    >
                      {" "}
                      confirm my seat{" "}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
