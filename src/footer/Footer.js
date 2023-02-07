import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Ruslan</h2>
                <div className={style.socialContainer}>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                </div>
                <p className={style.copyright}>© 2023 Все права защищены</p>
            </div>
        </div>
    );
}

export default Footer;
