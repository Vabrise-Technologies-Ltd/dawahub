import heroImg from "../../assets/home-hero.jpg"
import { Link } from "react-router-dom";

const HomeAboutSection = () => {
    return ( 
        <div className="md:px-16 px-6 md:py-2 py-8 min-h-screen bg-white">
            <div className="grid sm:grid-cols-2 lg:gap-16 md:gap-8 gap-4">
                <div className="flex flex-col justify-center">
                    <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold text-gray-800">
                        Doctors Prescribe, <br />
                        <span>We Deliver</span>
                    </h1>
                    <p className="py-6 md:text-lg text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to='/shop' className="btn md:w-1/4 w-1/2">Shop Now</Link>
                </div>
                <img src={heroImg} className="w-full" />
            </div>
        </div>
     );
}
 
export default HomeAboutSection;