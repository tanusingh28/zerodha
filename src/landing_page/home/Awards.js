import React from 'react';


function Awards() {
    return (   
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-6 p-5 text-center'>
                    <img src='images/largestBroker.svg' className=''/>

                </div>
                <div className='col-6 p-5'>
                    <h1 className='mb-2'>Largest stock broker in India</h1>
                    <p className='mb-5 fs-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6 fs-5'>
                            <ul>
                                <li>Future and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivtaives</li>
                            </ul>
                        </div>
                        <div className='col-6 fs-5'>
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Growth</li>
                            </ul>
                            
                            
                           
                        </div>


                    </div>
                   <img src='images/pressLogos.png' style={{width:"90%"}}/>
                </div>

            </div>
        </div>
    );
}

export default Awards;