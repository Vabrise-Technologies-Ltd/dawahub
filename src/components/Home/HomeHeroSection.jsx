import { Splide, SplideSlide } from '@splidejs/react-splide';
import hero1 from "../../assets/hero/hero1.jpg"
import hero2 from "../../assets/hero/hero2.jpg"
import hero3 from "../../assets/hero/hero3.jpg"
import hero4 from "../../assets/hero/hero4.jpg"
import hero5 from "../../assets/hero/hero5.jpg"
// import '@splidejs/react-splide/css/skyblue';
import "./splide.min.css"


const HomeHeroSection = () => {
    const slides = [
        {image: hero1},
        {image: hero2},
        {image: hero3},
        {image: hero4},
        {image: hero5},
    ]
    return ( 
        <>
            <section className=""><Splide 
                    className="w-full md:h-[500px] h-[250px]"
                    options={{
                      type: "loop",
                      perPage: 1,
                      perMove: 1,
                      autoplay: true,
                      interval: 5000,
                      pauseOnHover: false,
                      pauseOnFocus: false,
                      arrows: false,
                      pagination: true,
                      drag: true,
                    }}
                    aria-label="Home Hero Carousel"
                >
                    {slides.map((slide, index) => (
                        <SplideSlide key={index}>
                            <img src={slide.image} alt="slide" className="rounded-none md:h-[500px] h-[250px] w-full" />
                        </SplideSlide>
                    ))}
                </Splide>
            </section>
        </>
     );
}
 
export default HomeHeroSection;