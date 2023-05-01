import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi"
import { FiHeart } from "react-icons/fi"
import { BsCart2, BsSearch } from "react-icons/bs"
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa"
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
            <nav className="px-4 top-0 left-0 static z-[100] shadow-xl">
                <div className="md:flex justify-between items-center">
                    <div className="flex justify-between items-center">
                        <Link 
                            className="md:text-2xl font-bold uppercase text-cyan-800" 
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
                            <p className="p-8 group font-bold text-gray-600 hover:text-cyan-800 cursor-pointer ">
                                <div className="flex gap-2 text-xl items-center">
                                    <p>Category </p>
                                    <FaChevronDown className="font-bold mt-1 " size={15} />
                                </div>
                                <div className="hidden font-medium z-10 group-hover:block text-white absolute bg-cyan-700 rounded-xl border-none mt-2 py-2 w-[250px] h-[180px] ">
                                    {data.mainNav.map((nav) => (
                                        <li 
                                            key={nav.id}
                                            className="px-4 "
                                            >
                                            <Link to={nav.route}>
                                                {nav.name}
                                                <hr className="my-2" />
                                            </Link>
                                        </li>
                                    ))}
                                </div>
                            </p>

                            <form onSubmit={handleSearch} className="relative flex items-center">
                                <input type="text" placeholder="Search" className="input px-3 border-2 border-cyan-500 lg:w-[500px] w-full" /> 
                                <button onClick={handleSearch} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <BsSearch className="text-cyan-800 text-xl" />
                                </button>
                            </form>
                        </ul>
                    </div>

                    <div className="md:flex hidden'">
                        <ul className="flex items-center md:text-2xl text-lg text-gray-600">
                            <Link className="md:mx-3 mx-1 flex items-center" to='/'>
                                <FiHeart />
                                <span className="md:text-xl ml-1 font-medium">Wishlist</span>
                            </Link>
                            <Link className="md:mx-3 mx-1 flex items-center" to='/cart'>
                                <BsCart2 />
                                <span className="md:text-xl ml-1 font-medium">Cart</span>
                            </Link>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn rounded-full">
                                    <BiUserCircle className="text-lg mx-1 " />
                                    Account
                                </label>
                                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                    <Link className="p-1 m-1 text-base text-cyan-700" to='/login'>
                                        Login
                                    </Link> 
                                    <Link className="p-1 m-1 text-base text-cyan-700" to='/signup'>
                                        Signup
                                    </Link>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>

                {/* mobile-version */}
                <div className={`${open ? "left-0 " : "left-[-100%]"} sm:hidden absolute top-0 right-0 bottom-0 space-y-8 py-6 px-8 w-full h-screen duration-300 ease-in-out bg-[#FBEBB5]`}>
                    <div className="flex justify-end">
                        <button onClick={() => setOpen((prev) => !prev)} className="sm:hidden text-2xl text-gray-900 text-right">
                            <FaTimes />
                        </button> 
                    </div>
                    <ul className="flex flex-col items-center text-base font-medium space-y-8">
                            {data.mainNav.map((nav) => (
                                <li 
                                    key={nav.id} 
                                    className="navlink md:mx-4 mx-2 md:my-0 my-2" >
                                    <Link to={nav.route}>
                                        {nav.name}
                                    </Link>
                                </li>
                            ))}
                            <div className="relative flex items-center">
                                <input type="text" placeholder="Search" className="input px-3" /> 
                                <button className="p-3 border-none absolute top-0 right-0 bottom-0">
                                    <BsSearch className="text-cyan-800 text-xl" />
                                </button>
                            </div>
                    </ul>

                    <ul className="flex flex-col items-center font-medium space-y-8 md:text-2xl text-lg">
                        <Link className="flex items-center space-x-2 md:mx-3 mx-1" to='/'>
                            <FiHeart />
                            <p>Wishlist</p>
                        </Link>
                        <Link className="flex items-center space-x-2 md:mx-3 mx-1" to='/cart'>
                            <BsCart2 />
                            <p>Cart</p>
                        </Link>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn rounded-full">
                                <BiUserCircle className="text-lg mx-1 " />
                                Account
                            </label>
                            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                <Link className="p-1 m-1 text-base text-cyan-700" to='/login'>
                                    Login
                                </Link> 
                                <Link className="p-1 m-1 text-base text-cyan-700" to='/signup'>
                                    Signup
                                </Link>
                            </ul>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;