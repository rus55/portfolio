import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import IconGithub from '../assets/images/github.png'
import IconCodewars from '../assets/images/codewars.png'
import IconLinkedin from '../assets/images/linkedin.jpg'
import IconTelegram from '../assets/images/tele.png'

function Footer() {
    return (
        <div className={style.footerBlock} >
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.socialContainer}>
                    <div className={style.square}>
                        <a href='https://t.me/rmitin'>
                            <img src={IconTelegram}/>
                        </a>
                    </div>

                    <div className={style.square}><a href='https://www.linkedin.com/in/ruslan-mitin-664748a1/'><img src={IconLinkedin}/></a></div>

                    <div className={style.square}><a href='https://www.codewars.com/users/coder52'><img src={IconCodewars}/></a></div>

                    <div className={style.square}><a href='https://github.com/rus55/'><img src={IconGithub}/></a></div>
                </div>
                <p className={style.copyright}>© 2023 All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;
