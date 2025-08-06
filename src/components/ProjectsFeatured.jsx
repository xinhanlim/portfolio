import { Link } from 'wouter';
import projectDetails from '../data/projectDetails.json'



export default function ProjectFeature() {
    return (<>

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 gap-8 quicksand-headerText px-8 sm:grid-cols-2 pb-[64px] md:px-4 lg:px-8">
            {projectDetails.map((project) => (
                <Link href={`/project/${project.id}`} key={project.id}> 
                 <img src={project.image} alt={project.name} className="w-full object-cover rounded-lg max-h-[700px] border-1 border-[#282828]/20 shadow-sm transform transition duration-300 ease-in-out hover:scale-105" />
                </Link>
            ))}
        </div>
    </>


    )
}