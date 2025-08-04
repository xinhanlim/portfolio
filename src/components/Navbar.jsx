import React from "react";


export default function Navbar() {
    return (<>
        <nav className="fixed z-50 quicksand-navBarText flex justify-center w-full transition duration-300  bg-[#F2F0EF]/40 backdrop-blur-xl ">
            <div className="flex justify-between items-center w-full px-8 py-6  mx-auto max-w-[1440px] ">
                <div>
                    <a href="/" className="quicksand-navBarText600 hover:transition-all duration-300">XH:LIM</a>
                </div>
                <div>
                    <ul className="flex text-md gap-10 items-center w-full">
                        <li>
                            <a href="/" className="hover:underline transition-all duration-300">WORK</a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline transition-all duration-300" >ABOUT</a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline transition-all duration-300" >RESUME</a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline transition-all duration-300" >LINKEDIN</a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline transition-all duration-300" >HOTMAIL</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </>)

}