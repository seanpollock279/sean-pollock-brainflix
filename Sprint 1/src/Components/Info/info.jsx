import React from 'react';
import Views from '../../Assets/Icons/PNG/Icon-views.png';
import Likes from '../../Assets/Icons/PNG/Icon-likes.png';
import './Styles/Info.scss';

function Info() {
    return(
        <div className="info">
            <h2 className="info__title">BMX Rampage: 2018 Highlights</h2>
            <div className="info-containerTop">
                <h3 className="info-containerTop__author">By Red Cow</h3>
                <h3 className="info-containerTop__date">12/18/2018</h3>
            </div>
            <div className="info-data">
                <span className="info-containerMiddle">
                    <img className="info-containerMiddle__views" src={Views} alt=""/>
                    <h3 className="info-containerMiddle__label">1,000,023</h3>
                </span>
                <span className="info-containerBottom">
                    <img className="info-containerBottom__likes" src={Likes} alt=""/>
                    <h3 className="info-containerBottom__label">110,985</h3>
                </span>
            </div>
            
            <hr className="info__divider"/>
        </div>
        
        
        
    )
}

export default Info;