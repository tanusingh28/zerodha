import React from 'react';

function OpenAccount () {
    return ( 
        <div className='container text-center'>
            <div className='row'>
                <div className='col'>
                    <h1 className='mt-5 fs-2 mb-4'>Open a Zerodha account</h1>
                    <p className='fs-5 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>

                    <button className='p-2 btn btn-primary fs-5 mt-4 mb-5' style={{width:"20%", margin: "0 auto"}}>Sign up for free</button>
                </div>
            </div>
        </div>
        
     );
}

export default OpenAccount;