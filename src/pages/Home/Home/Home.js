import React from 'react';
import Bikes from '../Bikes/Bikes';
import Headerbanner from '../HeaderBanner/Headerbanner';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Headerbanner></Headerbanner>
            <Bikes></Bikes>
        </div>
    );
};

export default Home;