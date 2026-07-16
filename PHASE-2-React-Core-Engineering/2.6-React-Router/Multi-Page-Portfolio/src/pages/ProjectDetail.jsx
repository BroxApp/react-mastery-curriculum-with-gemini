import {useParams} from 'react-router-dom'
import projectsData from '../data/projectsData'

function ProjectDetail (){
    const { projectId } = useParams();
    const project = projectsData.find(p => p.id === Number(projectId));
    return (
    <div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
     </div>
    );
}
export default ProjectDetail;