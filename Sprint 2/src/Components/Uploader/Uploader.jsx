import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Assets/Logo/Logo-brainflix.png';
import search from '../../Assets/Icons/PNG/Icon-search.png';
import upload from '../../Assets/Icons/PNG/Icon-upload.png';
import ProfilePic from '../../Assets/Images/Mohan-muruge.jpg';
import ToUpload from '../../Assets/Images/Upload-video-preview.jpg';
import './Styles/Uploader.scss';


function Uploader () {
    return (
        <div>
            <div className="header">
                <Link to="/"><img className="header__logo" src={logo} alt="logo"/></Link>
                <div className="header__bottom">
                    <input className="header__search" type="text" placeholder="Seach"/>
                        <Link to="/uploader"><button className="header__buttonTablet" type="submit"><img className="header__plusTablet" src={upload} alt="" />UPLOAD</button></Link> 
                        <img className="header__imgTablet" src={ProfilePic} alt=""/>
                    <div className='header__mobileContainer'>
                        <Link to="/uploader"><button className="header__buttonMobile" type="submit"><img className="header__plusMobile" src={upload} alt="" />UPLOAD</button></Link> 
                        <img className="header__imgMobile" src={ProfilePic} alt=""/>
                    </div>
                </div>
            </div>
            <hr className="header__divider" />
            
            <div className="uploader">
                <div className="uploader__containerLeft">
                    <h1 className="uploader__title">Upload Video</h1>
                    <hr className="uploader__divider" />
                    <h2 className="uploader__subHeader">VIDEO THUMBNAIL</h2>
                    <video className="uploader__video" poster={ToUpload} alt=""/>
                </div>
                <form className="upForm" action="">
                    <label className="upForm__label" htmlFor="title">TITLE YOUR VIDEO</label><br className="upForm__br"/>
                    <input className="upForm__title" type="text" id="title" name="title" placeholder="Add a title to your video" /><br/>
                    <label className="upForm__labelTwo" htmlFor="description">ADD A VIDEO DESCRIPTION</label><br/>
                    <input className="upForm__description" type="text" id="description" name="description"/>
                </form>
            </div>
            
            <hr className="uploadDividerBtm" />
            <div className="upFoot">
                <button className="upFoot__btn">PUBLISH</button>
                <h3 className="upFoot__cancel">CANCEL</h3>
            </div>
        </div>
    )
};

export default Uploader;