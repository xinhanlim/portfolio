import Navbar from "../components/Navbar";
import { useRoute } from 'wouter';
import projectDetails from '../data/projectDetails.json';

export default function ProjectPage() {

  const [match, params] = useRoute('/project/:id');
  const projectId = parseInt(params.id);
  const project = projectDetails.find((p) => p.id === projectId)

  if (!project) {
    return;
  }



  return (
    <div className="bg-[#F2F0EF] h-full text-[#282828]">
      <Navbar />
      <div className="pt-[72px] pb-[72px] w-full h-full overflow-hidden scroll-smooth ">
        <div className="pb-12 px-8 max-w-[1440px] mx-auto ">
          <h1 className=" pt-12 pb-8 text-6xl md:text-9xl font-bold mb-4">{project.name}</h1>
          <span className="flex max-w-[1440px] mb-4 md:gap-24 flex flex-wrap">
            <div className="pr-12">
              <h1 className="text-[#282828]/80 pb-2">Application</h1>
              <p className="text-sm md:text-md font-medium mb-4">{project.description}</p>
            </div>
            <div>
              <h1 className="text-[#282828]/80 pb-2">Timeline: </h1>
              <p className="text-sm md:text-md font-medium mb-4">{project.timeline}</p>
            </div>
          </span>
        </div>
        <div className="px-8 max-w-[1440px] mx-auto">
          <div className="mx-auto block mb-4 max-w-full pb-12">
            <img src={project.resizeimage} alt={project.name}
              className="w-full rounded-lg border object-cover h-[300px] object-[43%] md:h-[620px] md:object-center" />
          </div>
          <div className="max-w-[1440px] pb-8">
            <h1 className="font-bold text-5xl">TOOLS</h1>
            <p className="py-4 text-md">React , TailwindCSS, React-Toastify, HeadlessUI , NODEJS, MONGODB, JSONWEBTOKEN </p>
          </div>
          <div className="max-w-[1440px]">
            <h1 className="font-bold text-5xl">SUMMARY</h1>
            <p className="py-4 text-md">{project.summary}</p>
          </div>
        </div>

      </div>
    </div>
  )
}
