import React from 'react';

function Hero() {
    return ( 
        <div className='conatiner p-5 mb-5'>
            <div className='row text-center'>
                <div className='col'>
                    
                    <img src='images/homeHero.png' alt='hero image' className='mb-5' style={{width:"65%"}}/>
                    <h1 className='mt-5 mb-3'>Invest in everything</h1>
                    <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className='p-2 btn btn-primary fs-5 mt-4 mb-5' style={{width:"15%", margin: "0 auto"}}>Signup Now for free</button>


                </div>

            </div>

        </div>
     );
}

export default Hero;