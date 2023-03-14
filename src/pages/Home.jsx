import React from 'react';
import Tinder from '../components/Card/TinderCard';
import Parallax from '../components/Parallax';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to="/signup">Inscription form------------</Link>
            <Link to="/login">Form de connection</Link>
            <Parallax />
            <Tinder />
        </div>
    );
};

export default Home;