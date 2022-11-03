import './Footer.scss';
import {contentPrefix} from "../../js/globals";

export default function Footer() {
    return (<footer id={'footer'}>
            <img className="footer-logo" src={`${contentPrefix}/images/welcome_logo.svg`} alt={''}/>
            <div className="footer-bottom">
                {/*<div className="footer-schedule">ВС-ЧТ 18:00-05:00<br/>ПТ-СБ 18:00-6:00<br/>416-48-48</div>*/}
                {/*<div className="footer-contacts">Номер счёта: 40702810501300031846<br/>Валюта: RUB<br/>Название: ОБЩЕСТВО С*/}
                {/*    ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "КОМОД"<br/>ИНН: 7840100170<br/>КПП: 784001001*/}
                {/*</div>*/}
                <div className="footer-documents">
                    <div className="footer-documents-item">
                        ВС-ЧТ 18:00-05:00
                    </div>
                    <div className="footer-documents-item">
                        ПТ-СБ 18:00-6:00
                    </div>
                    <div className="footer-documents-item">
                        416-48-48
                    </div>
                    <div className="footer-documents-item">
                        Почта: pr@commode.club
                    </div>
                    <div className={'footer-socials'}>
                        {/*<a href={'mailto:pr@commode.club'} target={'_blank'} rel="noreferrer">*/}
                        {/*    <svg width="20" height="16" viewBox="0 0 20 16" fill="none"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fillRule="evenodd" clipRule="evenodd"*/}
                        {/*              d="M0.803542 4.35317C0.523398 6.95607 0.535886 9.95806 0.925709 12.5504C1.14141 13.9848 2.31208 15.0844 3.75715 15.21L5.26738 15.3413C8.41642 15.6151 11.5833 15.6151 14.7323 15.3413L16.2426 15.21C17.6876 15.0844 18.8583 13.9848 19.074 12.5504C19.4638 9.95805 19.4763 6.95624 19.1962 4.35333C19.16 4.05157 19.1192 3.75022 19.074 3.44937C18.8583 2.01497 17.6876 0.915329 16.2426 0.789712L14.7323 0.65843C11.5833 0.38469 8.41642 0.38469 5.26738 0.658431L3.75715 0.789712C2.31208 0.915329 1.14141 2.01497 0.925709 3.44937C0.880477 3.75016 0.839754 4.05147 0.803542 4.35317ZM5.39728 2.1528C8.45989 1.88657 11.5398 1.88657 14.6024 2.1528L16.1127 2.28408C16.867 2.34965 17.4781 2.92367 17.5907 3.67242C17.6024 3.75018 17.6137 3.82797 17.6248 3.9058L12.0638 6.99525C10.7802 7.70835 9.21943 7.70835 7.93584 6.99525L2.3749 3.90584C2.38596 3.828 2.39734 3.75019 2.40903 3.67242C2.52163 2.92367 3.13272 2.34965 3.88705 2.28408L5.39728 2.1528ZM17.8084 5.51977C18.0023 7.78752 17.9298 10.0724 17.5907 12.3273C17.4781 13.0761 16.867 13.6501 16.1127 13.7157L14.6024 13.847C11.5398 14.1132 8.45989 14.1132 5.39728 13.847L3.88705 13.7157C3.13272 13.6501 2.52163 13.0761 2.40903 12.3273C2.06994 10.0724 1.99738 7.78754 2.19135 5.5198L7.20737 8.30648C8.944 9.27128 11.0556 9.27128 12.7923 8.30648L17.8084 5.51977Z"*/}
                        {/*              fill="white"/>*/}
                        {/*    </svg>*/}
                        {/*</a>*/}
                        <a href={'https://t.me/commodeclub'} target={'_blank'} rel="noreferrer">
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M4.78778 11.0196C4.83155 11.0344 4.87574 11.0448 4.91988 11.0512C4.96801 11.1644 5.03021 11.3107 5.10276 11.4818C5.27984 11.8994 5.51843 12.4643 5.76471 13.0535C6.26695 14.2552 6.77356 15.4939 6.88545 15.8485C7.02396 16.2868 7.17037 16.5848 7.33021 16.7883C7.41285 16.8935 7.50843 16.9853 7.62028 17.0549C7.67657 17.0899 7.73605 17.1186 7.79813 17.14C7.80086 17.141 7.80359 17.1419 7.80633 17.1428C8.12634 17.2636 8.4181 17.2133 8.60077 17.1518C8.69851 17.1188 8.7776 17.0791 8.83364 17.0469C8.86222 17.0304 8.88636 17.0151 8.90562 17.0021L8.91017 16.9991L11.7364 15.2366L15.0009 17.7394C15.0491 17.7763 15.1016 17.8073 15.1573 17.8316C15.5494 18.0027 15.9292 18.0624 16.2865 18.0136C16.6431 17.9649 16.9263 17.8151 17.1371 17.6464C17.3435 17.4813 17.4834 17.2963 17.5705 17.1589C17.615 17.0887 17.6485 17.0266 17.672 16.9791C17.6839 16.9552 17.6934 16.9346 17.7007 16.9181L17.7102 16.8963L17.7137 16.8877L17.7152 16.8841L17.7159 16.8824L17.7165 16.8808C17.7337 16.8379 17.7468 16.7935 17.7558 16.7482L20.736 1.72274C20.7456 1.67469 20.7504 1.62581 20.7504 1.57682C20.7504 1.13681 20.5846 0.718409 20.1947 0.464515C19.8616 0.247518 19.4904 0.238177 19.2558 0.255982C19.0028 0.275189 18.769 0.337656 18.6122 0.387572C18.5306 0.41355 18.4622 0.438614 18.4128 0.457735C18.3881 0.467345 18.3677 0.47559 18.3526 0.481878L18.3412 0.486665L1.6275 7.04321L1.62533 7.04399C1.61468 7.04786 1.60101 7.05297 1.58475 7.05929C1.55239 7.07189 1.50903 7.08965 1.45838 7.1126C1.35959 7.15738 1.22101 7.22734 1.0788 7.32473C0.851615 7.48031 0.329125 7.90641 0.417106 8.60971C0.487295 9.17078 0.871675 9.51537 1.10587 9.68107C1.23446 9.77206 1.35662 9.83713 1.44559 9.87949C1.48687 9.89913 1.57256 9.93395 1.60975 9.94905L1.61913 9.95287L4.78778 11.0196ZM18.9261 1.86786L18.9238 1.86888C18.9155 1.8725 18.9071 1.87596 18.8987 1.87928L2.16465 8.44378C2.15591 8.44721 2.14711 8.45047 2.13825 8.45357L2.12893 8.4571C2.11823 8.46127 2.1002 8.46858 2.07758 8.47884C2.06475 8.48465 2.05137 8.49099 2.03772 8.4978C2.05647 8.50836 2.07442 8.51754 2.09036 8.52513C2.10567 8.53242 2.11735 8.5374 2.12374 8.54003L5.26637 9.59802C5.32389 9.61738 5.37752 9.64304 5.42674 9.67397L15.8035 3.59948L15.8132 3.59374C15.8208 3.58927 15.8307 3.58353 15.8426 3.5768C15.8662 3.56345 15.8987 3.54568 15.9373 3.52603C16.0093 3.48938 16.1245 3.43497 16.2543 3.39485C16.3447 3.36692 16.6112 3.28823 16.8993 3.38064C17.0771 3.43767 17.2612 3.56028 17.3809 3.76798C17.4404 3.87117 17.4721 3.97483 17.4874 4.06972C17.5282 4.2192 17.5218 4.36681 17.4898 4.49424C17.4211 4.76875 17.2282 4.98287 17.0527 5.14665C16.9024 5.28706 14.957 7.16292 13.0378 9.01468C12.0808 9.93813 11.1335 10.8525 10.4255 11.5359L9.96041 11.9849L15.8323 16.4867C15.967 16.5349 16.0466 16.5325 16.0835 16.5274C16.1273 16.5214 16.1633 16.5045 16.1999 16.4752C16.241 16.4424 16.2769 16.398 16.3037 16.3557L16.3048 16.354L19.1953 1.78102C19.1523 1.79133 19.109 1.80361 19.0672 1.81691C19.0198 1.83198 18.9808 1.84634 18.9549 1.85637C18.9421 1.86134 18.9329 1.86511 18.9278 1.86719L18.9261 1.86786ZM10.4649 14.2618L9.29339 13.3636L9.00953 15.1693L10.4649 14.2618ZM8.2187 11.5814L9.38368 10.4567C10.0918 9.77321 11.0391 8.85879 11.9963 7.93524L12.9688 6.997L6.44877 10.8138L6.48376 10.8963C6.66146 11.3154 6.90111 11.8827 7.14869 12.4751C7.33382 12.918 7.52741 13.3844 7.70374 13.8162L7.98677 12.0158C8.01406 11.8422 8.09886 11.692 8.2187 11.5814Z"
                                      fill="white"/>
                            </svg>
                        </a>
                        <a href={'https://vk.com/commodeclub'} target={'_blank'} rel="noreferrer">
                            <svg width="24" height="16" viewBox="0 0 24 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M23.405 12.865C22.8611 11.7695 22.1444 10.7688 21.2825 9.90128C20.9892 9.56032 20.6453 9.22383 20.3768 8.96116L20.3393 8.92446C20.2008 8.78895 20.0864 8.67644 19.9928 8.5795C21.1713 6.94074 22.18 5.18595 23.003 3.34222L23.0362 3.26783L23.0595 3.18976C23.1676 2.82687 23.2922 2.1368 22.8515 1.51317C22.396 0.868589 21.6666 0.752342 21.1782 0.752342H18.9311C18.4627 0.730866 17.9988 0.857507 17.6058 1.11498C17.2098 1.37439 16.9069 1.75278 16.7402 2.1951C16.2563 3.34779 15.6508 4.4442 14.9347 5.46598V2.83269C14.9347 2.4923 14.9027 1.92289 14.5382 1.44229C14.1018 0.866854 13.4707 0.752342 13.0326 0.752342H9.46708C9.00771 0.741718 8.56094 0.905974 8.2176 1.21259C7.866 1.52659 7.65052 1.96521 7.61687 2.43543L7.61369 2.47997V2.52463C7.61369 3.01011 7.80606 3.36822 7.95975 3.59344C8.02856 3.69427 8.10216 3.78606 8.14865 3.84403L8.15938 3.85741C8.20895 3.91923 8.24204 3.96049 8.27525 4.00566C8.3626 4.12448 8.48824 4.30768 8.52379 4.78174V6.2547C7.9091 5.24423 7.26066 3.89957 6.77276 2.46344L6.76527 2.4414L6.75697 2.41965C6.63532 2.10103 6.4402 1.63743 6.04941 1.28266C5.59288 0.868212 5.0529 0.752342 4.56182 0.752342H2.28187C1.78506 0.752342 1.18613 0.868566 0.739237 1.33999C0.299773 1.80358 0.25 2.35907 0.25 2.65442V2.78755L0.278039 2.91769C0.909544 5.84881 2.21076 8.59368 4.07946 10.9377C4.92668 12.2737 6.07468 13.3936 7.43213 14.2075C8.81124 15.0345 10.3671 15.5219 11.9715 15.6297L12.0133 15.6325H12.0553C12.7811 15.6325 13.5378 15.5699 14.1068 15.1907C14.8744 14.6792 14.9347 13.8936 14.9347 13.5021V12.3642C15.1317 12.5234 15.3761 12.7378 15.6753 13.0259C16.037 13.3879 16.325 13.7016 16.572 13.9754L16.7038 14.122L16.7046 14.1228C16.8964 14.3364 17.0852 14.5467 17.2571 14.7195C17.4732 14.9367 17.7396 15.1761 18.0745 15.3529C18.4371 15.5444 18.8177 15.631 19.222 15.631H21.5035C21.9841 15.631 22.6735 15.5173 23.1582 14.9554C23.6864 14.343 23.6461 13.5924 23.48 13.053L23.4501 12.956L23.405 12.865ZM17.6857 12.9706C17.4289 12.6859 17.1192 12.3484 16.7278 11.9571L16.7246 11.9539C15.3685 10.6464 14.7348 10.4186 14.2868 10.4186C14.0485 10.4186 13.7848 10.4454 13.6137 10.6585C13.5329 10.7591 13.4905 10.8805 13.4667 11.007C13.4429 11.1333 13.4347 11.2816 13.4347 11.4505V13.5021C13.4347 13.7569 13.3928 13.8639 13.275 13.9425C13.118 14.0471 12.7825 14.1319 12.0637 14.1325C10.6993 14.0395 9.37641 13.6244 8.20349 12.9211C7.02817 12.2164 6.03709 11.2425 5.31187 10.0797L5.30398 10.0671L5.29464 10.0554C3.55337 7.88813 2.34003 5.34571 1.7503 2.6291C1.7535 2.49814 1.78187 2.42045 1.82784 2.37195C1.87521 2.32198 1.98999 2.25234 2.28187 2.25234H4.56182C4.81544 2.25234 4.9467 2.30751 5.04117 2.39327C5.14827 2.4905 5.24116 2.65561 5.35401 2.95042C5.91362 4.5964 6.67038 6.13568 7.387 7.26751C7.74518 7.83323 8.09769 8.30409 8.41529 8.63685C8.57383 8.80295 8.72932 8.94063 8.8777 9.03848C9.02132 9.13319 9.18414 9.20789 9.35158 9.20789C9.43994 9.20789 9.54328 9.1988 9.64279 9.15475C9.74983 9.10735 9.83291 9.02837 9.89158 8.92253C9.99536 8.7353 10.0238 8.45798 10.0238 8.0947V4.73099L10.0233 4.7231C9.97146 3.90476 9.72439 3.44443 9.48381 3.11718C9.43108 3.04546 9.37909 2.98068 9.33359 2.92399L9.32113 2.90846C9.27117 2.84616 9.23142 2.79582 9.19876 2.74795C9.13891 2.66024 9.11571 2.59909 9.11381 2.53356C9.12162 2.45578 9.15828 2.38361 9.21675 2.33139C9.27744 2.27719 9.35686 2.24897 9.43816 2.25234H13.0326C13.2387 2.25234 13.3081 2.30262 13.343 2.34868C13.3923 2.4137 13.4347 2.54893 13.4347 2.83269V7.3613C13.4347 7.89924 13.6827 8.26339 14.0428 8.26339C14.4572 8.26339 14.7559 8.01195 15.2783 7.4896L15.287 7.48088L15.2948 7.47135C16.4656 6.04356 17.4225 4.45298 18.1347 2.74943L18.1392 2.73666C18.1928 2.58613 18.2941 2.45726 18.4278 2.3697C18.5614 2.28215 18.72 2.24072 18.8794 2.25175L18.8881 2.25234H21.1782C21.4905 2.25234 21.5933 2.33183 21.6265 2.37884C21.6618 2.42885 21.6864 2.53604 21.6264 2.74625C20.8053 4.58266 19.7899 6.32579 18.598 7.94636L18.5905 7.95784C18.4748 8.13478 18.3479 8.33056 18.3295 8.55539C18.3098 8.7968 18.4143 9.01625 18.597 9.2515C18.7302 9.44844 19.0049 9.71733 19.2836 9.99012L19.3099 10.0158C19.6021 10.3018 19.9186 10.6116 20.1727 10.9116L20.1795 10.9195L20.1869 10.9269C20.9444 11.6825 21.5743 12.556 22.052 13.5132C22.1283 13.7738 22.0816 13.907 22.0223 13.9757C21.953 14.0561 21.7976 14.131 21.5035 14.131H19.222C19.0438 14.131 18.9063 14.0959 18.7749 14.0265C18.638 13.9542 18.4972 13.8392 18.3206 13.6617C18.1784 13.5187 18.023 13.3457 17.8334 13.1348C17.7864 13.0825 17.7373 13.0277 17.6857 12.9706Z"
                                      fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="footer-documents">
                    <div className="footer-documents-item">
                        Номер счёта: 40702810501300031846
                    </div>
                    <div className="footer-documents-item">
                        Название: ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "КОМОД"
                    </div>
                    <div className="footer-documents-item">
                        ИНН: 7840100170
                    </div>
                    <div className="footer-documents-item">
                        КПП: 784001001
                    </div>
                </div>
                <div className="footer-documents">
                    <div className="footer-documents-item">
                        Банк: АО "АЛЬФА-БАНК"
                    </div>
                    <div className="footer-documents-item">
                        БИК: 044525593
                    </div>
                    <div className="footer-documents-item">
                        Кор. счёт: 30101810200000000593
                    </div>
                    <div className="footer-documents-item">
                        Юридический адрес компании: проспект Владимирский, д. 1/47, корп./ст. Б, кв./оф. 58н, г. Санкт -
                        Петербург
                    </div>
                </div>
            </div>
        </footer>
    );
}