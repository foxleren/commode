import './Notification.scss';
import {Link as RouterLink} from "react-router-dom";
//import React from "@types/react";

export default function Notification({type = 'booked', content, buttonContent, isVisible, action}) {
    return (<div id={`notification-${type}`} className={`notification-container ${type} ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="notification-text">{content}</div>
        {type === 'toBook' &&
            <svg onClick={action} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.46409 15.5355L15.5352 8.46448" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8.46409 8.46445L15.5352 15.5355" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>}
        {type === 'toBook' ? <RouterLink to="/rent" onClick={action}>
                <div className="notification-button">Перейти</div>
            </RouterLink> :
            <div className="notification-button" onClick={action}>Закрыть</div>}
    </div>);
}