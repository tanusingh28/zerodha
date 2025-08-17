import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row mt-5">
        <h3 className="text-center mb-5 ">People</h3>
      </div>
      <div className="row">
        <div className="col text-center">
          <img
            src="images/nithinkamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col mt-5  mb-5 text-muted" style={{fontSize:"19px"}}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href="#" style={{textDecoration:"none"}}>Homepage </a>/ <a href="#" style={{textDecoration:"none"}}> TradingQnA </a>/ <a href="#" style={{textDecoration:"none"}}>Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
