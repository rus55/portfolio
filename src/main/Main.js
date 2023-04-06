import styles from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import photo from './photo/photo.png'
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import { Tilt } from 'react-tilt'

function Main() {
    return (
        <div className={styles.mainBlock} id='main'>

            <Fade top>
                <div className={styleContainer.container}>
                    <div className={styles.wrapper}>
                        <div className={styles.text}>
                            <h1>RUSLAN MITIN</h1>
                            <ReactTypingEffect
                                text='FRONTEND DEVELOPER'
                            />

                            <p>I am a frontend developer with experience in developing user interface (UI) for web
                                applications using React, Redux, Redux Toolkit, JavaScript, TypeScript.</p>
                            <p>I have experience in using ReactJS components, forms, events, keys, router, as well as
                                the concept of Redux and Flux. I also have commercial experience in writing automated
                                tests.</p>
                        </div>
                        <Tilt options={{max: 25}}>
                            <div className={styles.photo}>
                                <img src={photo}/>
                            </div>
                        </Tilt>

                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Main;
