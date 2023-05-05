import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";

const TopNav = () => {
    return ( 
        <>
            <div className="flex justify-between bg-gradient-to-r from-cyan-500 to-cyan-700 via-cyan-600 p-2">
                <div className="md:flex justify-between items-center md:px-4 px-2">
                    <div className="flex items-center font-bold text-[#FBEBB5] md:text-base text-xs">
                        <FaPhone className="mx-1" />
                        <p>+2547 1081 5080</p>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-white md:mt-0 mt-4 lg:ml-24 md:ml-8">
                        <BsFacebook />
                        <BsInstagram />
                        <BsTwitter />
                        <BsLinkedin />
                    </div>
                </div>
                <div id="scroll-container" className="">
                    <div id="scroll-text" className="md:flex font-bold gap-2 text-[#FBEBB5] italic md:text-base text-xs ">
                        <p>Free shipping for orders over KES2000. Any other questions? Contact us at</p>
                        <a href="oraimo.co" className="text-white hover:underline">info@dawahub.com</a>
                    </div>
                </div>
                
            </div>
        </>
     );
}
 
export default TopNav;