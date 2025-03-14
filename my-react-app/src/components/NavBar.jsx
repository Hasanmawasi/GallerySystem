import React from 'react';
import "../css/index.css";
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <> 
        <nav className='navbar flex flex-row'>
            <h1>Gallery</h1>
            <ul className='flex flex-row'>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/uploadphoto">Upload Photo</Link></li>
                <li><Link to="/ablum">Albums</Link></li>
            </ul>
            <div>
            <button className='nav-btn'>logout</button>
            </div>
            
        </nav>
        <div className="border-bottom"></div>
        </>
    );
};

export default NavBar;