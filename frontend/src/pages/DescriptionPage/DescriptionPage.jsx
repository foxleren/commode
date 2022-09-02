import './DescriptionPage.scss';
import {contentPrefix} from "../../js/globals";
import useTheme from "../../hooks/useTheme";

export default function DescriptionPage() {
    const {isDarkMode} = useTheme();

    return (<section id={'dialog'} className={`description-section ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="description-section-inner">
            <div className="description-graffiti"/>

            {/*<div />*/}
            {/*<img src={`${contentPrefix}${modifyPath({*/}
            {/*    path: contentPath.description_graffiti, isDarkMode: isDarkMode*/}
            {/*})}`} alt={''}/>*/}
            <img className="description-person-1" src={`${contentPrefix}/images/description/description_person_1.svg`}
                 alt={''}/>
            {/*<div className="description-message-container-outer">*/}
            {/*<div className="description-message-container">*/}
            <div className="description-message first transparent left">где отобедаем, милейший?</div>
            <div className="description-message second white right">в <span>commode</span> — это ресторан в центре
                Санкт-петербурга, где подают изысканные горячие блюда и напитки по себестоимости, А расположен
                он в историческом здании с самой большой террасой в городе.
            </div>
            <div className="description-message third white left">А стоимость пребывания по пятницам и субботам
                - <br/>всего <span>4 рубля в минуту?</span>
            </div>

            {/*</div>*/}
            <div className="description-message fourth white right">да, а по остальным дням — <br/>
                <span>3 рубля в минуту</span>
            </div>
            <img className="description-person-2 inside" src={`${contentPrefix}/images/description/description_person_2.svg`}
                 alt={''}/>
        </div>
        <img className="description-person-2 outside" src={`${contentPrefix}/images/description/description_person_2.svg`}
             alt={''}/>
        {/*</div>*/}
    </section>);
}