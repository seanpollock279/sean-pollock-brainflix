import React from 'react';
import './Styles/CommForm.scss';

function CommForm() {
    return (
        <div className="form">
            <h3 className="form__label">3 Comments</h3>
            <h3 className="form__title">Join the Conversation</h3>
            <div className="form__container">
                <div></div>
                <input className="form__input" type="text"/>
                <button className="form__btn">COMMENT</button>
            </div>
            <hr className="form__divider"/>
        </div>
    )
}

export default CommForm;