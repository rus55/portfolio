import style from './Nav.module.css';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
            <a href="">Download CV</a>
        </div>
    );
}

export default Nav;
