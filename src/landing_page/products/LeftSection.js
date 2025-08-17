import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
   appStore}
) {
  return (
  <div className="container">
    <div className="row">
      <div className="col p-3">
        <img src={imageURL} className="p-5"/>


      </div>
      <div className="col p-5 ">
        <h1 className="mt-5">{productName}</h1>
        <p className="mt-5 fs-5">{productDescription}</p>
        <div className="mt-5"> 
          <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a> <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More</a> <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>
        <div className="mt-5">
          <a href={googlePlay}><img src="images/googlePlayBadge.svg" /></a>
        <a href={appStore} style={{marginLeft:"50px"}}><img src="images/appstoreBadge.svg"/></a>
        </div>
        
      </div>
    </div>
  </div>
  
  
  
  
  
  );
}

export default LeftSection;
