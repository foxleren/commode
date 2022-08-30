import './Footer.scss';
import {contentPrefix} from "../../js/globals";

export default function Footer() {
    return (<footer id={'footer'}>
        <img className="footer-logo" src={`${contentPrefix}/images/welcome_logo.svg`} alt={''}/>
        <div className="footer-bottom">
            <div className="footer-schedule">ВС-ЧТ 12:00-05:00 <br/>ПТ-СБ 12:00-07:00</div>
            <div className="footer-contacts">Контакты<br/>Почта<br/>416-48-48</div>
            <div className="footer-documents">
                <div className="footer-documents-item">
                    Документы:
                </div>
                <div className="footer-documents-item">
                    Согласие на обработку <br/> персональных данных
                </div>
                <div className="footer-documents-item">
                    Политика конфиденциальности
                </div>
                <div className="footer-documents-item">
                    ИП<br/>ООО<br/>ОГРН<br/>Юр адрес<br/>Почтовый адрес
                </div>

            </div>
        </div>
    </footer>);
}