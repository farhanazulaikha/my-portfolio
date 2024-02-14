import Title from "./Title";
import '../assets/styles/contact.css';
import { useState } from "react";

export default function Contact() {

    const [formDetail, setFormDetail] = useState({
        fullName: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormDetail((prevState) => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <Title titleStyle={'contact-title'}>Contact</Title>
            <div className="contact-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="name" className="label-field">Name</label>
                        <input type="text" id="fullName" value={formDetail["fullName"]} onChange={handleChange} required placeholder="Enter Your Name" className="input-field"></input>
                    </div>
                    <div className="form-field">
                        <label htmlFor="email" className="label-field">Email</label>
                        <input type="email" id="email" value={formDetail["email"]} onChange={handleChange} required placeholder="Enter Your Email" className="input-field"></input>
                    </div>
                    <div className="form-field">
                        <label htmlFor="message" className="label-field">Message</label>
                        <textarea value={formDetail["message"]} id="message" onChange={handleChange} placeholder="Enter Your Message" required className="input-field"></textarea>
                    </div>
                    <div className="submit-button">
                        <button id="openModal" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}