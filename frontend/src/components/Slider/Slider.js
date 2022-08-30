import './Slider.scss';
import React from 'react';
import SliderToggle from "./SliderToggle";
import SliderImage from "./SliderImage";
import useTheme from "../../hooks/useTheme";
import usePreloader from "../../hooks/usePreloader";
import {modifyPath} from "../../tools/modifyPath";


export default function Slider({images = [''], showToggler = true, toggleStyle= 'round', autoPlayTime = 3000}) {

    const [currentSlide, setCurrentSlide] = React.useState(0);

    function changeSlide(actualSlide = currentSlide + 1) {
        let newSlide = actualSlide === images.length ? 0 : actualSlide;
        setCurrentSlide(newSlide)
    }

    React.useEffect(() => {
        const timer = setTimeout(() => {
            changeSlide();
        }, autoPlayTime);

        return () => clearTimeout(timer);
    }, [currentSlide]);


    return (<div className="slider-container">
        <div className="slider-item">
            {images.map((image, index) => {
                return <SliderImage key={index} link={image} margin={index === 0 ? -currentSlide * 100 + '%' : null}/>
            })}
        </div>
        {showToggler && <SliderToggle classes={toggleStyle} itemCount={images.length} slide={currentSlide} changeSlide={changeSlide}/>}
    </div>);
}