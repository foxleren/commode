import './BanquetMenu.scss';
import {contentPrefix} from "../../js/globals";

const menus = [{
    name: 'БАНКЕТНОЕ МЕНЮ', file: '/pdf/menu_commode.pdf',
}, {
    name: 'ФУРШЕТНОЕ МЕНЮ', file: '/pdf/bar_commode.pdf',
}, {
    name: 'АРТ ПРОГРАММА', file: '/pdf/pdf_example.pdf',
}]


export default function BanquetMenu() {
    return (<section id={'banquet-menu'} className={'banquet-menu-container'}>
        {menus.map((item, index) => {
            return (<a key={index} href={`${contentPrefix}${item.file}`} download={`${item.name}.pdf`}
                       className="menu-option">{item.name}
                <svg width="18" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 31L16.5 16L1.5 1" stroke="white" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </a>);
        })}

        <div className={'banquet-menu-text'}>
            Проведите ваше мероприятие в шикарных залах центра Санкт-Петербурга или на самой большой видовой терассе
        </div>
        <img className={'banquet-menu-person'} src={`${contentPrefix}/images/dialog/dialog_person_1.svg`} alt={''}/>
    </section>);
}