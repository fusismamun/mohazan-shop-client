import React from 'react';
import Catagories from '../Catagories/Catagories';
import BottomText from './BottomText';
import HomeBanner from './HomeBanner';
import Nav from './Nav';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Catagories></Catagories>
            <HomeBanner></HomeBanner>
            <BottomText></BottomText>
        </div>
    );
};

export default Home;