import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {TbBrandTelegram} from 'react-icons/tb'
import  emailjs from 'emailjs-com'

function Contact(props) {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6pndn1x', 'template_k5ihgam', form.current, 'CP_1J1-7vFJjslq4y')
         e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className={'contact__option'}>
                        <MdOutlineEmail className={'contact__option-icon'}/>
                        <h4>Email</h4>
                        <h5>olimjovliyev98@gmail.com</h5>
                        <a href="mailto:olimjovliyev98@gmail.com">Send a messages</a>
                    </article>
                    <article className={'contact__option'}>
                        <TbBrandTelegram className={'contact__option-icon'}/>
                        <h4>Telegram</h4>
                        <h5>@o_jovliyev</h5>
                        <a href="https://t.me/o_jovliyev">Send a messages</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name={'name'} placeholder={'Your Full Name'} required/>
                    <input type="email" name={'email'} placeholder={'Your Email'} required/>
                    <textarea name="messages"  rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary' >Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
