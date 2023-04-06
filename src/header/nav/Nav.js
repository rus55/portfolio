import style from './Nav.module.scss';
import { Link } from "react-scroll";

function Nav() {
    return (
        <div className={style.nav}>
            <Link
                activeClass={style.active}
                to="main"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
            >Home</Link>
            <Link
                activeClass={style.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
            >Projects</Link>
            <Link
                activeClass={style.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
            > Skills</Link>
            <Link
                activeClass={style.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
            >Contacts</Link>
            <a href="CV.pdf" download='CV'>Download CV</a>
        </div>
    );
}

export default Nav;
