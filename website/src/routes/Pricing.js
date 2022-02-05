import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCards from '../components/Pricing'
import Image from '../components/Image'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <Image heading='ARTICEL' text='What do you want to learn?' />
            <PricingCards />
            <Footer />
        </div>
    )
}

export default Pricing