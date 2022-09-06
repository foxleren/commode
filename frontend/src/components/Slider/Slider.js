import './Slider.scss';
import React from 'react';
import SliderToggle from "./SliderToggle";
import useTheme from "../../hooks/useTheme";

const imageClasses = [
    'slider-image-1', 'slider-image-2', 'slider-image-3', 'slider-image-4', 'slider-image-5',
]


export default function Slider({
                                   images = [''],
                                   showToggler = true,
                                   toggleStyle = 'round',
                                   autoPlayTime = 3000,
                                   customImages = false
                               }) {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const {isDarkMode} = useTheme();

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


    return (<div className={`slider-container ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="slider-item">
            {customImages && imageClasses.map((className, index) => {
                return (<div className="slide-container" key={index}
                             style={{marginLeft: index === 0 ? -currentSlide * 100 + '%' : null}}>
                    <div className={className} alt={'slide'}/>
                </div>)
            })}
            {!customImages && images.map((image, index) => {
                return (<div className="slide-container" key={index}
                             style={{marginLeft: index === 0 ? -currentSlide * 100 + '%' : null}}>
                    <img src={image} alt={'slide'}/>
                </div>)
            })}
            {/*{imageClasses.map((className, index) => {*/}
            {/*    return (<div className="slide-container"*/}
            {/*                 style={{marginLeft: index === 0 ? -currentSlide * 100 + '%' : null}}>*/}
            {/*        /!**!/*/}
            {/*        {customImages ? <div className={className} alt={'slide'}/> :*/}
            {/*            <img className={className} alt={'slide'}/>}*/}

            {/*    </div>)*/}
            {/*    // return <SliderImage key={index} link={image} margin={index === 0 ? -currentSlide * 100 + '%' : null}/>*/}
            {/*})}*/}
        </div>
        {showToggler && <SliderToggle classes={toggleStyle} itemCount={images.length} slide={currentSlide}
                                      changeSlide={changeSlide}/>}
    </div>);
}