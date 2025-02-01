import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import SubBanner from './Banner/SubBanner';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <SubBanner />
            <Contact />
        </div>
    );
};

export default Home;