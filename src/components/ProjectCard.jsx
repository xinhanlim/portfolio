import { Link } from 'wouter';
import projectDetails from '../data/projectDetails.json'
import { motion } from 'framer-motion';


export default function ProjectCard() {
    return (<>
        {projectDetails.map((project) => (
            <figure key={project.id}>
                <Link href={`/project/${project.id}`} >
                    <motion.div initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.9 }} className="group relative  overflow-hidden rounded-md border border-[#282828]/20">
                        <img src={project.image} alt={project.name} className="w-full object-cover rounded-lg max-h-[700px] shadow-sm transform transition duration-300 ease-in-out hover:scale-103" />
                    </motion.div>
                </Link>
                <figcaption className="flex items-center quicksand-bodyText gap-8 py-4 ">
                    <a href={project.livelink} target="_blank"
                        rel="noopener noreferrer" className="text-md text-bold tracking-tighter hover:underline underline-offset-4">Live Demo</a>
                    <a href={project.githubfe} target="_blank"
                        rel="noopener noreferrer" className="text-md text-bold tracking-tighter hover:underline underline-offset-4">Front End</a>
                    <a href={project.githubfe} target="_blank"
                        rel="noopener noreferrer" className="text-md text-bold tracking-tighter hover:underline underline-offset-4">Back End</a>
                </figcaption>
            </figure>
        ))}

    </>)

}