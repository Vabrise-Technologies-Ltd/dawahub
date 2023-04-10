import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
            <nav>
                <div className="flex justify-around items-center">
                    <div>
                        <Link to='/'>Dawahub</Link>
                    </div>

                    <div>
                        <ul>
                            <Link to='/'>Home</Link>
                            <Link to='/shop'>Shop</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/contact'>Contact</Link>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <Link to='/account'>Account</Link>
                            <Link to='/'>Search</Link>
                            <Link to='/cart'>Cart</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;