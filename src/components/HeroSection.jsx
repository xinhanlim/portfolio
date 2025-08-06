import { motion } from 'framer-motion'

export default function HeroSection() {
    return (
        <>
            <div className="bg-[#F2F0EF] flex flex-col-reverse w-full mx-auto lg:flex-row quicksand-headerText justify-between max-w-[1440px] px-8 pt-28 pb-[80px] sm:pt-38 pb-38 gap-6 lg:gap-0">
                <motion.div initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 ,duration: 0.9 }} className='flex flex-col w-full max-w-[900px] pr-2'>
                    <h1 className="text-4xl sm:text-6xl md:4xl">SOFTWARE DEVELOPER</h1>
                    <h1 className="py-4 ">I’ve always loved admiring minimalist design that communicates the creator’s intent effortlessly <br/> And wondering how they could achieve that on screen.<br/>Now, with the skills i had from lessons <br/> I'm excited to make it come to life.</h1>
                    <div className='flex w-full pb-4 gap-4'>
                        <div class="flex gap-5 ">
                            <img src='react.png' className="w-7 h-7"/>
                            <img src='html5.png' className="w-7 h-7"/>
                            <img src='css3.png' className="w-7 h-7"/>
                            <img src='tailwind.png' className="w-7 h-7"/>
                            <img src='js.png' className="w-7 h-7"/>
                            <img src='nodejs.png' className="w-7 h-7"/>
                            
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.9 }} className="flex justify-center ">
                    <img src='displayphoto.jpg' alt="Display Photo" className=' flex w-full  min-w-[400px] max-w-[421px] rounded-lg border-2 border-[#282828]/20 shadow-sm' />
                </motion.div>
            </div>
        </>
    )
}