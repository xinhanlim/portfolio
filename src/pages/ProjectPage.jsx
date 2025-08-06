import Navbar from "../components/Navbar";
import { useRoute } from 'wouter';
import projectDetails from '../data/projectDetails.json';

export default function ProjectPage() {

    const [ match, params ] = useRoute('/project/:id');
    const projectId = parseInt(params.id);
    const project =  projectDetails.find((p) => p.id === projectId)

     if (!project) {
    return;
  }


     
    return (
           <div className="bg-[#F2F0EF] w-full overflow-hidden scroll-smooth">
      <Navbar />
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
        <img
          src={project.image}
          alt={project.name}
          className="w-full rounded-lg mb-6"
        />
        <p className="text-lg">{project.description}</p>
      </div>
    </div>
    )
}