import React from 'react';
import Banner from '../Banner/Banner';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import Whom from '../../ForWhom/Whom';


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
           <Banner></Banner>
           <Whom></Whom>
            <Footer></Footer>
        </div>
    );
};

export default Home;