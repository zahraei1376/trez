import React from 'react';
import './popup.scss';

const PopUp =(props) =>(
    <div className="popup">
        <div className="popup__content">
            <h1 className="popup__user">کاربر گرامی</h1>
            <h3 className={props.status === 0 ? "popup__seccess" : "popup__error"} >{props.message}</h3>
            <button className="popup__btn" onClick={props.closePopup}>بستن</button>
        </div>
    </div>
);

export default PopUp;