import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center mt-5 p-5">
        <h2>The Zerodha Universe</h2>
        <p className="mt-3 fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mt-5  text-muted text-center">
        <div className="col p-5">
          <img src="images\zerodhaFundhouse.png" style={{ width: "50%" }} />
          <p className="mt-3 ">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          
        </div>
        <div className="col p-3">
          <img src="images\sensibullLogo.svg" style={{ width: "50%" }} />
          <p className="mt-3" >
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          
        </div>
        <div className="col p-5">
          <img src="images\goldenpiLogo.png" style={{ width: "50%" }} />
          <p className="mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
          
        </div>
      </div>
      <div className="row p-5 text-muted text-center">
        <div className="col">
          <img src="images\streakLogo.png" style={{ width: "50%" }} />
          <p className="mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col">
          <img src="images\smallcaseLogo.png" style={{ width: "50%" }} />
          <p className="mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col">
          <img src="images\dittoLogo.png" style={{ width: "44%" }} />
          <p className="mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>

        </div>
      </div>
      <div className="row">
        <button className='p-2 btn btn-primary fs-5 mt-4 mb-5' style={{width:"20%", margin: "0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
