import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>RUSLAN MITIN</h2>
                <div className={style.socialContainer}>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                </div>
                <p className={style.copyright}>© 2023 All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;
