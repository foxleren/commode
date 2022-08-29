import './SchedulePage.scss';
import {contentPrefix} from "../../js/globals";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";

export default function SchedulePage() {
    return (
        <section id="schedule">
            <div className="schedule-days">
                <div className="schedule-days-container outer">
                    <div className="schedule-days-item">ПН</div>
                    <div className="schedule-days-item">ВТ</div>
                    <div className="schedule-days-item">СР</div>
                    <div className="schedule-days-item">ЧТ</div>
                    <div className="schedule-days-container inner">
                        <div>
                            <div className="schedule-days-item">ПТ</div>
                            <div className="schedule-days-item last">СБ</div>
                        </div>
                        <div className="schedule-days-subtext inner">
                            <span className="schedule-underline"/>
                            живая музыка
                        </div>
                    </div>
                    <div className="schedule-days-item">ВС</div>
                </div>

                <div className="schedule-days-subtext outer">
                    <span className="schedule-underline"/>
                    <div>DJ-сеты, танцы и караоке</div>
                </div>
            </div>


            <img className="schedule-graffiti" src={`${contentPrefix}/images/schedule/schedule_graffiti.svg`}
                 alt={''}/>
            <img className="schedule-person" src={`${contentPrefix}/images/schedule/schedule_person.svg`} alt={''}/>
            <div className="schedule-messages">
                <div className="schedule-message first">и все это с 20:00</div>
                <div className="schedule-message second">
                    <span className="schedule-highlight">кстати, апероль <br/> тут по 290 рублей</span>
                    <span className="schedule-message-subtext">перейти в режим клуба:</span>
                    <ThemeToggle/>
                </div>
            </div>
        </section>
    );
}