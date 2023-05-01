import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { GrStar } from "react-icons/gr"

const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://oraimo-clone-backend.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
        });
    }, []);

  return (
        <div className="md:m-8 mx-4 py-8">
            <Splide
                className="w-full h-[300px] md:h-[300px] "
                options={{
                perPage: 5,
                perMove: 1,
                autoplay: true,
                interval: 5000,
                pauseOnHover: false,
                pauseOnFocus: false,
                arrows: true,
                pagination: false,
                drag: true,
                breakpoints: {
                    640: {
                    perPage: 2,
                    perMove: 1,
                    arrows: false,
                    pagination: true,
                    },
                    768: {
                    perPage: 2,
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
                        <div className="flex flex-col items-center  rounded-xl shadow-lg mx-3 p-3 cursor-pointer bg-[#FBEBB5]">
                            <img
                                src={product.image}
                                alt="slide"
                                className="md:h-[160px] h-[100px] md:w-[160px] w-[100px] mx-2"
                            />
                            <p className=" text-center font-semibold text-xs md:text-sm py-2">
                                {product.name}
                            </p>
                            <div className="flex gap-2 md:gap-4">
                                <p className="md:text-lg text-xs font-semibold line-through">
                                    KES {product.initial_price}
                                </p>
                                <p className="md:text-lg text-xs font-bold text-[#82E602]">
                                    KES {product.actual_price}
                                </p>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div> 
     );
}
 
export default ProductList;