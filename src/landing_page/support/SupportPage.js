import React from 'react';
import CreateTicket from './CreateTicket';
import Hero from './Hero';
import Footer from '../Footer';
import Navbar from '../Navbar';


function SupportPage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <CreateTicket />
        <Footer></Footer>
        </>
     );
}

export default SupportPage;