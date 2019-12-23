import React from 'react';
import Spells from '../../Data/apiData';
import Navbar from '../../Components/Navbar/Navbar';

import './style.css';

const Home = () => (
    <div className="home-view">
        <header>
            <Navbar />
        </header>
        <aside>
            <Spells />
        </aside>
    </div>
);

export default Home;