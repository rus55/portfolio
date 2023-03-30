import style from './Nav.module.scss';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="#main">Home</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contacts">Contacts</a>
            <a href="">Download CV</a>
        </div>
    );
}

export default Nav;
