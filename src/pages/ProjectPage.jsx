import Navbar from "../components/Navbar";
import { useRoute } from 'wouter';
import projectDetails from '../data/projectDetails.json';
import { motion } from 'framer-motion'
import { Link } from "wouter";



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
        <motion.div initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.9 }} className="pb-12 px-8 max-w-[1440px] mx-auto ">
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
            <div>
              <h1 className="text-[#282828]/80 pb-2">Links </h1>
              <div className="space-x-4">
                <Link href={project.livelink} className="text-sm mb-4 font-medium tracking-tighter hover:underline underline-offset-4">Live Demo</Link>
                <Link href={project.githubfe} className="text-sm mb-4 font-medium tracking-tighter hover:underline underline-offset-4">Front End</Link>
                <Link href={project.githubfe} className="text-sm mb-4 font-medium tracking-tighter hover:underline underline-offset-4">Back End</Link>
              </div>

            </div>
          </span>
        </motion.div>
        <div className="px-8 max-w-[1440px] mx-auto">
          <motion.div initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }} className="max-w-[1440px] pb-12">
            <h1 className="font-bold text-5xl">TOOLS</h1>
            <p className="py-4 text-md">React , TailwindCSS, React-Toastify, HeadlessUI , NODE-JS, MongoDB, JSONWEBTOKEN </p>
          </motion.div>
          <motion.div initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.9 }} className="max-w-[1440px] pb-12">
            <h1 className="font-bold text-5xl">SUMMARY</h1>
            <p className="py-4 text-md">{project.summary}</p>
          </motion.div>
          <motion.div initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }} className="mx-auto block mb-4 max-w-full ">
            <img src={project.resizeimage} alt={project.name}
              className="w-full rounded-lg border object-cover h-[300px]  md:h-[620px] md:object-center" />
          </motion.div>

        </div>
        <div className="px-8 max-w-[1440px] mx-auto ">
          <motion.div initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }} className="mx-auto grid md:grid-cols-1 md:grid-cols-2 gap-4 mb-4 max-w-full ">
            <img src={project.image1} alt={project.name}
              className="w-full rounded-lg border object-cover md:h-[620px] md:object-center" />
            <img src={project.image2} alt={project.name}
              className="w-full rounded-lg border object-cover  md:h-[620px] md:object-center" />
          </motion.div>
          <div className="max-w-[1440px] mx-auto ">
            <img src={project.image3} alt={project.name}
              className="w-full rounded-lg border object-contain md:object-center" />
          </div>

        </div>
      </div>
    </div>
  )
}
