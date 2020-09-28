import React from 'react';
import './Styles/Comments.scss';

export default function Comments(props) {
    let newDate = (props.date);
    let newDateObj = new Date(newDate).toLocaleDateString();
    return (
        <div>
            <div className="comments">
                <div className="comments__img"></div>
                <div className="comments__container">
                    <h3 className="comments__name">{props.userName}</h3><h3 className="comments__dateDesktop">{newDateObj}</h3>
                    <h3 className="comments__date">{newDateObj}</h3>
                    <p className="comments__text">{props.userText}</p>
                </div> 
            </div>
            <hr className="comments-divider"/>
        </div>
    )
}
