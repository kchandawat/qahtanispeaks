import React from "react";
import Card from "./card";
import Loader from "./loader";

const Main = props => {
  const { pageItems } = props.data;

  return (
    <main className="main pri-pad">
      <div className="container">
        <div className="blog-block grid-view">
          <div className="row">
            {pageItems.map((obj, index) => (
              <Card
                img={obj.value["Imgurl"]}
                title={obj.value["title"]}
                more={obj.value["more"]}
                index={obj.id}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <Loader
        onNextPage={props.data.onNextPage}
        onPrevPage={props.data.onPrevPage}
        hasNextPage={props.data.hasNextPage}
        hasPrevPage={props.data.hasPrevPage}
        isLoading={props.data.isLoading}
      />
    </main>
  );
};

export default Main;
