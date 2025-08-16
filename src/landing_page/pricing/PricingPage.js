import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import Footer from '../Footer';
import Navbar from '../Navbar';



function PricingPage() {
    return ( 
        <>
        <Navbar />
        <Hero/>
        <Brokerage/>
        <Footer />
        </>
     );
}

export default PricingPage;