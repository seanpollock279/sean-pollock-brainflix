import React from 'react';
import Play from '../../Assets/Icons/PNG/Icon-play.png';
import FullScreen from '../../Assets/Icons/PNG/Icon-fullscreen.png';
import Volume from '../../Assets/Icons/PNG/Icon-volume.png';

export default function MediaPlayer(props) {
    return (
        <div className="media">
            <div>
                <video className="media__video"
                poster={props.videoSrc} 
                alt={props.altText}
                />
            </div>
            <button className="media__leftButton"><img className="media__leftButtonIcon"src={Play} alt=""/></button>
            <button className="media__centreButton">
                <hr/>
                0:00/0:42
            </button>
            <button className="media__rightButton"><img className="media__rightButtonIcon" src={FullScreen} alt=""/><img className="media__rightButtonIcon" src={Volume} alt=""/></button>
        </div>
    )
}

