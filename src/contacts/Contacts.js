import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'

function Contacts() {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.form}>
                    <input className={style.input} type='text'/>
                    <input className={style.input} type='text'/>
                    <textarea className={style.textarea}></textarea>
                </div>
                <div>
                    <button className={style.button}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
