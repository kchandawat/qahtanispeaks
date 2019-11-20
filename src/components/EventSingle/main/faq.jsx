import React from "react";
const Faq = () => {
  return (
    <div className="tab-pane pri-pad" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="title-wrap mb-60">
              <h2>Frequently Asked Question’s</h2>
              <p>
                Have questions regarding the ticket? Want to contribute ideas
                for the agenda? Or maybe just say hi? Check out our FAQs!
              </p>
            </div>
          </div>
        </div>

        <div className="row faq-wrap">
          <div className="col-md-6 col-sm-6 mb-50">
            <h6 className="mb-15">Who should attend?</h6>
            <div className="content-wrap mb-0">
              <p>
                Founders/Entrepreneurs, Product Managers, Finance Executives,
                Developers, Banking Folks
              </p>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 mb-50">
            <h6 className="mb-15">Are the tickets transferrable?</h6>
            <div className="content-wrap mb-0">
              <p>
                The tickets aren’t transferrable, unfortunately. Please bring
                along some ID proof on the day of the event as it is required
                for your registration.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 mb-50">
            <h6 className="mb-15">Can I bring +1s?</h6>
            <div className="content-wrap mb-0">
              <p>
                Again, unfortunately, no +1s. The standing room at the venue is
                limited and we, of course, have to prioritise people who have
                paid for a ticket.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 mb-50">
            <h6 className="mb-15">What is the lunch situation like?</h6>
            <div className="content-wrap mb-0">
              <p>
                Lunch, a high tea and a networking session with cocktails are
                included with your tickets.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 mb-50">
            <h6 className="mb-15">Where can I find my ticket?</h6>
            <div className="content-wrap mb-0">
              <p>
                You’d have received an email that has your ticket and a QR code.
                Please bring that on the day of the event.
              </p>
            </div>
          </div>

          {/* <div className="col-md-6 col-sm-6 mb-50">
              <h6 className="mb-15">What is your quesiton number one here?</h6>
              <div className="content-wrap mb-0">
                <p>
                  Donec sollicitudin dui neque. Nam pharetra tristique risus, at
                  sagittis quam faucibus a. Curabitur accumsan nulla eget nunc
                  placerat, sit amet convallis tortor convallis. Nulla varius
                  nulla eget vulputate pellentesque. Curabitur rhoncus nunc et
                  tincidunt porttitor.
                </p>
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Faq;
