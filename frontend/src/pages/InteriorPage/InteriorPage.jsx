import './InteriorPage.scss';
import Slider from "../../components/Slider/Slider";

const images = [
    '/images/slider/slider_1.jpg',
    '/images/slider/slider_2.jpg',
    '/images/slider/slider_3.jpg',
]

export default function InteriorPage() {
    return (
        <section id="interior">
            <div className="interior-title">ИНТЕРЬЕР</div>
                <Slider images={images} toggleStyle={'round'}/>
        </section>
    );
}