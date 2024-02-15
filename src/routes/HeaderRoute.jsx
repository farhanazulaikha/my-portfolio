import { useState } from "react";
import { Link } from "react-scroll";
import Button from "../components/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";

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
                <Button buttonStyle={'resume-button'}>Resume</Button>
            </div>
            { open ? 
                <div className="nav-menu">
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