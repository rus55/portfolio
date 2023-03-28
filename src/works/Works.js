import style from './Works.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Work from "./work/Work";
import Title from "../common/components/title/Title";
import todoImage from "../assets/images/todolist.png";
import socialImage from "../assets/images/social.png";

function Works() {
    const social = {
        color: 'blue',
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        color: 'blue',
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div className={style.worksBlock} id='works'>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title text={'Projects'} />
                <div className={style.works}>
                    <Work style={social} title={'Social Network'} description={'Way of the Samurai'}/>
                    <Work style={todolist} title={'Todolist'} description={'Development Blogddddddddddd dddddddddddddddd dddddddddddddd dddddddddddddd ddddddddddddddd dddddddddd'}/>
                    <Work style={todolist} title={'Educational-game'} description={'Development Blogddddddddddd dddddddddddddddd dddddddddddddd dddddddddddddd ddddddddddddddd dddddddddd'}/>
                    <Work style={todolist} title={'Personal-blog'} description={'Development Blogddddddddddd dddddddddddddddd dddddddddddddd dddddddddddddd ddddddddddddddd dddddddddd'}/>
                    <Work style={todolist} title={'Search-movie'} description={'Development Blogddddddddddd dddddddddddddddd dddddddddddddd dddddddddddddd ddddddddddddddd dddddddddd'}/>
                    <Work style={todolist} title={'Banner-editor '} description={'Development Blogddddddddddd dddddddddddddddd dddddddddddddd dddddddddddddd ddddddddddddddd dddddddddd'}/>
                </div>
            </div>
        </div>
    );
}

export default Works;