import React from 'react';
import Views from '../../Assets/Icons/PNG/Icon-views.png';
import Likes from '../../Assets/Icons/PNG/Icon-likes.png';
import './Styles/Info.scss';

function Info(props) {
    let newDate = (props.videoDate);
    let newDateObj = new Date(newDate).toLocaleDateString();
    return(
        <>{props.videoTitle !== undefined ? (
            <div className="info">
                <h2 className="info__title">{props.videoTitle}</h2>
                <div className="info__group">
                    <div className="info-containerTop">
                        <h3 className="info-containerTop__author">By {props.videoChannel}</h3>
                        <h3 className="info-containerTop__date">{newDateObj}</h3>
                    </div>
                    <div className="info-data">
                        <span className="info-containerMiddle">
                            <img className="info-containerMiddle__views" src={Views} alt=""/>
                            <h3 className="info-containerMiddle__label">{props.videoViews}</h3>
                        </span>
                        <span className="info-containerBottom">
                            <img className="info-containerBottom__likes" src={Likes} alt=""/>
                            <h3 className="info-containerBottom__label">{props.videoLikes}</h3>
                        </span>
                    </div>
                </div>
            
                <hr className="info__divider"/>
            </div>)
         : (<h1>Loading</h1>)}
        </>
        
        
        
        
    )
}

export default Info;