import Title from "./Title";
import '../assets/styles/contact.css';
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {

    const form = useRef();

    const [fullName, setFullName] = useState("");
    const [message, setMessage] = useState("");

    const handleName = (e) => {
        setFullName(e.target.value);
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ccervjr', 'template_wgaxhge', form.current, 'uNpp6Oe7kZ4Brkcxb')
    }

    return (
        <div className="contact">
            <Title titleStyle={'contact-title'}>Contact</Title>
            <div className="contact-container">
                <form onSubmit={handleSubmit} ref={form}>
                    <div className="form-field">
                        <label htmlFor="name" className="label-field">Name</label>
                        <input type="text" name="fullName" value={fullName} onChange={handleName} required placeholder="Enter Your Name" className="input-field"></input>
                    </div>
                    <div className="form-field">
                        <label htmlFor="message" className="label-field">Message</label>
                        <textarea value={message} name="message" onChange={handleMessage} placeholder="Enter Your Message. Please include your contact details." required className="input-field"></textarea>
                    </div>
                    <div className="submit-button">
                        <button id="openModal" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}