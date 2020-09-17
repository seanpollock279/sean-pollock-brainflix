import React from 'react';
import Play from '../../4.0 - Assets/Icons/PNG/Icon-play.png';
import FullScreen from '../../4.0 - Assets/Icons/PNG/Icon-fullscreen.png';
import Volume from '../../4.0 - Assets/Icons/PNG/Icon-volume.png';

function MediaPlayer() {
    return (
        <div className="media">
            <div className="media__video">Image</div>
            <button className="media__leftButton"><img className="media__leftButtonIcon"src={Play} alt=""/></button>
            <button className="media__centreButton">
                <hr/>
                0:00/0:42
            </button>
            <button className="media__rightButton"><img className="media__rightButtonIcon" src={FullScreen} alt=""/><img className="media__rightButtonIcon" src={Volume} alt=""/></button>
        </div>
    )
}

export default MediaPlayer;