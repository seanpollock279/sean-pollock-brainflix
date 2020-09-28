import React from 'react';
import './Styles/Description.scss';

function Description(props) {
    return (
    <>{props.altText !== undefined ? (
    <div className="description">
        <p className="description__text">{props.altText}.</p>
    </div>) : (<h1>Loading</h1>)}
    
    </>
    )
}

export default Description;
