import React from 'react';
import Spells from '../../Data/apiData';
import Navbar from '../../Components/Navbar/Navbar';

import './style.css';

const Home = () => (
    <div>
        <nav>
            <Navbar />
        </nav>
        <aside>
            <Spells />
        </aside>
    </div>
);

export default Home;