import React from "react";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";

const Client = props => {
  const { company } = props;
  if (company) {
    return (
      <div className="featured-in pri-pad-b">
        <div className="soft-gray sec-pad">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 mb-20 lh-normal">
                <p className="text-center">
                  <strong>Mohammed Qahtani's</strong> ELITE CLIENTELE
                </p>
              </div>

              <div className="col-md-12 col-sm-12">
                <div className="img-wrap">
                  {company.map((comp, index) => (
                    <figure key={index}>
                      <img src={comp} alt="" />
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

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
)(Client);
