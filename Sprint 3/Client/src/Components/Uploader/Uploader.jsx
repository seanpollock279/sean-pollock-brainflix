import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Assets/Logo/Logo-brainflix.png';
import search from '../../Assets/Icons/PNG/Icon-search.png';
import upload from '../../Assets/Icons/PNG/Icon-upload.png';
import ProfilePic from '../../Assets/Images/Mohan-muruge.jpg';
import ToUpload from '../../Assets/Images/Upload-video-preview.jpg';
import './Styles/Uploader.scss';

function Uploader (props) {
    return (
        <div>
            <div className="uploadHeader">
                <Link to="/"><img className="uploadHeader__headerLogo" src={logo} alt="logo"/></Link>
                <div className="uploadHeader__headerBottom">
                    <input className="uploadHeader__headerSearch" type="text" placeholder="Seach"/>
                        <Link className="uploadHeader__link" to="/uploader"><button className="uploadHeader__headerButtonTablet" type="submit"><img className="uploader__headerPlusTablet" src={upload} alt="" />UPLOAD</button></Link> 
                        <img className="uploadHeader__headerImgTablet" src={ProfilePic} alt=""/>
                    <div className='uploadHeader__headerMobileContainer'>
                        <Link className="uploadHeader__link" to="/uploader"><button className="uploadHeader__headerButtonMobile" type="submit"><img className="uploader__headerPlusMobile" src={upload} alt="" />UPLOAD</button></Link> 
                        <img className="uploadHeader__headerImgMobile" src={ProfilePic} alt=""/>
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
                    <input className="upForm__title" type="text" onChange={props.onChange} value={props.newVideo.title} name="title" placeholder="Add a title to your video" /><br/>
                    <label className="upForm__labelTwo" id="description" htmlFor="description">ADD A VIDEO DESCRIPTION</label><br/>
                    <textarea className="upForm__description" type="text" onChange={props.onChange} value={props.newVideo.description} name="description" placeholder="Enter a description for your video" /><br/>
                    <label className="upForm__label" htmlFor="video">VIDEO LINK</label>
                    <input className="upForm__video" type="text" onChange={props.onChange} value={props.newVideo.video} name="video" placeholder="Add your video link here" />
                </form>
            </div>
            
            <hr className="uploadDividerBtm" />
            <div className="upFoot">
                <button onClick={props.addVideo} className="upFoot__btn">PUBLISH</button>
                <h3 className="upFoot__cancel">CANCEL</h3>
            </div>
        </div>
    )
};

export default Uploader;