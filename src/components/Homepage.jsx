import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ProjectFeature from './ProjectsFeatured';

export default function Homepage(){
    return (
    <div className='bg-[#F2F0EF] w-full overflow-hidden smooth-scrolling'>

     <Navbar/>  
     <HeroSection/>
     <ProjectFeature/> 
     
    </div>)
}