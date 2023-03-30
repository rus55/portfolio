import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import Title from "../common/components/title/Title";
import {v1} from 'uuid'

import html from '../assets/icons/logo_html5.png'
import css from '../assets/icons/logo_css3.png'
import js from '../assets/icons/logo_JS.png'
import ts from '../assets/icons/logo_TS.jpg'
import react from '../assets/icons/logo_react.png'
import redux from '../assets/icons/logo_redux.png'
import git from '../assets/icons/logo_git.png'
import sass from '../assets/icons/logo_sass.png'
import postman from '../assets/icons/logo_postman.png'
import axios from '../assets/icons/logo_axios.png'
import storybook from '../assets/icons/logo_storybook.png'
import jira from '../assets/icons/logo_jira.png'
import bitbucket from '../assets/icons/logo_bitbucket.png'
import puppeteer from '../assets/icons/logo_puppeteer.png'
import jenkins from '../assets/icons/logo_jenkins.png'
import docker from '../assets/icons/logo_docker.png'
import linux from '../assets/icons/logo_linux.png'
import materialUi from '../assets/icons/logo_mu.png'

function Skills() {
    const skills = [
        {id: v1(), title: 'React', img: react},
        {id: v1(), title: 'Redux', img: redux},
        {id: v1(), title: 'TypeScript', img: ts},
        {id: v1(), title: 'JavaScript', img: js},
        {id: v1(), title: 'Axios', img: axios},
        {id: v1(), title: 'Storybook', img: storybook},
        {id: v1(), title: 'Jira', img: jira},
        {id: v1(), title: 'Git', img: git},
        {id: v1(), title: 'Bitbucket', img: bitbucket},
        {id: v1(), title: 'Puppeteer', img: puppeteer},
        {id: v1(), title: 'Jenkins', img: jenkins},
        {id: v1(), title: 'Docker', img: docker},
        {id: v1(), title: 'Linux', img: linux},
        {id: v1(), title: 'HTML', img: html},
        {id: v1(), title: 'Material UI', img: materialUi},
        {id: v1(), title: 'SASS', img: sass},
        {id: v1(), title: 'CSS', img: css},
        {id: v1(), title: 'Postman', img: postman}
    ]
    return (
        <div className={style.skillsBlock} id='skills'>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'} />
                    <div className={style.skills}>
                        {skills.map(s => <Skill key={s.id} title={s.title} img={s.img}/>)}
                    </div>
            </div>
        </div>
    );
}

export default Skills;
