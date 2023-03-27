import style from './Work.module.scss'

function Work(props) {

    return (
        <div className={style.work}>
            <div className={style.photo} style={props.style}>
                {/*<a className={style.button}>Смотреть</a>*/}
                <button className={style.button}>Смотреть</button>
            </div>
            <div className={style.workInfo}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Work;
