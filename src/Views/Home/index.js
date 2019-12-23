import React from 'react';
import Spells from '../../Data/apiData';
import Navbar from '../../Components/Navbar/Navbar';

import './style.css';

const Home = () => (
    <div>
        <nav>
            <Navbar />
        </nav>
        <Spells />
    </div>
);

export default Home;