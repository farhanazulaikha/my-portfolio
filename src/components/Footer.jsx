import '../assets/styles/footer.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer>
            <div className="footer-left-section">
                &#169; Copyright 2024. By Farhana Zulaikha
            </div>
            <div className="footer-right-section">
                <a href="https://www.linkedin.com/in/farhanazulaikha/" className="social-link" target="_blank"><FaLinkedin /></a>
                <a href="https://github.com/farhanazulaikha" className="social-link" target="_blank"><FaGithub /></a>
                <a href="mailto:farhanaf.work@gmail.com" className="social-link"><MdEmail /></a>
            </div>
        </footer>
    )
}