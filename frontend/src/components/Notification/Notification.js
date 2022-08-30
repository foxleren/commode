import './Notification.scss';

export default function Notification({content, buttonContent, isVisible, action}) {
    return (
        <div className={`notification-container ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="notification-text">{content}</div>
            <div className="notification-button" onClick={action}>{buttonContent}</div>
        </div>
    );
}