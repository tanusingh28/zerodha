import React from 'react';

function Signup() {
    return ( 
        <div className='container mt-5 '>
            <div className='row mt-5 mb-5 text-center'>
                <h3 className='mt-5 mb-4'>Open a free demat and trading account online</h3>
                <h5 className='text-muted mb-5'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h5>
            </div>
            <div className='row mt-5 mb-5 '>
                <div className='col mb-5'>
                    <img src='images\account_open.svg' style={{width:"90%"}}/>
                </div>
                <div className='col mb-5'>
                    <h3 >Signup Now</h3>
                    <p className='text-muted'>Or track your existing application</p>
                    <input placeholder='Enter your mobile number' className=' mb-2 p-2' style={{borderRadius:"5px"}}></input>
                    <br/>
                    <button className='p-2 btn btn-primary fs-5 mt-4 mb-5' style={{width:"25%", margin: "0 auto"}}>Get OTP</button>
                    <p>By proceeding, you agree to the Zerodha terms & privacy policy</p>


                </div>
            </div>
            <div className='row'>
                <div className='col text-center '>
                    <img src='images\acopbenefits.svg' style={{width:"65%"}}/>
                    <h3 className='mt-5 fs-4 mb-5'>Benefits of opening a Zerodha demat account</h3>
                </div>
                <div className='col'>
                    <h3 className='mb-4 fs-4'>Unbeatable pricing</h3>
                    <p className='mb-5 fs-5 text-muted'>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>

                    <h3  className='mb-4 fs-4'>Best investing experience</h3>
                    <p className='mb-5 fs-5 text-muted'>Simple and intuitive trading platform with an easy-to-understand user interface.</p>

                    <h3  className='mb-4 fs-4'>No spam or gimmicks</h3>
                    <p className='mb-5 fs-5 text-muted'>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>

                    <h3  className='mb-4 fs-4'>The Zerodha universe</h3>
                    <p className='mb-5 fs-5 text-muted'>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                </div>
            </div>

        </div>
     );
}

export default Signup;