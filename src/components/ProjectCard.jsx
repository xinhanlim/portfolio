import { Link } from 'wouter';
import projectDetails from '../data/projectDetails.json'


export default function ProjectCard(props){
    return (<>
        {projectDetails.map((project) => (
                <Link href={`/project/${project.id}`} key={project.id}> 
                 <img src={project.image} alt={project.name} className="w-full object-cover rounded-lg max-h-[700px] border-1 border-[#282828]/20 shadow-sm transform transition duration-300 ease-in-out hover:scale-105" />
                </Link>
            ))}
    
    
    </>)

}