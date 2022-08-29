import './DescriptionPage.scss';
import {contentPrefix} from "../../js/globals";
import useTheme from "../../hooks/useTheme";
import {modifyPath} from '../../tools/modifyPath';
import {contentPath} from "../../utitlities/contentPath";

export default function DescriptionPage() {
    const {isDarkMode} = useTheme();

    return (<section className={`description-section ${isDarkMode ? 'dark' : 'light'}`}>
        <img src={`${contentPrefix}${modifyPath({
            path: contentPath.description_graffiti, isDarkMode: isDarkMode
        })}`} alt={''}/>
        <img className="description-person-1" src={`${contentPrefix}/images/description/description_person_1.svg`}
             alt={''}/>
        <img className="description-person-2" src={`${contentPrefix}/images/description/description_person_2.svg`}
             alt={''}/>
        {/*<div className="description-message-container">*/}
        <div className="description-message first transparent left">где отобедаем, милейший?</div>
        <div className="description-message second white right">в <span>commode</span> — это ресторан в центре
            Санкт-петербурга, где подают изысканные горячие блюда и напитки по себестоимости, А <br/> расположен
            он <br/> в
            историческом здании <br/> с самой большой <br/> террасой в городе.
        </div>
        <div className="description-message third white left">А стоимость пребывания по пятницам и субботам
            - <br/>всего <span>4 рубля в минуту?</span>
        </div>
        <div className="description-message fourth white right">да, а по остальным дням — <br/>
            <span>3 рубля в минуту</span>
        </div>
        {/*</div>*/}

    </section>);
}