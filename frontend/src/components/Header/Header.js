import './Header.scss';

export default function Header() {
    return (<header>
            <div className="header-links-container">
                <div className="header-link">КОНЦЕПЦИЯ</div>
                <div className="header-link">МЕНЮ</div>
                <div className="header-link">ПОСАДКА</div>
                <div className="header-link">АРЕНДА ЗАЛА</div>
                <div className="header-link">КОНТАКТЫ</div>
            </div>
            <div className="header-buttons-container">
                <div className="header-button-change-theme">
                    <div className="header-button-change-theme-circle"/>
                    <div className="header-button-change-theme-text">Ресторан</div>
                </div>
                <div className="header-button-book">Забронировать</div>
            </div>
        </header>);
}