import style from './Skill.module.css'

export const Skill = ({img, title}) => {
    return (
        <div className={style.skillContainer}>
            <div>
                <img className={style.img} src={img} alt={'skill picture'}/>
            </div>
            <div className={style.title}>
                <p>{title}</p>
            </div>
        </div>
    );
}