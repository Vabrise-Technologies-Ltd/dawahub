// import { Carousel } from "flowbite-react";
import carousel1 from "../../assets/blog1.png"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"

const Category = () => {
    return ( 
        <>
            <section className="md:py-24 py-16">
                <h2 className="section-title">Top Categories</h2>
                <div className="carousel w-full md:my-12 my-6">
                    <div id="slide1" className="carousel-item justify-center items-center relative w-full">
                        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-0 gap-4 items-center justify-center md:w-5/6">
                            <a href="#" className="carousel-card">
                                <h3 className="carousel-card-name">Drugs</h3>   
                                <img src={carousel1} className="carousel-image" />
                            </a>
                            <a href="#" className="carousel-card">
                                <h3 className="carousel-card-name">Vitamins</h3>   
                                <img src={carousel1} className="carousel-image" />
                            </a>
                            <a href="#" className="carousel-card">
                                <h3 className="carousel-card-name">Skin Care</h3>   
                                <img src={carousel1} className="carousel-image" />
                            </a>
                            <a href="#" className="carousel-card">
                                <h3 className="carousel-card-name">Medical Equipments</h3>   
                                <img src={carousel1} className="carousel-image" />
                            </a>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn p-2 w-12 md:h-12 rounded-full">
                                <FaChevronLeft />
                            </a> 
                            <a href="#slide2" className="btn p-2 w-12 md:h-12 rounded-full">
                                <FaChevronRight />
                            </a>
                        </div>
                    </div> 

                    <div id="slide2" className="carousel-item justify-center items-center relative w-full">
                        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-0 gap-4 items-center justify-center md:w-5/6">
                            <div className="carousel-card">
                                <h3 className="carousel-card-name">Drugs</h3>   
                                <img src={carousel1} className="carousel-image" />
                            </div>
                            <div className="carousel-card">
                                <h3 className="carousel-card-name">Drugs</h3>   
                                <img src={carousel1} className="carousel-image" />
                            </div>
                            <div className="carousel-card">
                                <h3 className="carousel-card-name">Drugs</h3>   
                                <img src={carousel1} className="carousel-image" />
                            </div>
                            <div className="carousel-card">
                                <h3 className="carousel-card-name">Drugs</h3>   
                                <img src={carousel1} className="carousel-image" />
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn p-2 w-12 md:h-12 rounded-full">
                                <FaChevronLeft />
                            </a> 
                            <a href="#slide3" className="btn p-2 w-12 md:h-12 rounded-full">
                                <FaChevronRight />
                            </a>
                        </div>
                    </div> 
                    
                    
                </div>
            </section>
        </>
     );
}
 
export default Category;