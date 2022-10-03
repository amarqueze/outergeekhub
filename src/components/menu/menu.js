import React from 'react';
import { Link } from "react-router-dom";

import './menu.css';

const Menu = () => {
    return (
        <header>
            <picture> This is a picture </picture>
            <nav>
                <Link to="/"> Home </Link>
                <Link to="/posts"> Posts </Link>
                <Link to="/publications"> Publications </Link>
                <Link to="/gallery"> Gallery </Link>
                <Link to="/aboutme"> About me </Link>
                <a href="https://github.com/amarqueze">GitHub</a>
                <div className="divider"> | </div>
                <span> {'English >'} </span>
                <span className="material-icons"> search </span>
                <span className="material-icons"> light_mode </span>
            </nav>
        </header>
    )
}

export default Menu;