import style from './Work.module.scss'

function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.photo}>
                <img
                    src={props.logo}
                    alt={`project ${props.logo}`}
                    className={style.photo}
                />
                <a className={style.link} target="_blank" href={props.linkToGHPage}>LOOK</a>
            </div>
            <div className={style.workInfo}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Work;