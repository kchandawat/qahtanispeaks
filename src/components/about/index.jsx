import React, { Component } from "react";

import $ from "jquery/src/jquery";
import "../assets/js/jquery.counterup.min.js";
import Clients from "./Clients";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { Spin, Icon } from "antd";
import { MetaTags } from "react-meta-tags";
const antIcon = (
  <Icon
    type="loading"
    style={{
      fontSize: 96
    }}
    spin
  />
);

class About extends Component {
  componentDidMount() {
    this.initializeJq();
  }
  state = {};
  render() {
    const { company } = this.props;
    return (
      <div>
        <MetaTags>
          <meta
            name="description"
            content="A small glimpse into Mohammed Qahtanis life.Mohammed Qahtani, a Saudi Arabian engineer, won the Toastmasters World Championship of Public Speaking. Qahtani, won after several eliminating rounds that took six months with 30,000 participants from more than 100 countries."
          />
          <meta name="robots" content="index, follow" />
        </MetaTags>
        <div className="banner main-banner home2">
          <div className="fixed-banner about2 overlay">
            <div className="banner-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-sm-8 col-sm-offset-2 col-xs-12 ">
                    <div className="content-wrap text-center">
                      <div className="inner text-white">
                        <h2 className="mb-10">about me</h2>
                        <p>A small glimpse into my life</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="main">
          <div className="about-intro pri-pad pb-0">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="content-wrap">
                    <p>
                      <strong>
                        Mohammed Qahtani, a Saudi Arabian engineer, won the
                        Toastmasters World Championship of Public Speaking.
                        Qahtani, won after several eliminating rounds that took
                        six months with 30,000 participants from more than 100
                        countries.
                      </strong>
                    </p>
                    <p>
                      Growning up he suffered from severe stuttering but he was
                      able to overcome it by facing his fears, pushing the
                      envelope and performing on stage. He is passionate about
                      public speaking and stand up comedy. He has participated
                      in several conferences around the world where he inspires
                      people to chase their dreams.
                    </p>

                    <p>
                      Mohammed speaks about several topics such as coping with change, 
                      Empowerment in the workplace, building the perfect team, the art of
                      negotiation and using powerful words when speaking.
                    </p>
                  </div>

                  <span className="font-sig name">Mohammed Qahtani</span>
                </div>

                <div className="col-md-5 col-sm-5 col-sm-offset-1">
                  <figure style={{ margin: "0 0 0em" }}>
                    <img src="assets/images/about-intro-bg.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div className="time-line">
            <div className="primary-bg text-white">
              <div className="container">
                <div className="row hidden-xs">
                  <div className="col-md-5 col-sm-5">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="active">
                        <span className="date">September 26th 1980</span>
                        <a
                          href="#time1"
                          data-toggle="tab"
                          className="faa-parent animated-hover"
                        >
                          <i className="fa fa-circle-o faa-burst"></i>
                        </a>
                        <span className="event">Birth Day</span>
                      </li>

                      <li>
                        <span className="date">2003</span>
                        <a
                          href="#time2"
                          data-toggle="tab"
                          className="faa-parent animated-hover"
                        >
                          <i className="fa fa-circle-o faa-burst"></i>
                        </a>
                        <span className="event">
                          Graduated from Arizona State University
                        </span>
                      </li>

                      <li>
                        <span className="date">2004</span>
                        <a
                          href="#time3"
                          data-toggle="tab"
                          className="faa-parent animated-hover"
                        >
                          <i className="fa fa-circle-o faa-burst"></i>
                        </a>
                        <span className="event">
                          Started working as System Analyst at Saudi Aramco
                        </span>
                      </li>

                      <li>
                        <span className="date">2015</span>
                        <a
                          href="#time4"
                          data-toggle="tab"
                          className="faa-parent animated-hover"
                        >
                          <i className="fa fa-circle-o faa-burst"></i>
                        </a>
                        <span className="event">
                          Became the World Champion of Public Speaking
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-7 col-sm-7">
                    <div className="tab-content">
                      <div className="tab-pane active" id="time1">
                        <h3>Mohammed Qahtani</h3>
                        <p>
                          Growning up he suffered from severe stuttering but he
                          was able to overcome it by facing his fears, pushing
                          the envelope and performing on stage. He is passionate
                          about public speaking and stand up comedy. He has
                          participated in several conferences around the world
                          where he inspires people to chase their dreams.
                        </p>

                        <p>
                          {/* Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, printer took a galley of
                          type and scrambled it to make a type specimen book. */}
                        </p>

                        <p>
                          {/* Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown, It has survived not only five
                          centuries, but also the leap into electronic
                          typesetting, printer took a galley of type and
                          scrambled it to make a type specimen book. */}
                        </p>
                      </div>

                      <div className="tab-pane" id="time2">
                        <h3>Higher Studies</h3>
                        <p>
                          Mohammad Qahtani was very much deep into technology at
                          this stage of life and decided to persue computer
                          science engineering as his career.
                        </p>
                      </div>

                      <div className="tab-pane" id="time3">
                        <h3>Engineer from heart</h3>
                        <p>
                          He is successful both in engineering and public
                          speaking and is a certified programmer from Microsoft
                          and SAP, certified database administrator from Oracle
                          and Microsoft, and certified advance speaker Gold from
                          Toastmaster international.
                        </p>

                        <p>
                          {/* Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown */}
                        </p>
                      </div>

                      <div className="tab-pane" id="time4">
                        <h3>The World Championship</h3>
                        <p>
                          On August 15, Saudi Arabian security engineer Mohammed
                          Qahtani won the title of Toastmasters International
                          World Champion of Public Speaking. He survived seven
                          rounds of a competition that lasted six months and
                          included 33,000 competitors from around the world.
                        </p>

                        <p>
                          He and nine other finalists competed at the
                          Toastmasters annual convention in Las Vegas, and he
                          took home first place for his speech "The Power of
                          Words,"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="visible-xs time-line-accordion  pri-pad">
                  <div id="accordion">
                    <h3>
                      <span>September 26th 1980 </span>
                      Birth Day
                    </h3>

                    <div>
                      <p>
                        Growning up he suffered from severe stuttering but he
                        was able to overcome it by facing his fears, pushing the
                        envelope and performing on stage. He is passionate about
                        public speaking and stand up comedy. He has participated
                        in several conferences around the world where he
                        inspires people to chase their dreams.
                      </p>
                    </div>

                    <h3>
                      <span>2004 </span>
                      Started working as System Analyst at Saudi Aramco
                    </h3>

                    <div>
                      <p>
                        He is successful both in engineering and public speaking
                        and is a certified programmer from Microsoft and SAP,
                        certified database administrator from Oracle and
                        Microsoft, and certified advance speaker Gold from
                        Toastmaster international.
                      </p>
                    </div>

                    <h3>
                      <span>2015 August 15 </span>
                      Became the World Champion of Public Speaking
                    </h3>

                    <div>
                      <p>
                        On August 15, Saudi Arabian security engineer Mohammed
                        Qahtani won the title of Toastmasters International
                        World Champion of Public Speaking. He survived seven
                        rounds of a competition that lasted six months and
                        included 33,000 competitors from around the world.
                      </p>

                      <p>
                        He and nine other finalists competed at the Toastmasters
                        annual convention in Las Vegas, and he took home first
                        place for his speech "The Power of Words,"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fun-fact pri-pad-b">
            <div className="soft-gray pri-pad">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-sm-10 col-sm-offset-1">
                    <div className="title-wrap text-center mb-25">
                      <h2>Fun Facts</h2>
                    </div>

                    <div className="fact-wrap">
                      <div className="no">
                        <span className="counter">35</span>+
                      </div>{" "}
                      Countries
                    </div>

                    <div className="fact-wrap">
                      <div className="no">
                        <span className="counter">350</span>
                      </div>{" "}
                      Keynotes given
                    </div>

                    <div className="fact-wrap">
                      <div className="no">
                        <span className="counter">220</span>
                      </div>{" "}
                      Workshop Conducted
                    </div>

                    <div className="fact-wrap">
                      <div className="no">
                        <span className="counter">2</span>M
                      </div>{" "}
                      User Base Worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="clients pri-pad-b">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <ul className="clients">
                    <li>
                      <div className="content-wrap mb-25">
                        <p>
                          when you compete for something stupid as a trophy, you
                          set yourself up for failure, because you never know
                          how the competition will work out and how you will
                          deal with failure. you are just setting yourself up
                          for despair.
                        </p>
                      </div>

                      <div className="author">
                        Mohammed Qahtani
                        <span>WCPS 2015</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="col-md-6 col-sm-6 text-center">
                  <p>
                    <strong>Our elite</strong> Clients
                  </p>
                  <div className="img-wrap">
                    {(company &&
                      company.map((comp, index) => (
                        <Clients key={index} img={comp} />
                      ))) || (
                      <div>
                        <Spin
                          style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",

                            padding: "200px 0px",
                            width: "40%"
                          }}
                          indicator={antIcon}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="promo-banner">
            <div className="row no-gutter">
              <div className="col-md-6 col-sm-6 p-0">
                <div className="promo3">
                  <div className="content">
                    <Link to="/events" className="btn btn-lg bdr">
                      Upcoming Events!
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-6 p-0">
                <div className="promo4">
                  <div className="content">
                    <Link to="/blogs" className="btn btn-lg bdr">
                      Blogs!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  initializeJq = () => {
    var $win = $(window),
      $header = $("header"),
      $scrollup = $(".scrollup"),
      $counter = $(".counter"),
      $htmlbody = $("html, body");

    $win.scroll(function() {
      if ($(this).scrollTop() > 0) {
        $header.addClass("scrolled");
      } else {
        $header.removeClass("scrolled");
      }
    });

    $counter.counterUp({
      delay: 50,
      time: 2000
    });

    //Back to top
    $win.scroll(function() {
      if ($(this).scrollTop() > 200) {
        $scrollup.fadeIn();
      } else {
        $scrollup.fadeOut();
      }
    });

    $scrollup.on("click", function() {
      $htmlbody.animate(
        {
          scrollTop: 0
        },
        600
      );
      return false;
    });
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    company: state.firebase.data.Home ? state.firebase.data.Home.company : null
  };
};

export default compose(
  connect(mapStateToProps),
  firebaseConnect([
    {
      path: "/Home/company"
    }
  ])
)(About);
