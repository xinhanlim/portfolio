import AboutSection from '../components/AboutSection';
import Navbar from '../components/Navbar';

export default function AboutPage(){

    return(
        <div className='bg-[#F2F0EF] w-full h-full overflow-hidden scroll-smooth'>
        <Navbar/>
        <AboutSection/>
        </div>
    )
}