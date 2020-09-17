import React from 'react';
import Views from '../../4.0 - Assets/Icons/PNG/Icon-views.png';
import Likes from '../../4.0 - Assets/Icons/PNG/Icon-likes.png';

function Info() {
    return(
        <div className="info">
            <h2 className="info__title">BMX Ramppage: 2018 Highlights</h2>
            <div className="info-container">
                <h3 className="info-container__author">by RED COW</h3>
                <h3 class="info-container__date">Date</h3>
                <span className="info-container__views">
                    <img className="info-container__icon" src={Views} alt=""/>
                    <h3 className="info-container__label">Views</h3>
                </span>
                <span className="info-container__likes">
                    <img className="info-container__icon" src={Likes} alt=""/>
                    <h3 className="info-container__label">Likes</h3>
                </span>
            </div>
            <hr className="info__divider"/>
        </div>
        
    )
}

export default Info;