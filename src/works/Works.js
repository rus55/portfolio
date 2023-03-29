import style from './Works.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Work from "./work/Work";
import Title from "../common/components/title/Title";
import todoImage from "../assets/images/todolist.png";
import socialImage from "../assets/images/social.png";
import saunaImage from "../assets/images/sauna.png";

function Works() {
    const projects = [
        {
            title: 'Social Network',
            logo: socialImage,
            description: 'SPA for social action - messaging between users.',
            linkToGHPage: 'https://github.com/rus55/samurai-way-main'
        },
        {
            title: 'Todolist',
            logo: todoImage,
            description: 'SPA to create and further manage the to-do list and its items for the user.',
            linkToGHPage: ''
        },
        {
            title: 'Application for kindling the stove',
            logo: saunaImage,
            description: 'Educational game for kindling the stove in the sauna',
            linkToGHPage: 'https://rus55.github.io/Educational-game/'
        },
        {
            title: 'Personal blog',
            logo: null,
            description: 'Single page application "Personal blog". Frontend is written in React. The backend is implemented on Hapi using MongoDB.',
            linkToGHPage: 'https://github.com/rus55/Personal-blog'
        },
        {
            title: 'Search movie',
            logo: null,
            description: 'This project is written in ReactJS using Redux, hooks and modular styles.',
            linkToGHPage: 'https://github.com/rus55/Search-movie'
        },
        {
            title: 'Banner-editor',
            logo: null,
            description: 'Application - editor for creating banners on CANVAS.',
            linkToGHPage: 'https://github.com/rus55/Banner-editor'
        }
    ]
    return (
        <div className={style.worksBlock} id='projects'>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title text={'Projects'} />
                <div className={style.works}>
                    {projects.map( (project, index) => <Work
                        title={project.title}
                        logo={project.logo}
                        description={project.description}
                        linkToGHPage={project.linkToGHPage}
                        key={project + index}
                    /> )}
                </div>
            </div>
        </div>
    );
}

export default Works;