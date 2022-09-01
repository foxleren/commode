import './BanquetHall.scss';
import {contentPrefix} from "../../js/globals";
import Button from "../Button/Button";
import React from "react";
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
}, {
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

    if (window.innerWidth <= 1250) {

    }

    const setNextSlide = () => {
        let nextSlide = currentSlide + 1;
        if (nextSlide < cards.length) {
            setCurrentSlide(nextSlide);
            if (nextSlide === cards.length - 1) {
                setIsRightDisabled(true);
            }
            setIsLeftDisabled(false);
        }
    }
    const setPrevSlide = () => {
        let nextSlide = currentSlide - 1;
        if (nextSlide >= 0) {
            setCurrentSlide(nextSlide);
            if (nextSlide === 0) {
                setIsLeftDisabled(true);
            }
            setIsRightDisabled(false);
        }
    }

    const CalcMargin = () => {
        //console.log(-currentSlide * 100 + '%')
        if (window.innerWidth <= 650) {
            return -currentSlide * 300 + 'px';
        }
        if (window.innerWidth <= 1250) {
            return -currentSlide * 550 + 'px';
        }
        if (window.innerWidth > 1250) {
            return -currentSlide * 1200 + 'px';
            //return -currentSlide * 100 + '%';
        }
        //return -currentSlide * 100 + '%';
    }

    return (<div className={'banquet-hall-container'}>
        <img className={'banquet-hall-hand'} src={`${contentPrefix}/images/hall/hall_hand.svg`} alt={''}/>
        <div className={'card-slider-container'}>
            {cards.map((card, index) => {
                return (<div className={'card-slider-item-container'} key={index}
                             style={{marginLeft: `${index === 0 ? CalcMargin() : null}`}}>
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
            <svg className={`card-slider-toggle-item left ${isLeftDisabled ? 'disabled' : 'active'}`}
                 onClick={setPrevSlide} width="11" height="18" viewBox="0 0 11 18" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 1L1.5 9L9.5 17" stroke="white" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
            <svg className={`card-slider-toggle-item right ${isRightDisabled ? 'disabled' : 'active'}`}
                 onClick={setNextSlide} width="11" height="18" viewBox="0 0 11 18" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1L9.5 9L1.5 17" stroke="white" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>

            {/*<div className={`card-slider-toggle-item left ${isLeftDisabled ? 'disabled' : 'active'}`}*/}
            {/*     onClick={setPrevSlide}/>*/}
            {/*<div className={`card-slider-toggle-item right ${isRightDisabled ? 'disabled' : 'active'}`}*/}
            {/*     onClick={setNextSlide}/>*/}
        </div>
    </div>);
}