import { Link } from "react-router-dom"

export default function HeaderRoute() {
    return (
        <>
            <Link className="link-about-me" to="">ABOUT ME</Link>
            <Link className="link-projects" to="">PROJECTS</Link>
            <Link className="link-experiences" to="">EXPERIENCES</Link>
            <Link className="link-contact" to="">CONTACT</Link>
        </>
    )
}