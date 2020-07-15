import React from 'react';
import './popup.scss';

const PopUp =({status , message}) =>(
    <div className="popup">
        <div className="popup__content">
            <h3 className={status === 0 ? "popup__seccess" : "popup__error"} >{message}</h3>
        </div>
    </div>
);

export default PopUp;