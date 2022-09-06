import './InteriorPage.scss';
import Slider from "../../components/Slider/Slider";
import useTheme from "../../hooks/useTheme";
import {contentPrefix} from "../../js/globals";
import {useEffect} from "react";

const content = {
    pc: {
        restaurant: [`${contentPrefix}/images/slider_images/restaurant/pc/slider_restaurant_1.jpg`, `${contentPrefix}/images/slider_images/restaurant/pc/slider_restaurant_2.jpg`, `${contentPrefix}/images/slider_images/restaurant/pc/slider_restaurant_3.jpg`, `${contentPrefix}/images/slider_images/restaurant/pc/slider_restaurant_4.jpg`, `${contentPrefix}/images/slider_images/restaurant/pc/slider_restaurant_5.jpg`,],
        club: [`${contentPrefix}/images/slider_images/club/pc/slider_club_1.jpg`, `${contentPrefix}/images/slider_images/club/pc/slider_club_2.jpg`, `${contentPrefix}/images/slider_images/club/pc/slider_club_3.jpg`, `${contentPrefix}/images/slider_images/club/pc/slider_club_4.jpg`, `${contentPrefix}/images/slider_images/club/pc/slider_club_5.jpg`,]
    },
    tablet: {
        restaurant: [`${contentPrefix}/images/slider_images/restaurant/tablet/slider_restaurant_1.jpg`, `${contentPrefix}/images/slider_images/restaurant/tablet/slider_restaurant_2.jpg`, `${contentPrefix}/images/slider_images/restaurant/tablet/slider_restaurant_3.jpg`, `${contentPrefix}/images/slider_images/restaurant/tablet/slider_restaurant_4.jpg`, `${contentPrefix}/images/slider_images/restaurant/tablet/slider_restaurant_5.jpg.jpg`,],
        club: [`${contentPrefix}/images/slider_images/club/tablet/slider_club_1.jpg`, `${contentPrefix}/images/slider_images/club/tablet/slider_club_2.jpg`, `${contentPrefix}/images/slider_images/club/tablet/slider_club_3.jpg`, `${contentPrefix}/images/slider_images/club/tablet/slider_club_4.jpg`, `${contentPrefix}/images/slider_images/club/tablet/slider_club_5.jpg`,]
    },
    mobile: {
        restaurant: [`${contentPrefix}/images/slider_images/restaurant/mobile/slider_restaurant_1.jpg`, `${contentPrefix}/images/slider_images/restaurant/mobile/slider_restaurant_2.jpg`, `${contentPrefix}/images/slider_images/restaurant/mobile/slider_restaurant_3.jpg`, `${contentPrefix}/images/slider_images/restaurant/mobile/slider_restaurant_4.jpg`, `${contentPrefix}/images/slider_images/restaurant/mobile/slider_restaurant_5.jpg`,],
        club: [`${contentPrefix}/images/slider_images/club/mobile/slider_club_1.jpg`, `${contentPrefix}/images/slider_images/club/mobile/slider_club_2.jpg`, `${contentPrefix}/images/slider_images/club/mobile/slider_club_3.jpg`, `${contentPrefix}/images/slider_images/club/mobile/slider_club_4.jpg`, `${contentPrefix}/images/slider_images/club/mobile/slider_club_5.jpg`,]
    }
}

export default function InteriorPage() {
    const {isDarkMode} = useTheme();

    let images = [];
    if (window.innerWidth <= 650) {
        images = content.mobile;
    } else if (window.innerWidth <= 1250) {
        images = content.tablet;
    } else {
        images = content.pc;
    }
    // useEffect(() => {
    //     console.log('size is changed');
    // }, [window.innerWidth]);


    return (<section id="interior" className={`interior ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="interior-title">ИНТЕРЬЕР</div>
        <Slider images={isDarkMode ? images.club : images.restaurant} toggleStyle={'round'} customImages/>
    </section>);
}