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
            <div className="flex flex-col-reverse sm:flex-row w-full mx-auto quicksand-headerText max-w-[1440px] px-8 justify-beween">
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.9 }} className=" sm:py-0">
                    <div>
                        <h1 className="text-sm md:text-lg py-4 sm:pb-8" >I used to serve in the Republic of Singapore Navy, but left to look for something more challenging (and hopefully more fun).
                            My coffee addiction came along for the ride, of course. Along the way, I discovered software development and was quickly drawn in by curiosity: how do people
                            turn design into real, working experiences on webpages and mobile apps?
                        </h1>
                        <h1 className="text-sm md:text-lg py-4 sm:pb-8" > As I explored further, I found myself most passionate about frontend development—bringing designs to life,
                            While I’ve learned about backend too, what excites me most is the process of turning ideas into live.
                        </h1>
                        <h1 className="text-sm md:text-lg py-4 sm:pb-8" > 
                        </h1>
                    </div>
                </motion.div>
                <motion.div initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.9 }} className="flex w-full flex-col">
                    <img src='displayphoto2.jpg' alt="Display Photo" className='relative object-cover flex w-full h-full sm:min-h-[600px] rounded-lg border-2 border-[#282828]/20 shadow-sm' />
                </motion.div>

            </div>
        </div >
    )
}