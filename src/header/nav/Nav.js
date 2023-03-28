import style from './Nav.module.css';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="src/header/nav">Home</a>
            <a href="src/header/nav#works">Projects</a>
            <a href="src/header/nav#skills">Skills</a>
            <a href="src/header/nav#contacts">Contacts</a>
            <a href="src/header/nav">Download CV</a>
        </div>
    );
}

export default Nav;
