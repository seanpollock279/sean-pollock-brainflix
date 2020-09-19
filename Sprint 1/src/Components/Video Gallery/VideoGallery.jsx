import React from 'react';
import './Styles/videoGallery.scss';

export default function Videos(props) {
    return (
        <div className="gallery">
            <div className="gallery__container">
                <div className="gallery__container">
                    <img className="gallery__video"
                    src={props.videoSrc}
                    alt={props.altText} 
                    />
                </div>
                
                <h3 className="gallery__title">{props.videoTitle}</h3>
                <h4 className="gallery__author">{props.videoAuthor}</h4>
            </div>
        </div>
    )
}

