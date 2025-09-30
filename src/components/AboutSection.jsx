import { motion } from 'framer-motion'

export default function AboutSection() {
    return (
        <div className="bg-[#F2F0EF] h-screen" >
            <div className="flex flex-col w-full mx-auto lg:flex-row quicksand-headerText justify-between max-w-[1440px] px-8 pt-28 pb-4 sm:pt-38 gap-6 lg:gap-0">
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.9 }} className='flex flex-col w-full max-w-[900px] pr-2'>
                    <h1 className="text-4xl sm:text-6xl sm:pb-4">Hello, I'm Xin Han</h1>
                </motion.div>
            </div>
            <div className="flex flex-col w-full mx-auto quicksand-headerText max-w-[1440px] px-8 ">
                <motion.div initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.9 }} className="flex w-full flex-col">
                    <img src='displayphoto2.jpg' alt="Display Photo" className='relative object-cover object-[40%_20%] flex w-full max-w-[1440px] max-h-[360px] rounded-lg border-2 border-[#282828]/20 shadow-sm' />
                </motion.div>
                <div >
                    <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.9 }} className=" flex flex-row sm:grid-cols-2 py-4 sm:py-8">
                        <div className="py-2">
                            <h1 className="text-sm md:text-lg py- sm:py-2 sm:py-0" > A simple guy that left the Republic Of Singapore Navy to find new things to make his life
                                more interesting and challenging. 
                            </h1>
                            <h1 className="text-sm md:text-lg py-2 sm:py-2 sm:py-0" > I decided to leave the force to find something new to make my life more interesting so i challenge
                                myself to enter a UXUI-Design Bootcamp and went through the fundamentals of user experience design.
                            </h1>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}