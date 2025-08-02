import React from 'react';
import { motion } from 'framer-motion'

export default function HeroSection() {
    return (
        <>
            <div className="bg-[#F2F0EF] flex quicksand-headerText justify-between w-full px-8 py-36">
                <motion.div initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 ,duration: 0.9 }} className='flex flex-col justify-below w-full'>
                    <h1 className="text-7xl tracking-tighter">SOFTWARE DEVELOPER</h1>
                    <h1 className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae itaque, praesentium soluta odio rerum provident, quis dicta ipsam vero quidem voluptatem, deleniti tenetur possimus. Dolore nulla sed ab quod et.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae itaque, praesentium soluta odio rerum provident, quis dicta ipsam vero quidem voluptatem, deleniti tenetur possimus. Dolore nulla sed ab quod et.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae itaque, praesentium soluta odio rerum provident, quis dicta ipsam vero quidem voluptatem, deleniti tenetur possimus. Dolore nulla sed ab quod et.</h1>
                    <div className='flex justify-below w-full py-4 gap-4'>
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
                    <img src='displayphoto.jpg' alt="Display Photo" className=' flex w-full  min-w-[400px] max-w-[400px]' />
                </motion.div>
            </div>
        </>
    )
}