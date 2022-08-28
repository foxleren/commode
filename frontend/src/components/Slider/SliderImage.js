export default function SliderImage({link, margin}) {
    return (<div className="slide-container"
                 style={{marginLeft: margin}}>
        <img src={link} alt={'slide'}/>
    </div>);
}