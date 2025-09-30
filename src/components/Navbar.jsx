import { Link, useLocation } from 'wouter'
import { useState } from 'react'
import




export default function Navbar() {

    const [location] = useLocation();
    const [isOpen, setIsOpen] = useState(false);


    const handleWorkClick = (s) => {
        if (location === '/') {
            s.preventDefault();
            const scroll = document.querySelector('#project');
            if (scroll) {
                scroll.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
            }
        }
    };
    const handleHomeClick = (hp) => {
        if (location === '/') {
            hp.preventDefault();
            const scroll = document.querySelector('#home');
            if (scroll) {
                scroll.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
    const handleAboutClick = (hp) => {
        if (location === '/') {
            hp.preventDefault();
            const scroll = document.querySelector('#home');
            if (scroll) {
                scroll.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }


    return (<>
        <nav className="fixed z-50 quicksand-navBarText flex flex flex-col items-center  w-full transition duration-300 bg-[#F2F0EF]">
            <div className="flex justify-between items-center w-full px-8 py-8  mx-auto max-w-[1440px] ">
                <div>
                    <Link href="/" className="quicksand-navBarText600 hover:transition-all duration-300" onClick={handleHomeClick} >XH:林</Link>
                </div>
                <div>
                    <ul className="hidden md:flex text-md gap-10 items-center w-full">
                        <li>
                            <Link href="/#project" className="hover:underline transition-all duration-300" onClick={handleWorkClick}>PROJECT</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline transition-all duration-300" onClick={handleAboutClick}>ABOUT</Link>
                        </li>
                        <li>
                            <a href="/LIMXINHANRESUME.pdf" target="_blank"
                                rel="noopener noreferrer"className="hover:underline transition-all duration-300" >RESUME</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/xinhanlim/" target="_blank"
                                rel="noopener noreferrer" className="hover:underline transition-all duration-300" >LINKEDIN</a>
                        </li>
                        <li>
                            <a href="mailto:xhxhan00@gmail.com" className="hover:underline transition-all duration-300" >HOTMAIL</a>
                        </li>

                    </ul>
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden w-full px-8 pb-4">
                    <ul className="flex flex-col items-start h-screen gap-32 h-screen pt-16">
                        <li className="w-full flex quicksand-headerText" >
                            <Link
                                href="/#project"
                                className=" text-4xl block w-full hover:underline transition-all duration-300"
                                onClick={handleWorkClick}
                            >
                                PROJECT
                            </Link>
                        </li>
                        <li className="w-full">
                            <Link
                                href="/"
                                className="text-4xl block w-full hover:underline transition-all duration-300"
                                onClick={handleAboutClick}
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li className="w-full">
                            <a
                                href="/"
                                className="text-4xl block w-full hover:underline transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                RESUME
                            </a>
                        </li>
                        <li className="w-full">
                            <a
                                href="https://www.linkedin.com/in/xinhanlim/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-4xl  block w-full hover:underline transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                LINKEDIN
                            </a>
                        </li>
                        <li className="w-full">
                            <a
                                href="mailto:xhxhan00@gmail.com"
                                className="text-4xl block w-full hover:underline transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                HOTMAIL
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav >
    </>)

}