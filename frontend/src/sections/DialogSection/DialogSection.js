import './DialogSection.scss';
import {contentPrefix} from "../../js/globals";
import useTheme from "../../hooks/useTheme";

export default function DialogSection() {
    const {isDarkMode} = useTheme();

    // window.onscroll = () => {
    //     console.log('dialog');
    // }


    return (<section id={'dialog'} className={`dialog-section ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="dialog-section-inner">
            <div className="dialog-graffiti"/>
            <img className="dialog-person-1" src={`${contentPrefix}/images/dialog/dialog_person_1.svg`}
                 alt={''}/>
            <div id={'dialog-message-1'}
                 className="dialog-message first transparent left hidden">{isDarkMode ? 'где затусим, милейший?' : 'где отобедаем, милейший?'}</div>
            <div id={'dialog-message-2'}
                 className="dialog-message second white right hidden">в <span>commode</span>{isDarkMode ? ' — это ресторан и клуб, который вместил в себя все: кухню по себестоимости, видовую летнюю террасу на центр Питера, развлекательные программы, DJ-сеты, караоке и лучшие open-air тусовки.' : ' — это ресторан в центре Санкт-петербурга, где подают изысканные горячие блюда и напитки по себестоимости, А расположен он в историческом здании с самой большой террасой в городе.'}
            </div>
            <div id={'dialog-message-3'} className="dialog-message third white left hidden">А стоимость пребывания
                по
                пятницам и субботам
                - <br/>всего <span>4 рубля в минуту?</span>
            </div>
            <div id={'dialog-message-4'} className="dialog-message fourth white right hidden">да, а по остальным
                дням
                — <br/>
                <span>3 рубля в минуту</span>
            </div>
            <img className="dialog-person-2 inside"
                 src={`${contentPrefix}/images/dialog/dialog_person_2.svg`}
                 alt={''}/>
        </div>
        <img className="dialog-person-2 outside"
             src={`${contentPrefix}/images/dialog/dialog_person_2.svg`}
             alt={''}/>
    </section>);
}