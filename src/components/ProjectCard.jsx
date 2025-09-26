import { Link } from 'wouter';
import projectDetails from '../data/projectDetails.json'


export default function ProjectCard() {
    return (<>
        {projectDetails.map((project) => (
            <figure key={project.id}>
                <Link href={`/project/${project.id}`} >
                    <div className="group relative  overflow-hidden rounded-md border border-[#282828]/20">
                        <img src={project.image} alt={project.name} className="w-full object-cover rounded-lg max-h-[700px]  shadow-sm transform transition duration-300 ease-in-out hover:scale-103" />
                    </div>
                </Link>
                <figcaption className="flex items-center quicksand-bodyText gap-8 py-4 ">
                        <a href={project.livelink} className="text-md text-bold tracking-tighter hover:underline underline-offset-4">Live Demo</a>
                        <a href={project.githubfe} className="text-md text-bold tracking-tighter hover:underline underline-offset-4">Front End</a>
                        <a href={project.githubfe} className="text-md text-bold tracking-tighter hover:underline underline-offset-4">Back End</a>
                </figcaption>
            </figure>
        ))}

    </>)

}