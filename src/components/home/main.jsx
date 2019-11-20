import React from "react";
import Client from "./main/client";
import Offering from "./main/offering";
import Quote from "./main/quote";
import Book from "./main/book";
import Stories from "./main/stories";
import Events from "./main/events";
import Blogs from "./main/blogs";
import AllClients from "./main/allClients";
const Main = () => {
  return (
    <main className="main pri-pad">
      <Client />
      <Offering />
      <Quote />
      <Book />
      <Stories />
      <AllClients />
      <Events />

      <Blogs />
    </main>
  );
};

export default Main;
