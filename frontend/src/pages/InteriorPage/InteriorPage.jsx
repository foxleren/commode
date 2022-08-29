import './InteriorPage.scss';
import Slider from "../../components/Slider/Slider";
import {contentPrefix} from "../../js/globals";

export default function InteriorPage({images}) {
    return (
        <section id="interior">
            <div className="interior-title">ИНТЕРЬЕР</div>
                <Slider images={images} toggleStyle={'round'}/>
        </section>
    );
}