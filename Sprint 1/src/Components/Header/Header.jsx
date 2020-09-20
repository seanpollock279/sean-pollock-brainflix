import React from 'react';
import logo from '../../Assets/Logo/Logo-brainflix.png';
import search from '../../Assets/Icons/PNG/Icon-search.png';
import upload from '../../Assets/Icons/PNG/Icon-upload.png';
import './Styles/Header.scss';
import ProfilePic from '../../Assets/Images/Mohan-muruge.jpg';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="logo"/>
            <div className="header__bottom">
                <input className="header__search" type="text" placeholder="Seach"/>
                <button className="header__button" type="submit"><img className="header__plus" src={upload} alt="" />UPLOAD</button>
                <img className="header__img" src={ProfilePic} alt=""/>
            </div>
        </div>
    )
};

export default Header;