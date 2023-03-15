import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tinder from '../components/Card/TinderCard';
import Parallax from '../components/Parallax';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Link to="/signup">Inscription form------------</Link>
            <Link to="/login">Form de connection</Link>
            <Parallax />
            <Tinder />
            <Footer/>
        </div>
    );
};

export default Home;