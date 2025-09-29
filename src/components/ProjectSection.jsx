import ProjectCard from './ProjectCard';


export default function ProjectFeature() {
    return (<>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 gap-8 quicksand-headerText px-8 sm:grid-cols-2 pb-[64px] md:px-4 lg:px-8" id="project">
        <ProjectCard/>
        </div>
    </>
    )
}