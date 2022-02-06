import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ArticelCards from '../components/Articel'
import Image from '../components/Image'

const Articel = () => {
    return (
        <div>
            <Navbar />
            <Image heading='ARTICEL' text='What do you want to learn?' />
            <ArticelCards />
            <Footer />
        </div>
    )
}

export default Articel