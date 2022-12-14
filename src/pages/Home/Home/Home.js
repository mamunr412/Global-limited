import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AllReviews from '../AllReviews/AllReviews';

import Headerbanner from '../HeaderBanner/Headerbanner';
import Navigation from '../Navigation/Navigation';

import Products from '../Products/Products';

const Home = () => {
   
    return (
        <div style={{ backgroundColor: "#f2f4f5" }}>
            <Navigation></Navigation>
            <Headerbanner></Headerbanner>
             <Products />
            <AllReviews></AllReviews>
            {/* <News></News> */}
            <Footer></Footer>
    
        </div>
    );
};

export default Home;