import { Link } from "react-router-dom";
import { BiSearch, BiUserCircle } from "react-icons/bi"
import { BsCart2 } from "react-icons/bs"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react";
import data from "../data/menu.json"


const Navbar = () => {
    const [open, setOpen] = useState(false);

    return ( 
        <>
            <nav className="bg-[#FBEBB5] md:py-6 p-4 top-0 left-0 static z-[100] shadow-xl">
                <div className="md:flex justify-between items-center">
                    <div className="flex justify-between items-center">
                        <Link 
                            activeClassName="!text-cyan-700"
                            className="md:text-lg font-semibold uppercase" 
                            to='/'
                        >
                                Dawahub
                        </Link>
                        <button onClick={() => setOpen((prev) => !prev)} className=' sm:hidden text-2xl text-gray-900'>
                            <FaBars />
                        </button>
                    </div>

                    <div className="md:flex hidden text-gray-700'">
                        <ul className="flex items-center font-medium">
                            {data.mainNav.map((nav) => (
                                <li 
                                    key={nav.id} 
                                    className="navlink md:mx-4 mx-2 md:my-0 my-2" >
                                    <Link to={nav.route}>
                                        {nav.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:flex hidden text-gray-700'">
                        <ul className="flex items-center md:text-2xl text-lg">
                            <Link className="md:mx-3 mx-1" to='/'>
                                <BiSearch />
                            </Link>
                            <Link className="md:mx-3 mx-1" to='/cart'>
                                <BsCart2 />
                            </Link>
                            <Link className="md:mx-3 mx-1" to='/account'>
                                <BiUserCircle />
                            </Link>
                        </ul>
                    </div>
                </div>

                {/* mobile-version */}
                <div className={`${open ? "left-0 " : "left-[-100%]"} sm:hidden absolute top-0 right-0 bottom-0  space-y-8 py-6 px-8 w-full h-screen duration-300 ease-in-out bg-white`}>
                    <div className="flex justify-end">
                        <button onClick={() => setOpen((prev) => !prev)} className="sm:hidden text-2xl text-gray-900 text-right">
                            <FaTimes />
                        </button> 
                    </div>
                    <ul className="flex flex-col items-center text-base font-medium space-y-8">
                        {data.mainNav.map((nav) => (
                            <li key={nav.id} onClick={() => setOpen((prev) => !prev)} className="navlink md:mx-4 mx-2 md:my-0 my-2">
                                <Link to={nav.route}>
                                    {nav.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex flex-col items-center text-2xl font-medium space-y-8">
                        <Link 
                            className="md:mx-2 mx-1" 
                            to='/'
                            onClick={() => setOpen((prev) => !prev)}
                            >
                            <BiSearch />
                        </Link>
                        <Link 
                            className="md:mx-2 mx-1" 
                            to='/cart'
                            onClick={() => setOpen((prev) => !prev)}
                            >
                            <BsCart2 />
                        </Link>
                        <Link 
                            className="md:mx-2 mx-1" 
                            to='/account'
                            onClick={() => setOpen((prev) => !prev)}
                            >
                            <BiUserCircle />
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;