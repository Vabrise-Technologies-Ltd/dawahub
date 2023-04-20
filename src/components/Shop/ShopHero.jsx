import { FaChevronRight } from "react-icons/fa"

const ShopHero = () => {
    return ( 
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://whyy.org/wp-content/uploads/2022/06/riddle-hospital-media-pa-768x458.png")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-gray-100">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Shop</h1>
                        <div className="mb-5 flex items-center font-medium">
                            Home 
                            <FaChevronRight className="mx-4" />
                            <span className="font-light">Shop</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ShopHero;