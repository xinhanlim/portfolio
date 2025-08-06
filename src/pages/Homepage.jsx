import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProjectFeature from '../components/ProjectsFeatured';

export default function Homepage(){
    return (
        
    <div className='bg-[#F2F0EF] w-full overflow-hidden scroll-smooth'>
    
     <Navbar/>  
     <HeroSection/>
     <ProjectFeature/> 
     
    </div>)
}