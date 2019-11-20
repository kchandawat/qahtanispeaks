import React, { Component } from "react";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
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

class Books extends Component {
  componentDidMount() {
    document.title = "The Power Of Words";
  }
  render() {
    const { company } = this.props;
    console.log(company);
    return (
      <div>
        <MetaTags>
          <meta
            name="description"
            content="The Power Of Words: The Journey of a Stuttering Champion
            How to be master the esensential of an Unleash Inner Power
            Achieve the impossible.
            Sorround yourself with the extraordinary."
          />
          <meta name="robots" content="index, follow" />
        </MetaTags>
        <div className="banner main-banner webinar">
          <div className="fixed-banner dark-blue2">
            <div className="banner-content">
              <div className="container">
                <div className="content-wrap text-white mb-0">
                  <div className="inner">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="content left">
                          <h2>
                            The Power Of Words: The Journey of a Stuttering
                            Champion
                          </h2>
                          <ul>
                            <li>
                              How to be master the esensential of an Unleash
                              Inner Power
                            </li>
                            <li>Achieve the impossible.</li>
                            <li>Sorround yourself with the extraordinary.</li>
                          </ul>
                          <div className="botton-wrap">
                            <a
                              href="https://www.amazon.in/Power-Words-Journey-Stuttering-Champion-ebook/dp/B07DN1G9YX"
                              className="btn sec-bg text-uppercase"
                            >
                              purchase book now!
                            </a>
                            <a
                              href="https://www.goodreads.com/book/show/32894656-the-power-of-words"
                              className="btn btn-white text-uppercase"
                            >
                              view more details
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-5 pull-right">
                        <figure>
                          <img src="assets/images/book1.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="main ">
          <div className="featured-in pri-pad-b">
            <div className="soft-gray sec-pad">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-sm-12 mb-20">
                    <p className="text-center">
                      <strong>Our </strong> Elite Client Base
                    </p>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <div className="img-wrap">
                      {(company &&
                        company.map((comp, index) => (
                          <figure key={index}>
                            <img src={comp} alt="" />
                          </figure>
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
          </div>

          <div className="webinar-intro">
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-sm-10 col-sm-offset-1">
                  <div className="title-wrap webinar-title text-center mb-30">
                    <h2>Topics covered in The Book </h2>
                  </div>

                  <div className="content-wrap text-center mb-60">
                    <p>
                      My list also includes all the people I met in Toastmasters
                      for acting like a big supportive family, regardless of
                      their nationalities, genders, races, or religions; they
                      were all ready to offer a helping hand. Being a World
                      Champion of Public Speaking isn't really a big
                      achievement. I am just a guy who gave a seven-minute
                      speech that twelve judges thought was the best that day.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="serv-list mb-90">
                    <i className="title-icon pe-7s-arc"></i>
                    <h5 className="mb-10">The Green Room I</h5>
                    <div className="content-wrap mb-0">
                      <p>
                        I am walking across a huge hall filled with empty
                        chairs, making my way to the back of the huge stage,
                        along with the other nine finalists. It is a very long
                        walk across a very large hall....
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="serv-list mb-90">
                    <i className="title-icon pe-7s-diamond"></i>
                    <h5 className="mb-10"> The Beginning </h5>
                    <div className="content-wrap mb-0">
                      <p>
                        I try desperately to convince myself that is going to be
                        0K. My thoughts are interrupted by the stage manager, a
                        young blond lady in her twenties with short hair,
                        wearing a red T-shirt. She has a headphone on and is
                        carrying a walkie-talkie. "You should all be proud of
                        yourselves; we have more than 2500 people attending and
                        the hall is packed...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="serv-list mb-90">
                    <i className="title-icon pe-7s-gift"></i>
                    <h5 className="mb-10"> Mr Jameel</h5>
                    <div className="content-wrap mb-0">
                      <p>
                        Needles never scared me; they were nothing compared to
                        what Mr. Jameel did to me. My earliest memory of school
                        was when I was eight years old. As was usual every
                        morning in elementary school, I walked down the dark
                        hallway to my className and sat at my crooked wooden
                        desk I watched students coming in and chatting with each
                        other. At that time, I didn't know why I hadn't tried
                        talking to anyone; I didn't think I had a problem at the
                        time...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="serv-list mb-90">
                    <i className="title-icon pe-7s-edit"></i>
                    <h5 className="mb-10"> The Green Room II</h5>
                    <div className="content-wrap mb-0">
                      <p>
                        The year is 1980; the place is a small village near a
                        city called Abha in the south of Saudi Arabia. This city
                        is located in a mountain range. Unlike most of Saudi
                        Arabia, Abha enjoyed pleasant cool weather all year
                        long. They called it "the Switzerland of the middle
                        east." I was born in that tiny village. I was the second
                        child, born a year after my older brother Saad. My
                        father had a tough life growing up, and when he later
                        joined the army...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="serv-list mb-90">
                    <i className="title-icon pe-7s-display1"></i>
                    <h5 className="mb-10"> The Shame</h5>
                    <div className="content-wrap mb-0">
                      <p>
                        Then when everyone was on the right page, he walked to
                        the front of the className and looked at me. He was
                        puzzled for a moment; I guess he wondered how he'd never
                        asked me to read before although I sat in the first row
                        all along...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="serv-list mb-90">
                    <i className="title-icon pe-7s-comment"></i>
                    <h5 className="mb-10"> And Much More</h5>
                    <div className="content-wrap mb-0">
                      <p>
                        I hope you can learn from my mistakes, and you can
                        benefit from my lessons. And maybe this will inspire you
                        to write your own life story, share it with the
                        intention not to brag but rather for someone to learn
                        from.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ebook-fun pri-pad-b">
            <div className="dark-blue text-white pri-pad text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="fact-wrap">
                      <div className="no">
                        <span className="counter">91</span>+
                      </div>{" "}
                      Total intenational speeches
                    </div>

                    <div className="fact-wrap">
                      <div className="no">
                        <span className="counter">300</span>
                      </div>{" "}
                      Keynotes Given
                    </div>

                    <div className="fact-wrap">
                      <div className="no">
                        <span className="counter">987</span>
                      </div>{" "}
                      Workshop Conducted
                    </div>

                    <div className="fact-wrap">
                      <div className="no">
                        <span className="counter">1</span>M
                      </div>{" "}
                      User Base Worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ebook host">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-sm-5 pull-right">
                  <img src="assets/images/about-intro-bg.png" alt="" />
                </div>

                <div className="col-md-6 col-sm-6 right">
                  <div className="title-wrap webinar-title  mb-50">
                    <h2>About the Writer</h2>
                  </div>

                  <div className="content-wrap right">
                    <p>
                      Mohammed Qahtani, a Saudi Arabian engineer, won the
                      Toastmasters World Championship of Public Speaking.
                      Qahtani, won after several eliminating rounds that took
                      six months with 30,000 participants from more than 100
                      countries.
                    </p>

                    <p>
                      Growning up he suffered from severe stuttering but he was
                      able to overcome it by facing his fears, pushing the
                      envelope and performing on stage. He is passionate about
                      public speaking and stand up comedy. He has participated
                      in several conferences around the world where he inspires
                      people to chase their dreams. He is successful both in
                      engineering and public speaking and is a certified
                      programmer from Microsoft and SAP, certified database
                      administrator from Oracle and Microsoft, and certified
                      advance speaker Gold from Toastmaster international.
                    </p>
                  </div>

                  <span className="font-sig name"> Mohammed Qahtani </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
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
)(Books);
