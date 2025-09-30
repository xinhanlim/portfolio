import { motion } from 'framer-motion'

export default function AboutSection() {
    return (
        <div className="bg-[#F2F0EF]" >
            <div className="flex flex-col-reverse w-full mx-auto lg:flex-row quicksand-headerText justify-between max-w-[1440px] px-8 pt-28 pb-[80px] sm:pt-38 pb-38 gap-6 lg:gap-0">
                <motion.div initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.9 }} className='flex flex-col w-full max-w-[900px] pr-2'>
                    <h1 className="text-4xl sm:text-6xl ">SOFTWARE DEVELOPER</h1>
                    <h1 className="py-4">Hello I'm Xinhan</h1>
                </motion.div>
                <motion.div initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.9 }} className="flex justify-center w-full">
                    <img src='displayphoto2.jpg' alt="Display Photo" className=' relative object-cover object-[40%_20%] flex w-full max-w-[1440px] max-h-[360px] rounded-lg border-2 border-[#282828]/20 shadow-sm' />
                </motion.div>
            </div>

        </div>
    )
}