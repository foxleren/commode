import './InteriorPage.scss';
import Slider from "../../components/Slider/Slider";
import useTheme from "../../hooks/useTheme";
import {contentPrefix} from "../../js/globals";

const content = {
    restaurant: [`${contentPrefix}/images/slider/slider_1_lightMode.jpg`, `${contentPrefix}/images/slider/slider_2_lightMode.jpg`, `${contentPrefix}/images/slider/slider_3_lightMode.jpg`, `${contentPrefix}/images/slider/slider_4_lightMode.jpg`, `${contentPrefix}/images/slider/slider_5_lightMode.jpg`],
    club: [`${contentPrefix}/images/slider/slider_1_darkMode.jpg`, `${contentPrefix}/images/slider/slider_2_darkMode.jpg`, `${contentPrefix}/images/slider/slider_3_darkMode.jpg`, `${contentPrefix}/images/slider/slider_4_darkMode.jpg`, `${contentPrefix}/images/slider/slider_5_darkMode.jpg`],
}


export default function InteriorPage() {
    const {isDarkMode} = useTheme();

    return (<section id="interior">
        <div className="interior-title">ИНТЕРЬЕР</div>
        <Slider images={isDarkMode ? content.club : content.restaurant} toggleStyle={'round'}/>
    </section>);
}