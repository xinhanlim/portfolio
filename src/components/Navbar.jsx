import { Link, useLocation } from 'wouter'




export default function Navbar() {

    const [location] = useLocation();
    const handleWorkClick = (s) => {
        if (location === '/') {
            s.preventDefault();
            const scroll = document.querySelector('#project');
            if (scroll) {
                scroll.scrollIntoView({ behavior: 'smooth' });
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
    };

    return (<>
        <nav className="fixed z-50 quicksand-navBarText flex justify-center w-full transition duration-300  bg-[#F2F0EF]/40 backdrop-blur-xl ">
            <div className="flex justify-between items-center w-full px-8 py-6  mx-auto max-w-[1440px] ">
                <div>
                    <Link href="/" className="quicksand-navBarText600 hover:transition-all duration-300" onClick={handleHomeClick} >XH:林</Link>
                </div>
                <div>
                    <ul className="flex text-md gap-10 items-center w-full">
                        <li>
                            <Link href="/#project" className="hover:underline transition-all duration-300" onClick = {handleWorkClick}>PROJECT</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline transition-all duration-300" onClick = {handleAboutClick}>ABOUT</Link>
                        </li>
                        <li>
                            <a href="/" className="hover:underline transition-all duration-300" >RESUME</a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline transition-all duration-300" >LINKEDIN</a>
                        </li>
                        <li>
                            <a href="mailto:xhxhan00@gmail.com" className="hover:underline transition-all duration-300" >HOTMAIL</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </>)

}