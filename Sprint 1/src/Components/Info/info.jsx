import React from 'react';
import Views from '../../4.0 - Assets/Icons/PNG/Icon-views.png';
import Likes from '../../4.0 - Assets/Icons/PNG/Icon-likes.png';

function Info() {
    return(
        <div>
            <h2>BMX Ramppage: 2018 Highlights</h2>
            <div>
                <h3>by RED COW</h3>
                <h3>Date</h3>
                <span>
                    <img src={Views} alt=""/>
                    <h3>Views</h3>
                </span>
                <span>
                    <img src={Likes} alt=""/>
                    <h3>Likes</h3>
                </span>
            </div>
        </div>
        
    )
}

export default Info;