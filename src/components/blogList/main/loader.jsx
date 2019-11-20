import React from "react";

const Loader = props => {
  const onNext = e => {
    e.preventDefault();
    props.onNextPage();
  };
  const onPrev = e => {
    e.preventDefault();
    props.onPrevPage();
  };

  return (
    <ul
      className="text-center"
      style={{ marginLeft: "30%", marginRight: "30%" }}
    >
      <ul className="pager">
        <li className="previous">
          <button
            type="button"
            className="btn btn-default"
            disabled={!props.hasPrevPage || props.isLoading}
            onClick={onPrev}
          >
            {props.isLoading ? (
              <div>
                <i className="fa fa-circle-o-notch fa-spin" />
                <span />
                Loading
              </div>
            ) : (
              "Previous"
            )}
          </button>
        </li>
        <li className="next">
          <button
            type="button"
            className="btn btn-default"
            disabled={!props.hasNextPage || props.isLoading}
            onClick={onNext}
          >
            {props.isLoading ? (
              <div>
                <i className="fa fa-circle-o-notch fa-spin" />
                <span />
                Loading
              </div>
            ) : (
              "Next"
            )}
          </button>
        </li>
      </ul>
    </ul>
  );
};

export default Loader;
