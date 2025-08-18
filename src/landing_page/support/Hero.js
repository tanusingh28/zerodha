import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            
            <div className=' p-5 mt-5 ' id='supportWrapper'>
                
                    <h4>Support Portal</h4>
                    <a href='#'>Track Tickets</a>
                
            </div>
            <div className='row p-5 mx-5'>
                <div className='col p-5'>
                    <h2 className='fs-3'>Search for an answer or browser help topics <br/> to create a ticket</h2>
                    <input placeholder='Eg. how do i activate F&O, why is my order getting rejected...' className='mt-3 mb-2'></input>
                    <br/>
                    <a href='#'>Track account opening</a>
                    <a href='#'>Track segmentation activation</a>
                    <a href='#'>Intrday.</a>
                    <br/>
                    <a href='#'>margins</a>
                    <a href='#'>Kite user manual</a>

                </div>
                <div className='col p-5'>
                    <h2>Featured</h2>
                    <p>1. <a href='#'>Current Takeovers and Delisting- January 2025</a></p>
                    <p>2. <a href='#'>Latest Intraday leverages - MIS & CO</a></p>
                </div>
            </div>
        </section>
      );
}

export default Hero;