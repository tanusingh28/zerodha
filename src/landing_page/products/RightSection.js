import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
    googlePlay,
    appStore }) {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col mt-5 p-5'>
                    <h1 className='mt-5 fs-2 mb-5'>{productName}</h1>
                    <p className='fs-5 mt-5'>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn more</a> <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
                <div className='col'>
                    <img src={imageURL} className=''/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;