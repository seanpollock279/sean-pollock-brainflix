import React from 'react';
import './Styles/CommForm.scss';
import ProfilePic from '../../Assets/Images/Mohan-muruge.jpg';


function CommForm() {
    return (
        <div className="form">
            <h3 className="form__label">3 Comments</h3>
            <div className="form-group">
                <img className="form__img" src={ProfilePic} alt=""/>
                <div className="form__container">
                    <h3 className="form__title">Join the Conversation</h3>
                    <div className="form__boxes">
                        <textarea className="form__input" type="text" placeholder="That was easily the most spectacular BMX moment ever."/>
                        <button className="form__btn">COMMENT</button>
                    </div>
                </div>
            </div>
            
            <hr className="form__divider"/>
        </div>
    )
}

export default CommForm;