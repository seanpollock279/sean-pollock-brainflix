import React from 'react';
import './Styles/Comments.scss';

export default function Comments(props) {
    return (
        <div className="comments">
            <div className="comments__img"></div>
            <h3 className="comments__name">{props.userName}</h3>
            <h3 className="comments__date">{props.date}</h3>
            <p className="comments__text">{props.userText}</p>
            <hr className="comments__divider"/>
        </div>
    )
}
