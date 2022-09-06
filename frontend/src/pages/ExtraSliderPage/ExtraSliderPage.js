import './ExtraSliderPage.scss';
import Slider from "../../components/Slider/Slider";
import {contentPrefix} from "../../js/globals";
import useTheme from "../../hooks/useTheme";

const content = {
    restaurant: [`${contentPrefix}/images/extra_slider/extra_slider_1_lightMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_2_lightMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_3_lightMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_4_lightMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_5_lightMode.jpg`],
    club: [`${contentPrefix}/images/extra_slider/extra_slider_1_darkMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_2_darkMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_3_darkMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_4_darkMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_5_darkMode.jpg`],
}

export default function ExtraSliderPage() {
    const {isDarkMode} = useTheme();

    return (
        <section id={`extra-slider`} className={`extra-slider ${isDarkMode ? 'dark' : 'light'}`}>
            <Slider images={isDarkMode ? content.club : content.restaurant} toggleStyle={'round'} customImages/>
        </section>);
}