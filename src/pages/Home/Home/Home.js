import React from 'react';
import Footer from '../../Footer/Footer/Footer';
import AllReviews from '../AllReviews/AllReviews';
import Bikes from '../Bikes/Bikes';
import Headerbanner from '../HeaderBanner/Headerbanner';
import Navigation from '../Navigation/Navigation';
import News from '../News/News';

const Home = () => {
    return (
        <div style={{ backgroundColor: "#f2f4f5" }}>
            <Navigation></Navigation>
            <Headerbanner></Headerbanner>
            <Bikes></Bikes>
            <AllReviews></AllReviews>
            <News></News>
            <Footer></Footer>

        </div>
    );
};

export default Home;