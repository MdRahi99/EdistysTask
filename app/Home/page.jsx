import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import SubBanner from './Banner/SubBanner';
import Choose from './Choose/Choose';
import Companies from './Companies/Companies';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <SubBanner />
            <Choose />
            <Companies />
            <Contact />
        </div>
    );
};

export default Home;