import { FaChevronRight } from "react-icons/fa"
import shopHeroImg from "../../assets//hero/hero7.jpg"

const ShopHero = () => {
    return ( 
        <>
            <div className="hero md:min-h-screen h-[300px] bg-cover" style={{ backgroundImage: `url(${shopHeroImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-gray-100">
                    <div className="max-w-md">
                        <h1 className="mb-5 md:text-5xl text-3xl font-bold">Shop</h1>
                        <div className="mb-5 flex items-center font-medium">
                            Home 
                            <FaChevronRight className="md:mx-4 mx-2" />
                            <span className="text-[#FBEBB5]">Shop</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ShopHero;