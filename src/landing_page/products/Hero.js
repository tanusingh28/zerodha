import React from 'react';

function Hero() {
    return (  
        <div className='container border-bottom mb-5 '>
            <div className='row text-center mt-5 '>
                <h2 className='mt-5 text-muted '>Zerodha Products</h2>
                <h3 className='mt-3 text-muted fs-4'>Sleek, modern, and intuitive trading platforms</h3>
                <p className='mt-3 mb-5'>Check out our <a href='#' style={{textDecoration:"none"}}>investment offerings</a> <i class="fa fa-long-arrow-right" aria-hidden="true"></i></p>
            </div>
        </div>
    );
}

export default Hero;