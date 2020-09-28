import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Assets/Logo/Logo-brainflix.png';
import search from '../../Assets/Icons/PNG/Icon-search.png';
import upload from '../../Assets/Icons/PNG/Icon-upload.png';
import './Styles/Header.scss';
import ProfilePic from '../../Assets/Images/Mohan-muruge.jpg';

function Header() {
    return (
        <div className="header">
            <Link to="/"><img className="header__logo" src={logo} alt="logo"/></Link>
            <div className="header__bottom">
                <input className="header__search" type="text" placeholder="Seach"/>
                    <Link className="header__link" to="/uploader"><button className="header__buttonTablet" type="submit"><img className="header__plusTablet" src={upload} alt="" />UPLOAD</button></Link> 
                    <img className="header__imgTablet" src={ProfilePic} alt=""/>
                <div className='header__mobileContainer'>
                    <Link className="header__link" to="/uploader"><button className="header__buttonMobile" type="submit"><img className="header__plusMobile" src={upload} alt="" />UPLOAD</button></Link> 
                    <img className="header__imgMobile" src={ProfilePic} alt=""/>
                </div>
            </div>
        </div>
    )
};

export default Header;