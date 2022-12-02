import styles from './styles'
import projects from '../../utils/projects.json'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Projects: React.FC = () => {

    const [projectIndex, setProjectIndex] = useState(0)

    return (
        <styles.projects
            id='projects'
        >
            <h2>Projetos</h2>            
            <styles.project>
                <styles.selectProject>
                    {
                        projects.map((project, index) => 
                            <styles.selectProjectButton
                                onClick={() => setProjectIndex(index)}
                                active={index === projectIndex}
                            >
                                {project.name}
                            </styles.selectProjectButton>
                        )
                    }
                </styles.selectProject>
                <styles.imagePreview>
                    <img src={projects[projectIndex].photoUrl} alt="" />
                    <div>
                        <Link to=""></Link>
                    </div>
                </styles.imagePreview>
                <styles.wrapDescription>
                    <h3>{projects[projectIndex].name}</h3>
                    <p>{projects[projectIndex].description}</p>
                    <ul>
                        {
                            projects[projectIndex].stack.map(tool => <li>{tool}</li>)
                        }
                    </ul>
                </styles.wrapDescription>
            </styles.project>
        </styles.projects>
    )
}

export default Projects