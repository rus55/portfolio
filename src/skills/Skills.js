import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'HTML'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                    <Skill title={'REACT'} description={'qqqqqqqqq qqqqqqq qqqqqqq qqqqqqqqqqqqq qqqqqqqqqqqq'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
