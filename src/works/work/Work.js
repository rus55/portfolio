import style from './Work.module.css'

function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.photo}>
                <a className={style.button}>Смотреть</a>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default Work;
