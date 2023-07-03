import { Splide, SplideSlide } from "@splidejs/react-splide";

const ProductList = ({products}) => {
    

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
                        <div className="flex flex-col items-center rounded-xl shadow-lg hover:shadow-xl mx-3 p-3 cursor-pointer bg-yellow-50">
                            <img
                                src={product.images[0]}
                                alt="slide"
                                className="md:h-[160px] h-[100px] md:w-[160px] w-[100px] mx-2"
                            />
                            <h3 className=" text-center font-semibold text-xs md:text-sm pt-2">
                                {product.title.slice(0, 10)}...
                            </h3>
                            <p className=" text-center font-light text-xs md:text-sm py-1">
                                {product.description.slice(0, 40)}...
                            </p>
                            <div className="flex gap-2 md:gap-4">
                                <p className="md:text-lg text-xs font-bold text-cyan-600">
                                    KES {product.price * 100}
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