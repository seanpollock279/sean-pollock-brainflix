import React from 'react';
import Play from '../../Assets/Icons/PNG/Icon-play.png';
import FullScreen from '../../Assets/Icons/PNG/Icon-fullscreen.png';
import Volume from '../../Assets/Icons/PNG/Icon-volume.png';
import './Styles/MediaPlayer.scss';

export default function MediaPlayer(props) {
    return (
        <div className="media">
            <div className="media__containerTop">
                <video className="media__video"
                poster={props.videoSrc} 
                alt={props.altText}
                />
            </div>
            {/* <div className="media__containerIcons"> */}
                <button className="media__leftButton"><img className="media__leftButtonIcon"src={Play} alt=""/></button>
                <button className="media__centreButton">
                    <hr className="media__scrubber"/>
                    <p className="media__ticker">0:00/0:42</p>
                </button>
                <button className="media__rightButton"><img className="media__rightButtonIcon" src={FullScreen} alt=""/><img className="media__rightRightButtonIcon" src={Volume} alt=""/></button>
            {/* </div> */}
        </div>
    )
}

