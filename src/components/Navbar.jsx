import React from "react";


export default function Navbar() {
    return (<>
        <nav className="fixed z-50 quicksand-navBarText flex justify-center w-full transition duration-300 ">
            <div className="flex justify-between items-center w-full px-8 py-6">
                <div>
                    <h1 className="quicksand-navBarText600 flex flex-1 text-2xl">XHLIM</h1>
                </div>
                <div>
                    <ul className="flex text-2xl gap-10 items-center w-full">
                        <li>
                            <a href="/" className="hover:underline transition-all duration-300">PROJECT</a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline transition-all duration-300" >ABOUT</a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline transition-all duration-300" >CONTACT</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </>)

}