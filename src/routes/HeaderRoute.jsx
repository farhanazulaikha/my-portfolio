import { Link } from "react-router-dom";
import Button from "../components/Button";
import '../assets/styles/button.css';

export default function HeaderRoute() {
    return (
        <>
            <Link className="link-about-me" to="">About Me</Link>
            <Link className="link-projects" to="">Projects</Link>
            <Link className="link-experiences" to="">Experiences</Link>
            <Link className="link-contact" to="">Contact</Link>
            <Button buttonStyle={'resume-button'}>Resume</Button>
        </>
    )
}