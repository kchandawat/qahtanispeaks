import React from "react";

const MainBanner = props => {
  const { event } = props;
  const lastDate = event["lastDate"];
  const date = new Date(lastDate);
  const timestamp = Date.now();
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
    <div className="banner main-banner inner-banner">
      <div className="fixed-banner event-banner event-single overlay">
        <div className="banner-content">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-12">
                <div className="content-wrap text-center text-white">
                  <div className="inner">
                    <div className="mb-60">
                      <h3 className="text-white">{event["name"]}</h3>
                      <p>
                        {date.toDateString()} | {event["Location"]}
                      </p>
                    </div>
                    {validURL(event["registrationLink"]) && (
                      <div className="button-wrap">
                        <a
                          href={event["registrationLink"]}
                          disabled={timestamp >= lastDate}
                          className="btn sec-bg text-uppercase"
                        >
                          confirm my seat
                        </a>
                      </div>
                    )}
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

export default MainBanner;
