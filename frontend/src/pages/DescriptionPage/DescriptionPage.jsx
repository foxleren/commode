import './DescriptionPage.scss';
import {contentPrefix} from "../../js/globals";
import useTheme from "../../hooks/useTheme";
import {useState} from "react";

export default function DescriptionPage() {
    const {isDarkMode} = useTheme();

    // window.onscroll = () => {
    //     console.log('dialog');
    // }


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
            <div id={'dialog-message-1'}
                 className="description-message first transparent left hidden">{isDarkMode ? 'где затусим, милейший?' : 'где отобедаем, милейший?'}</div>
            <div id={'dialog-message-2'}
                 className="description-message second white right hidden">в <span>commode</span>{isDarkMode ? ' — это ресторан и клуб, который вместил в себя все: кухню по себестоимости, видовую летнюю террасу на центр Питера, развлекательные программы, DJ-сеты, караоке и лучшие open-air тусовки.' : ' — это ресторан в центре Санкт-петербурга, где подают изысканные горячие блюда и напитки по себестоимости, А расположен он в историческом здании с самой большой террасой в городе.'}
            </div>
            <div id={'dialog-message-3'} className="description-message third white left hidden">А стоимость пребывания
                по
                пятницам и субботам
                - <br/>всего <span>4 рубля в минуту?</span>
            </div>

            {/*</div>*/}
            <div id={'dialog-message-4'} className="description-message fourth white right hidden">да, а по остальным
                дням
                — <br/>
                <span>3 рубля в минуту</span>
            </div>
            <img className="description-person-2 inside"
                 src={`${contentPrefix}/images/description/description_person_2.svg`}
                 alt={''}/>
        </div>
        <img className="description-person-2 outside"
             src={`${contentPrefix}/images/description/description_person_2.svg`}
             alt={''}/>
        {/*</div>*/}
    </section>);
}