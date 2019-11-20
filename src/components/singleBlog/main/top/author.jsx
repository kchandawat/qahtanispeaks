import React from "react";

const Author = () => {
  return (
    <div className="author box-wrap box-border mb-20">
      <figure className="avatar avatar2">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/author.jpg"}
          alt=""
        />
      </figure>

      <h5 className="mb-10">Author : Mohammed Qahtani</h5>

      <div className="content-area mb-0">
        <p>
          Mohammed Qahtani, a Saudi Arabian engineer, won the Toastmasters World
          Championship of Public Speaking. Qahtani, won after several
          eliminating rounds that took six months with 30,000 participants from
          more than 100 countries. Growning up he suffered from severe
          stuttering but he was able to overcome it by facing his fears, pushing
          the envelope and performing on stage. He is passionate about public
          speaking and stand up comedy. He has participated in several
          conferences around the world where he inspires people to chase their
          dreams. He is successful both in engineering and public speaking and
          is a certified programmer from Microsoft and SAP, certified database
          administrator from Oracle and Microsoft, and certified advance speaker
          Gold from Toastmaster international.
        </p>
      </div>
    </div>
  );
};

export default Author;
