import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

function Skills() {
    return (
        <div className={style.skillsBlock} id='skills'>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'} />
                {/*<h2 className={style.title}>Skills</h2>*/}
                <div className={style.skills}>
                    <Skill title={'React'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'Redux'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'Redux Toolkit'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'Typescript'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'JavaScript'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'Axios'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'Storybook'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'JIRA'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'Git'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'Bitbucket'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'Puppeteer'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'Jenkins'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'Docker'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'Postman'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'HTML'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'CSS/SCSS'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'Linux'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'REST-API'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
