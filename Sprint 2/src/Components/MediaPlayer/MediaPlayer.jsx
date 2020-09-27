import React from 'react';
import Play from '../../Assets/Icons/PNG/Icon-play.png';
import FullScreen from '../../Assets/Icons/PNG/Icon-fullscreen.png';
import Volume from '../../Assets/Icons/PNG/Icon-volume.png';
import './Styles/MediaPlayer.scss';

class MediaPlayer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {                           
    return (
        <>{this.props.videoSrc !== undefined ?  (
            <div className="media">
                <div className="media__containerTop">
                    <div className="media__bar">bar1</div>
                    <video className="media__video"
                    poster={this.props.videoSrc} 
                    alt={this.props.altText}
                    />
                    <div className="media__bar">bar2</div>
                </div>
                    <button className="media__leftButton"><img className="media__leftButtonIcon"src={Play} alt=""/></button>
                    <button className="media__centreButton">
                        <hr className="media__scrubber"/>
                        <p className="media__ticker">0:00/{this.props.videoLength}</p>
                    </button>
                    <button className="media__rightButton"><img className="media__rightButtonIcon" src={FullScreen} alt=""/><img className="media__rightRightButtonIcon" src={Volume} alt=""/></button>
            </div>
        ) : (<h1>Loading</h1>)} </>
    )
    }
}

export default MediaPlayer;

