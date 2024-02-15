import { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import farhanaResume from '../assets/pdf/FARHANAZULAIKHA_RESUME.pdf'

export default function HeaderRoute() {

    const [open, setOpen] = useState(false);

    function handleMenu() {
        setOpen(!open);
    }

    return (
        <>
            <div className="nav-link">
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
                <a className="resume-link" href={farhanaResume} download="FARHANAZULAIKHA_RESUME.pdf" target="_blank">&#8681; Resume</a>
            </div>
            { open ? 
                <div className="nav-menu-open">
                    <div className="nav-menu-close"><button className="close-menu-button" onClick={handleMenu}><IoCloseCircleOutline /></button></div>
                    <div className="nav-menu-link">
                        <Link
                            to="about-me"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={500}
                            className="nav-menu-link-about-me"
                            onClick={handleMenu}
                        >
                                About Me
                        </Link>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={500}
                            className="nav-menu-link-projects"
                            onClick={handleMenu}
                        >
                                Projects
                        </Link>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={500}
                            className="nav-menu-link-contact"
                            onClick={handleMenu}
                        >
                                Contact
                        </Link>
                    </div>
                </div>
                :
                <div className="hamburger-menu">
                    <div className="hamburger-icon"><button className="hamburger-menu-button" onClick={handleMenu}><GiHamburgerMenu /></button></div>
                </div>
            }
        </>
    )
}