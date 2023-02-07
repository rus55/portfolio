import style from './Header.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Nav from "../nav/Nav";

function Header() {
    return (
        <div className={style.header}>
            <div className={styleContainer.container}>
                <Nav/>
            </div>
        </div>
    )
}

export default Header;
