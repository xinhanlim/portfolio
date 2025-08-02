import React from 'react';
import { motion } from 'framer-motion'

export default function HeroSection() {
    return (
        <>
            <div className="bg-[#F2F0EF] flex flex-col-reverse w-full lg:flex-row quicksand-headerText justify-between  px-8 pt-36 pb-18 gap-6 lg:gap-0 ">
                <motion.div initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 ,duration: 0.9 }} className='flex flex-col justify-below w-full'>
                    <h1 className="text-7xl tracking-tighter">SOFTWARE DEVELOPER</h1>
                    <h1 className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae itaque, praesentium soluta odio rerum provident, quis dicta ipsam vero quidem voluptatem, deleniti tenetur possimus. Dolore nulla sed ab quod et.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae itaque, praesentium soluta odio rerum provident, quis dicta ipsam vero quidem voluptatem, deleniti tenetur possimus. Dolore nulla sed ab quod et.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae itaque, praesentium soluta odio rerum provident, quis dicta ipsam vero quidem voluptatem, deleniti tenetur possimus. Dolore nulla sed ab quod et.</h1>
                    <div className='flex justify-below w-full pb-4 gap-4'>
                        <div class="flex gap-5">
                            <h1 className="hover:underline">REACT</h1>
                            <h1 className="hover:underline">HTML</h1>
                            <h1 className="hover:underline">CSS</h1>
                            <h1 className="hover:underline">REACT</h1>
                            <h1 className="hover:underline">REACT</h1>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.9 }} className="flex w-full justify-end">
                    <img src='displayphoto.jpg' alt="Display Photo" className=' flex w-full  min-w-[400px] max-w-[421px] rounded-lg' />
                </motion.div>
            </div>
        </>
    )
}