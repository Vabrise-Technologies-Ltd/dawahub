import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi"
import { BsCart2, BsSearch } from "react-icons/bs"
import { RxDividerVertical } from "react-icons/rx"
import { FaChevronDown, FaRegTimesCircle } from "react-icons/fa"
import { HiMenuAlt2 } from "react-icons/hi"
import { useState } from "react";
import data from "../data/menu.json"

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault()

        console.log("searching...")
    }

    return ( 
        <>
            <nav className="bg-[#FBEBB5] px-4 md:py-0 py-3 top-0 left-0 static z-[100] shadow-xl">
                <div className="md:flex justify-between items-center">
                    <div className="flex justify-between items-center">
                        <Link 
                            className="md:text-2xl text-xl font-bold uppercase text-cyan-800" 
                            to='/'
                        >
                                Dawahub
                        </Link>
                        <button onClick={() => setOpen((prev) => !prev)} className=' sm:hidden text-2xl text-gray-900'>
                            {open ? <FaRegTimesCircle className="text-cyan-700" /> : <HiMenuAlt2 /> }
                        </button>
                    </div>

                    <div className="flex text-gray-700'">
                        <ul className="flex items-center font-medium">
                            <p className="md:flex hidden md:p-8 p-4 group font-bold text-gray-600 hover:text-cyan-800 cursor-pointer ">
                                <div className="flex gap-2 text-xl items-center">
                                    <p>Categories of Goods</p>
                                    <FaChevronDown className="font-bold mt-1 " size={18} />
                                </div>
                                <div className="hidden font-medium z-10 group-hover:block text-white absolute bg-cyan-700 rounded-xl border-none mt-2 py-2 w-[200px] h-[180px] ">
                                    {data.mainNav.map((nav) => (
                                        <li 
                                            key={nav.id}
                                            className="px-4 "
                                            >
                                            <Link to={nav.route}>
                                                <span className="hover:text-[#FBEBB5]">{nav.name}</span>
                                                <hr className="my-2" />
                                            </Link>
                                        </li>
                                    ))}
                                </div>
                            </p>

                            <form onSubmit={handleSearch} className="md:mt-0 mt-3 relative md:flex hidden items-center">
                                <button onClick={handleSearch} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <BsSearch className="text-cyan-800 md:text-xl text-base" />
                                </button>
                                <input type="text" placeholder="Search" className="input px-3 border-2 border-cyan-500 lg:w-[500px] w-full" />  
                            </form>
                        </ul>
                    </div>

                    <div className="flex">
                        <form onSubmit={handleSearch} className="md:mt-0 mt-3 relative md:hidden flex items-center">
                            <button onClick={handleSearch} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <BsSearch className="text-cyan-800 text-xl" />
                            </button>
                            <input type="text" placeholder="Search" className="input px-3 border-2 border-cyan-500 lg:w-[500px] w-full" />  
                        </form>
                        <ul className="flex md:hidden items-center text-2xl text-gray-700 ">
                            <Link to='/login' >
                                <BiLogIn className="mr-1 " />
                            </Link>
                            <Link className="md:mx-3 mx-1 flex items-center" to='/cart'>
                                <BsCart2 />
                            </Link>
                        </ul>
                        <ul className="md:flex hidden items-center md:text-2xl text-lg text-gray-600">
                            <Link to='/login' className="flex items-center border border-cyan-800 p-1 rounded-lg text-sm">
                                <BiLogIn className="mr-1" />
                                Login
                                <RxDividerVertical className="mx-1" />
                                Signup
                            </Link>
                            <RxDividerVertical className="md:text-4xl" />
                            <Link className="md:mx-3 mx-1 flex items-center" to='/cart'>
                                <BsCart2 />
                            </Link>
                        </ul>
                    </div>
                </div>

                {/* mobile-version */}
                <div className={`${open ? "left-0 " : "left-[-100%]"} sm:hidden absolute top-0 right-0 bottom-0 space-y-8 py-6 px-4 w-5/6 h-screen duration-300 ease-in-out bg-[#FBEBB5]`}>
                    <div>
                        <div>
                            <h3 className="mb-6 text-cyan-700 text-lg font-semibold">Category of Goods</h3>
                            <hr className="border border-cyan-800"/>
                        </div>
                        <ul className="flex flex-col text-base font-medium space-y-8">
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
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;