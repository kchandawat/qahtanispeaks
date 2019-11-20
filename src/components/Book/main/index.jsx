import React from "react";
import BookingForm from "./bookingForm";
import SideBar from "./sideBar";

const Main = props => {
  return (
    <main className="main soft-gray pri-pad contact-page">
      <div className="container">
        <div className="row">
          <BookingForm eventType={props.eventType} />
          <SideBar />
        </div>
      </div>
    </main>
  );
};

export default Main;
