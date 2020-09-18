import React from 'react';

export default function Videos(props) {
    return (
        <div className="gallery">
            <h2 className="gallery__title">NEXT VIDEO</h2>
            <div className="gallery__container">
                <video 
                    className="gallery__video"
                    src={props.videoSrc}
                    alt={props.altText} 
                />
                <h3 className="gallery__title">{props.videoTitle}</h3>
                <h4 className="gallery__author">{props.videoAuthor}</h4>
            </div>
        </div>
    )
}

