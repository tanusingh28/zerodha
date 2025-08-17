import React from 'react';

function Education() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src='images/education.svg' style={{width:'80%'}}/>

                </div>
                <div className='col-6'>
                    <h1 className='fs-2 mb-5 mt-5'>Free and open market education</h1>
                    <p className='fs-5 mb-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

                    <div>
                        <a href='' style={{textDecoration:"none"}}>Varsity
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>

                    <p className='fs-5 mb-3 mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>

                    <div>
                        <a href='' style={{textDecoration:"none"}}>TradingQ&A
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default Education;