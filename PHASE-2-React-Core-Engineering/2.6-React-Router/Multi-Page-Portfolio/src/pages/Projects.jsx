import {Link} from 'react-router-dom';
import projectsData from "../data/projectsData";

function Projects (){
    return(
        <>
        {
        projectsData.map((projectData)=>{
              return(
                <div>
                  <Link key={projectData.id} to={`/projects/${projectData.id}`}>{projectData.title}</Link>
                </div>
              )
           })
        }
        </>
    )
}
export default Projects;