import { Link } from "react-router-dom";
import { BiSearch, BiUserCircle } from "react-icons/bi"
import { BsCart2 } from "react-icons/bs"


const Navbar = () => {
    return ( 
        <>
            <nav className="bg-[#FBEBB5] md:py-6 py-4 px-4">
                <div className="flex justify-around items-center">
                    <div>
                        <Link className="md:text-lg font-semibold uppercase" to='/'>Dawahub</Link>
                    </div>

                    <div>
                        <ul className="flex items-center font-medium">
                            <Link className="mx-2" to='/'>Home</Link>
                            <Link className="mx-2" to='/shop'>Shop</Link>
                            <Link className="mx-2" to='/about'>About</Link>
                            <Link className="mx-2" to='/contact'>Contact</Link>
                        </ul>
                    </div>

                    <div>
                        <ul className="flex items-center md:text-xl text-lg">
                            <Link className="md:mx-2 mx-1" to='/account'>
                                <BiUserCircle />
                            </Link>
                            <Link className="md:mx-2 mx-1" to='/'>
                                <BiSearch />
                            </Link>
                            <Link className="md:mx-2 mx-1" to='/cart'>
                                <BsCart2 />
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;