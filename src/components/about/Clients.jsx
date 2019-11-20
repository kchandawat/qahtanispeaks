import React from "react";

const Clients = img => {
  console.log(img);
  return (
    <div>
      <figure>
        <img src={img["img"]} alt="" />
      </figure>
    </div>
  );
};

export default Clients;
