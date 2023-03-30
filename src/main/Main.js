import styles from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import photo from './photo/photo.png'

function Main() {
    return (
        <div className={styles.mainBlock} id='main'>
            <div className={styleContainer.container}>
                <div className={styles.wrapper}>
                    <div className={styles.text}>
                        <h1>Ruslan Mitin</h1>
                        <h2>Frontend Developer</h2>
                        <p>I am a frontend developer with experience in developing user interface (UI) for web applications using React, Redux, Redux Toolkit, JavaScript, TypeScript.</p>
                        <p>I have experience in using ReactJS components, forms, events, keys, router, as well as the concept of Redux and Flux. I also have commercial experience in writing automated tests.</p>
                    </div>
                    <div className={styles.photo}>
                        <img src={photo}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
