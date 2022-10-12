import './SchedulePage.scss';
import {contentPrefix} from "../../js/globals";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import useTheme from "../../hooks/useTheme";

export default function SchedulePage() {
    const {isDarkMode} = useTheme();

    // window.onscroll = () => {
    //     console.log('schedule');
    // }

    return (<section id="schedule" className={`schedule ${isDarkMode ? 'dark' : 'light'}`}>
            {/*<div className="schedule-title">ПРОГРАММА КАЖДЫЙ ДЕНЬ</div>*/}
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
                            <span className="schedule-underline red"/>
                            <div className={'schedule-days-subtext-text'}>живая музыка</div>
                        </div>
                    </div>
                    <div className="schedule-days-item">ВС</div>
                </div>
                <div className="schedule-days-subtext outer">
                    <span className="schedule-underline"/>
                    <div className={'schedule-days-subtext-text'}>DJ-сеты, танцы и караоке</div>
                </div>
            </div>


            <img className="schedule-graffiti" src={`${contentPrefix}/images/schedule/schedule_graffiti.svg`}
                 alt={''}/>
            <img className="schedule-person" src={`${contentPrefix}/images/schedule/schedule_person.svg`} alt={''}/>
            <div id={'schedule-messages'} className="schedule-messages hidden">
                <div id={'schedule-message-1'} className="schedule-message first hidden">и все это с 21:00</div>
                <div id={'schedule-message-2'} className="schedule-message second hidden">
                    {isDarkMode ? <span className="schedule-highlight">кстати, апероль <br/> тут по 290 рублей</span> :
                        <span className="schedule-highlight">кстати, тут мидии <br/> по 390 рублей</span>}
                    <span className="schedule-message-subtext">{isDarkMode ? 'перейти в режим ресторана:' : 'перейти в режим клуба:'}</span>
                    <ThemeToggle/>
                </div>
            </div>

        </section>);
}