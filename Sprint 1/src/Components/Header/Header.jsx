import React from 'react';
import logo from '../../4.0 - Assets/Logo/Logo-brainflix.png';
import search from '../../4.0 - Assets/Icons/PNG/Icon-search.png';
import upload from '../../4.0 - Assets/Icons/PNG/Icon-upload.png';

function Header() {
    return (
        <div className="header">
            {/* // logo img */}
            <img className="header__logo" src={logo} alt="logo"/>
            {/* // search bar */}
            <div>
                <img src={search} alt="search"/>
                <input className="header__search" type="text" placeholder="Seach"/>
            </div>
            {/* // upload button */}
                <button className="header__button" type="submit"><img src={upload} alt="" />Upload</button>
            {/* // profile picture */}
            <div className="header__img"></div>
        </div>
    )
};

export default Header;