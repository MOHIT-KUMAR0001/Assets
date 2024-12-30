import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/brand.png";

const Navbar = () => {


    const Navigator = useNavigate();

    const Display = () => {
        let display = document.getElementById("toggler");
        display.classList.toggle("hidden");
    }

    return (
        <>
            <nav>
                <div className="nav-container justify-between bg-amber-50 text-black items-center lg:h-[80px] flex p-5 lg:justify-around fixed w-screen z-1">
                    <div id="brand">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="links hidden list-none gap-8 items-center lg:flex">
                        <Link to="/" ><li>HOME</li></Link>
                        <Link to="/about">
                            <li>ABOUT</li>
                        </Link>
                        <Link to="#">
                            <li>PRICING</li>
                        </Link>
                        <Link to="/blog">
                            <li>BLOG</li>
                        </Link>
                        <Link to="#">
                            <li>CONTACT</li>
                        </Link>
                        <Link to="#">
                            <li>PAGES</li>
                        </Link>
                    </div>

                    <div className="buttons hidden gap-5 items-center lg:flex">
                        <li className="list-none" onClick={()=>Navigator("/login")}>LOGIN</li>
                        <button className="border-2 border-green-500 px-5 py-2 rounded-md" onClick={()=>Navigator("/signup")}>SIGN IN</button>
                    </div>

                    <div className="menu lg:hidden">
                        <i className='bx bx-menu text-4xl' onClick={Display}></i>
                    </div>
                </div>

                <div className="nav-bar inset-0 lg:hidden fixed bg-white " id="toggler">
                    <div className="flex justify-between items-center p-5">

                        <div id="brand">
                            <img src={logo} alt="logo" />
                        </div>

                        <div className="menu">
                            <i className='bx bx-x text-4xl' onClick={Display}></i>
                        </div>
                    </div>


                    <div className="links flex flex-col list-none gap-8 items-center mt-[20px]">
                        <Link to="/"><li>HOME</li></Link>
                        <Link to="/about">
                            <li>ABOUT</li>
                        </Link>
                        <Link to="#">
                            <li>PRICING</li>
                        </Link>
                        <Link to="/blog">
                            <li>Blog</li>
                        </Link>
                        <Link to="#">
                            <li>CONTACT</li>
                        </Link>
                        <Link to="#">
                            <li>PAGES</li>
                        </Link>
                    </div>

                    <div className="buttons flex gap-5 items-center justify-center mt-[50px]">
                        <li className="list-none" onClick={()=>Navigator("/login")}>LOGIN</li>
                        <button className="border-2 border-green-500 px-5 py-2 rounded-md" onClick={()=>Navigator("/signup")}>SIGN IN</button>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar;

