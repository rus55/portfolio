import style from './Header.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Nav from "./nav/Nav";
import {BurgerNav} from "./burgerNav/BurgerNav";

function Header() {
    return (
        <div className={style.fixed}>
            <div className={style.header}>
                <div className={styleContainer.container}>
                    <div className={style.navContainer}>
                        <Nav/>
                        <BurgerNav/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
