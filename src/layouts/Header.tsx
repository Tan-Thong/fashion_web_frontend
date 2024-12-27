import React from "react";
import "./../css/header.css"

function Header () {
    return(
        <header id="header" className="">
            <div className="nav-left">
                <img className="logo" src={require('./../images/LVTT_Logo.png')} alt=""/>
                <ul className="nav-component">
                    <li><a href="">Footwear</a></li>
                    <li><a href="">Menswear</a></li>
                    <li><a href="">Cyber Week</a></li>
                </ul>
            </div>
            <div className="nav-right">
                <ul className="nav-component">
                    <li>Search</li>
                    <li>Service</li>
                    <li>My account</li>
                    <li id="cart">0</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;