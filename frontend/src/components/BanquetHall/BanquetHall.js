import './BanquetHall.scss';
import {contentPrefix} from "../../js/globals";
import Button from "../Button/Button";
import React from "react";
import SliderToggle from "../Slider/SliderToggle";
import Slider from "../Slider/Slider";
import {Link} from "react-scroll";
const cards = [{
    hallName: 'ЗАЛ ДОСТОЕВСКИЙ 1',
    hallInfo: 'Информация про зал и вместимость',
    hallPrice: 'АРЕНДА 5700 В ЧАС',
    hallImages: [`${contentPrefix}/images/extra_slider/extra_slider_1_lightMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_2_lightMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_3_lightMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_4_lightMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_5_lightMode.jpg`]
}, {
    hallName: 'ЗАЛ ДОСТОЕВСКИЙ 2',
    hallInfo: 'Информация про зал и вместимость',
    hallPrice: 'АРЕНДА 5700 В ЧАС',
    hallImages: [`${contentPrefix}/images/extra_slider/extra_slider_1_lightMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_2_lightMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_3_lightMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_4_lightMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_5_lightMode.jpg`]
},
    {
        hallName: 'ЗАЛ ДОСТОЕВСКИЙ 3',
        hallInfo: 'Информация про зал и вместимость',
        hallPrice: 'АРЕНДА 5700 В ЧАС',
        hallImages: [`${contentPrefix}/images/extra_slider/extra_slider_1_lightMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_2_lightMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_3_lightMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_4_lightMode.jpg`, `${contentPrefix}/images/extra_slider/extra_slider_5_lightMode.jpg`]
    },]
export default function BanquetHall() {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [isLeftDisabled, setIsLeftDisabled] = React.useState(true);
    const [isRightDisabled, setIsRightDisabled] = React.useState(false);

    function changeSlide(actualSlide = currentSlide + 1) {
        let newSlide = actualSlide === cards.length ? 0 : actualSlide;
        setCurrentSlide(newSlide)
    }

    const setNextSlide = () => {
        let nextSlide =  currentSlide + 1;
        if (nextSlide < cards.length) {
            setCurrentSlide(nextSlide);
            if (nextSlide === cards.length - 1) {
                setIsRightDisabled(true);
            }
            setIsLeftDisabled(false);
        }
    }
    const setPrevSlide = () => {
        let nextSlide =  currentSlide - 1;
        if (nextSlide >= 0) {
            setCurrentSlide(nextSlide);
            if (nextSlide === 0) {
                setIsLeftDisabled(true);
            }
            setIsRightDisabled(false);
        }
    }

    return (<div className={'banquet-hall-container'}>
        <img className={'banquet-hall-hand'} src={`${contentPrefix}/images/hall/hall_hand.svg`} alt={''}/>
            <div className={'card-slider-container'}>
                {cards.map((card, index) => {
                    return (<div className={'card-slider-item-container'} key={index}
                                 style={{marginLeft: `${index === 0 ? -currentSlide * 100 + '%' : null}`}}>
                        <div className={'card-slider-item'}
                        >
                            <div className={'card-slider-item-left'}>
                                <div className={'card-slider-item-title'}>{card.hallName}</div>
                                <div className={'card-slider-item-info'}>{card.hallInfo}</div>
                                <div className={'card-slider-item-price'}>{card.hallPrice}</div>
                                <Link to={'book'} smooth spy duration={500}>
                                    <Button content={'Арендовать'} type={'book'} color='black'/>
                                </Link>

                            </div>
                            <div className={'card-slider-item-right'}>
                                <Slider images={card.hallImages} toggleStyle={'round'}/>
                            </div>
                        </div>
                    </div>);
                })}
            </div>
            <div className={'card-slider-toggle'}>
                <div className={`card-slider-toggle-item left ${isLeftDisabled ? 'disabled' : 'active'}`} onClick={setPrevSlide}/>
                <div className={`card-slider-toggle-item right ${isRightDisabled ? 'disabled' : 'active'}`} onClick={setNextSlide}/>
            </div>
        </div>);
}