import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1>To create a ticket, select a relevent topic</h1>
      </div>
      <div className="row p-5 mt-5 mb-5">
        <div className="col">
          <h4 className="mb-5 p-4">
            {" "}
            <i class="fa fa-plus-circle " aria-hidden="true"></i> Account Opening
          </h4>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                Online Account Opening
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                Offline Account Opening
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                Company, Partnership and HUF Account Opening
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                NRI Account Opening
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                Charges at Zerodha
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                Zerodha IDFC FIRST Bank 3-in-1 Account
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                Getting Started
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h4 className="mb-5 p-4">
            {" "}
            <i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account
          </h4>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                Login Credintials
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                Account Modification and Segement Addition
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                DP ID and bank details
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                Your Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                Transfer and conversion of shares
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h4 className="mb-5 p-4">
            <i class="fa fa-bar-chart" aria-hidden="true"></i>
            Your Zerodha Account
          </h4>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                Margin/leverage, Product and Other types
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                Kite Web and Mobile
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                Trading FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                Corporate Actions
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                Sentinel
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                Kite API
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                Pi and other Platform
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                {" "}
                Stockreports+
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ textDecoration: "none", lineHeight: "2.5em" }}
              >
                {" "}
                GTT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
