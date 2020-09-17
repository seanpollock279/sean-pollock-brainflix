import React from 'react';

function CommForm() {
    return (
        <div className="form">
            <h3 className="form__label">3 Comments</h3>
            <h3 classname="form__title">Join the Conversation</h3>
            <div className="form__container">
                {/* image */}
                <input className="form__input" type="text"/>
                <button className="form__btn">COMMENT</button>
                <hr className="form__divider"/>
            </div>
        </div>
    )
}

export default CommForm;