import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi"
import { BsCart2, BsSearch } from "react-icons/bs"
import { RxDividerVertical } from "react-icons/rx"
import { FaRegTimesCircle } from "react-icons/fa"
import { HiMenuAlt2 } from "react-icons/hi"
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md"
import { useState } from "react";
import data from "../data/menu.json"

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false)

    const handleSearch = (e) => {
        e.preventDefault()

        console.log("searching...")
    }

    return ( 
        <>
            <nav className="bg-[#FBEBB5] px-4 md:py-6 py-3 top-0 left-0 static z-[100] shadow-xl">
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

                    <div className="flex  ">
                        <ul className="flex items-center font-medium">
                            <div className="relative md:flex hidden">
                                <button className="text-cyan-500 uppercase text-lg flex items-center" onClick={() => setDropdown(!dropdown)}>
                                    Categories
                                    {dropdown ? <MdOutlineKeyboardArrowUp className="text-3xl" /> : <MdOutlineKeyboardArrowDown className="text-3xl" />}
                                </button>
                                {dropdown ? (
                                    <ul className="absolute p-0 md:w-32 w-28 text-sm rounded-md bg-white shadow-lg text-left">
                                        <li className="hover:bg-cyan-300 hover:text-white text-cyan-600 font-light tracking-wide rounded-t-md">
                                            <Link className="w-[100%] text-inherit p-2 cursor-pointer bg-none" to='/shop'>
                                                Drugs
                                            </Link>
                                        </li>
                                        <li className="hover:bg-cyan-300 hover:text-white text-cyan-600 font-light tracking-wide">
                                            <Link className="w-[100%] text-inherit p-2 cursor-pointer bg-none" to='/shop'>
                                                Vitamins
                                            </Link>
                                        </li>
                                        <li className="hover:bg-cyan-300 hover:text-white text-cyan-600 font-light tracking-wide">
                                            <Link className="w-[100%] text-inherit p-2 cursor-pointer bg-none" to='/shop'>
                                                Skin Care
                                            </Link>
                                        </li>
                                        <li className="hover:bg-cyan-300 hover:text-white text-cyan-600 font-light tracking-wide rounded-b-md">
                                            <Link className="w-[100%] text-inherit p-2 cursor-pointer bg-none" to='/shop'>
                                                Medical Equipments
                                            </Link>
                                        </li>
                                    </ul>
                                ) : null}
                            </div>

                            <form onSubmit={handleSearch} className="md:mt-0 mt-3 relative md:flex hidden items-center">
                                <button onClick={handleSearch} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <BsSearch className="text-cyan-600 md:text-lg text-sm" />
                                </button>
                                <input type="text" placeholder="Search" className="input-form md:w-[30rem] w-full" />  
                            </form>
                        </ul>
                    </div>

                    <div className="flex justify-between items-center">
                        <form onSubmit={handleSearch} className="md:mt-0 mt-3 relative md:hidden flex items-center">
                            <button onClick={handleSearch} className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <BsSearch className="text-cyan-600 text-sm" />
                            </button>
                            <input type="text" placeholder="Search" className="input-form w-full" />  
                        </form>
                        <ul className="flex sm:hidden items-center text-2xl text-gray-700 ">
                            <Link to='/login' >
                                <BiLogIn className="mr-1 " />
                            </Link>
                            <Link className="md:mx-3 mx-1 flex items-center" to='/cart'>
                                <BsCart2 />
                            </Link>
                        </ul>
                        <ul className="sm:flex hidden items-center md:text-2xl text-lg text-gray-600">
                            <Link to='/login' className="flex items-center border-2 border-cyan-600 p-2 rounded-lg text-base">
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