import React from "react";
import { Link } from "react-router-dom";

const Offering = () => {
  return (
    <div className="intro pri-pad-b">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-sm-10 col-sm-offset-1">
            <div className="title-wrap text-center mb-35">
              <h2>Impacting the Soul and Purpose of Today’s Leader</h2>
              <h5>Mohammed Qahtani is a leading Coach, Mentor and Speaker </h5>
            </div>

            <div className="content-wrap text-center mb-45">
              <p>
                Get coached by the world champion himself and experiece the
                change in you..
              </p>
            </div>
          </div>
        </div>

        <div className="row coaching-cat">
          <div className="col-md-4 col-sm-4">
            <div className="border-box sec-border animated-border text-center">
              <h5 className="border-title mb-30">KEYNOTES & SEMINARS</h5>
              <div className="content-wrap">
                <p>
                  Mohammed Qahtani is one of the most preferred motivational
                  speakers today. With over 9,000 hours of stage time and
                  speaking engagements across the globe, Mohammed is known for
                  his ability to connect with an International audience.
                </p>
              </div>

              <Link to="/book/keynote" className="btn sec-bg text-uppercase">
                Book now!
              </Link>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="border-box sec-border animated-border text-center">
              <h5 className="border-title mb-30">WORKSHOPS</h5>
              <div className="content-wrap">
                <p>
                  Become a Better You” a series of World Class Development
                  Programmes offered by Mohammed Qahtani highlighting important
                  Tips & Techniques of Presentation Skills, CRM, Sales
                  Negotiations and Communication Skills.
                </p>
              </div>

              <Link to="/book/workshop" className="btn sec-bg text-uppercase">
                Book now!
              </Link>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="border-box sec-border animated-border text-center">
              <h5 className="border-title mb-30">COACHING</h5>
              <div className="content-wrap">
                <p>
                  If you’re a leader or an aspiring leader, work with Mohammed
                  Qahtani on a 10 – Week Communication Master-Class that can be
                  tailored to meet your specific requirement.
                  <br />
                  <br />
                </p>
              </div>

              <Link to="/book/coaching" className="btn sec-bg text-uppercase">
                Book now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offering;
