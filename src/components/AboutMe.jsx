import '../assets/styles/about-me.css';
import { ReactTyped } from 'react-typed';

export default function AboutMe() {
    const skills = ["React", "Express.js", "Vue.js", "HTML", "CSS", "JavaScript", "MongoDB", "MySQL", "SQL Server"];

    return(
        <div className="about-me-grid">
            <div className="name-text">Farhana Zulaikha binti Fadzli</div>
            <div className="info-animation">
                {" "}
                <ReactTyped
                    strings={["Software Developer", "From Kajang, Selangor", "With 1 year 3 months of experience"]}
                    typeSpeed={80}
                    loop
                    backSpeed={20}
                    cursorChar="/>"
                    showCursor={true}
                />
            </div>
            <div className="description">
                Junior developer with a keen interest in 
                front-end development.
            </div>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill-style" key={index}>{ skill }</div>
                ))}
            </div>
        </div>
    )
}