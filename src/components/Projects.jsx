import '../assets/styles/projects.css'
import projects from '../assets/projects'
import Title from './Title'

export default function Projects() {
    return(
        <div className="projects">
            <Title titleStyle={'project-title'}>Projects</Title>
            <div className="projects-grid">
                {projects.map(project => (
                    <div className="project-info" key={project.id}>
                        <div className="image-row">
                            <img src={project.image}/>
                        </div>
                        <div className="project-info-grid">
                            <div className="project-name">{ project.name }</div>
                            <div className="project-year">{ project.year }</div>
                        </div>
                        <div className="project-description">{ project.description }</div>
                        <div className="project-link">
                            <a className="github-link" href={project.githubLink}>GitHub Code</a>
                            {project.youtubeLink ? 
                                <a className="youtube-link" href={project.youtubeLink}>Youtube video</a>
                                : ''
                            }
                            {project.liveLink ? 
                                <a className="live-link" href={project.liveLink}>Live website</a>
                                : ''
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}