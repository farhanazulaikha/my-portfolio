import { Link } from "react-scroll";
import Button from "../components/Button";
import '../assets/styles/button.css';

export default function HeaderRoute() {
    return (
        <>
            <Link
                to="about-me"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className="link-about-me"
            >
                    About Me
            </Link>
            <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className="link-projects"
            >
                    Projects
            </Link>
            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className="link-contact"
            >
                    Contact
            </Link>
            <Button buttonStyle={'resume-button'}>Resume</Button>
        </>
    )
}