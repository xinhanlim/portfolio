import React from "react";


export default function Navbar() {
    return (<>
        <nav className="fixed z-50 quicksand-navBarText flex justify-center w-full transition duration-300  bg-[#F2F0EF]/40 backdrop-blur-xl ">
            <div className="flex justify-between items-center w-full px-8 py-6  mx-auto ">
                <div>
                    <h1 className="quicksand-navBarText600 flex flex-1 text-xl">XHLIM</h1>
                </div>
                <div>
                    <ul className="flex text-md gap-10 items-center w-full">
                        <li>
                            <a href="/" className="hover:underline transition-all duration-300">PROJECT</a>
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