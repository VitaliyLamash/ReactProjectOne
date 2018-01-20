import React from 'react';
import ReactDOM from 'react-dom';

export const Header = () => {
    return(
    <header>
    <div className="logo">

        <a href="index.html">
             <img className="graphiclogo" src="../img/logo.png" alt="logo" />
        </a>
        <div className="logo_txt">React for GoodBus</div>
    </div>

    <nav>
        <div className="topnav" id="myTopnav">
        <a href="index.html">Home</a>
        <a href="index.html">Home</a>
        <a href="index.html">Home</a>
        </div>
    </nav>
    </header>
    )};