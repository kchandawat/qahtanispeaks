import React from "react";
import MainForm from "./mainForm";
import SideBar from "./sideBar";

const Main = () => {
  return (
    <main className="main soft-gray pri-pad contact-page">
      <div className="container">
        <div className="row">
          <MainForm />
          <SideBar />
        </div>
      </div>
    </main>
  );
};

export default Main;
