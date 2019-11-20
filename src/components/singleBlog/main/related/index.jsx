import React from "react";
import Card from "./card";
var _ = require("lodash");
const Related = props => {
  let { posts } = props;
  const { post } = props;
  const randomized = _.shuffle(posts);
  let obj = shuffleFisherYates(randomized, post["title"]);
  console.log(randomized);
  return (
    <div className="related-product soft-gray pri-pad">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="title-wrap mb-30">
              <h4>Related Post</h4>
            </div>
          </div>
        </div>

        <div className="blog-block grid-view">
          <ul className="related-slide">
            {
              (console.log(obj, "haha"),
              Object.keys(obj).map(key => {
                return (
                  <Card
                    key={key}
                    title={obj[key]["title"]}
                    url={obj[key]["key"]}
                    img={obj[key]["Imgurl"]}
                    more={obj[key]["more"]}
                  />
                );
              }))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};
const shuffleFisherYates = (array, title) => {
  let code = {};
  let i = 0,
    counter = 0;
  let obj;
  while (array[i] && counter < 3) {
    obj = array[i++];

    if (obj["title"] !== title) {
      code[counter++] = {
        Imgurl: obj["Imgurl"],
        title: obj["title"],
        key: obj["key"],
        more: obj["more"]
      };
    }
  }

  return code;
};

export default Related;
