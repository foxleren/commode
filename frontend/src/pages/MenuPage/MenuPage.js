import './MenuPage.scss';

export default function MenuPage() {
    const options = [{
        name: 'СЕЗОННОЕ МЕНЮ', file: 'file',
    }, {
        name: 'МЕНЮ КУХНИ', file: 'file',
    }, {
        name: 'МЕНЮ БАРА', file: 'file',
    }, {
        name: 'БАНКЕТЫ', file: 'file',
    }]
    return (<section id="menu">
        {/*<img src={`${contentPrefix}/images/menu_background.jpg`} alt={''}/>*/}
        <div className="menu-title">МЕНЮ ПО СЕБЕСТОИМОСТИ</div>
        <div className="menu-option-container">
            {options.map((menuItem, index) => {
                return (<div className="menu-option" key={index}>{menuItem.name}
                    <svg width="18" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 31L16.5 16L1.5 1" stroke="white" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>);
            })}
        </div>
    </section>);
}