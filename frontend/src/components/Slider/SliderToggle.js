export default function SliderToggle({itemCount, slide, changeSlide, classes}) {
    return (<div className="slider-toggle-container">
        {Array(itemCount).fill(1).map((_, index) => {
            return <div className={`slider-toggle-item ${index === slide ? 'active' : 'inactive'} ${classes}`}
                        key={index} onClick={() => changeSlide(index)}/>
        })}
    </div>);
}