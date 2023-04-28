import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import {useRef} from "react";
import emailjs from '@emailjs/browser';

function Contacts() {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_73dcy1m', 'template_atwk737', form.current, 'xJyft6HrZDlNSEcxQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className={style.contactBlock} id='contacts'>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <div className={style.title}>
                    <Title text={'Contact me'}/>
                </div>
                <div className={style.content}>
                    <div className={style.contacts}>
                        <p>You can contact me “directly” using the contacts below. I am always in touch and ready for
                            interesting projects.</p>
                        <ul>
                            <li>
                                <a href="https://t.me/@rmitin" className="">@rmitin</a>
                            </li>
                            <li>+7 (950) 604-68-98</li>
                            <li>
                                <a href="mailto:r-mit@mail.ru" className="">r-mit@mail.ru</a>

                            </li>
                        </ul>
                    </div>

                    <form ref={form} onSubmit={sendEmail}>
                        <div className={style.form}>

                            <p>Or you can leave a request in the form below and I will contact you.</p>
                            <input placeholder={'Name'} className={style.input} type='text' name='name'/>
                            <input placeholder={'Email'} className={style.input} type='text' name='email'/>
                            <input placeholder={'Phone'} className={style.input} type='text' name='phone'/>

                            <textarea placeholder={'Message'} className={style.textarea} name='message'></textarea>
                            <div className={style.buttonContainer}>
                                <button type="submit" className={style.button}>SEND</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
