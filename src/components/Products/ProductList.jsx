import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

const ProductList = ({products, loading, error}) => {
    

  return (
        <div className=" md:m-8 mx-4 py-8">
            <Splide
                className="w-full h-[300px] md:h-[300px] "
                options={{ 
                    perPage: 5,
                    perMove: 1,
                    autoplay: true,
                    interval: 3000,
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    arrows: true,
                    pagination: false,
                    drag: true,
                    breakpoints: {
                        340: {
                            perPage: 1,
                            perMove: 1,
                            },
                        640: {
                        perPage: 2,
                        perMove: 1,
                        },
                        720: {
                        perPage: 3,
                        perMove: 1,
                        },
                        1024: {
                        perPage: 3,
                        perMove: 3,
                        },
                    },
                 }}
            >
                {products.map((product) => (
                    <SplideSlide>
                        {error && <p>{error}</p>}
                        {loading ? (<p className="mb-4 text-green-600">Loading products...</p>) : (
                            <div className="flex flex-col items-center rounded-xl shadow-lg hover:shadow-xl mx-3 cursor-pointer bg-[#FBEBB5]"> 
                                <div className="bg-white rounded-t-xl p-4 w-full flex items-center justify-center"> 
                                    <img
                                        src={product.images[0]}
                                        alt="slide"
                                        className="hover:scale-105 duration-500 md:h-[160px] h-[100px] md:w-[200px] w-[100px]   mx-2 rounded-t-xl"
                                    />
                                </div>
                                <Link to={`/categories/products/${product.id}`} className="p-4">
                                    <h3 className="font-semibold text-xs md:text-sm pt-2">
                                        {product.title.slice(0, 10)}...
                                    </h3>
                                    <p className="font-light text-xs md:text-sm py-1">
                                        {product.description.slice(0, 40)}...
                                    </p>
                                    <p className="md:text-base text-xs font-semibold text-cyan-600">
                                            KES {product.price * 100}
                                    </p>
                                </Link>
                            </div>     
                        )}
                        
                    </SplideSlide>
                ))}
            </Splide>
        </div> 
     );
}
 
export default ProductList;