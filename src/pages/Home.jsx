import Category from "../components/Home/Category";
import HomeHeroSection from "../components/Home/HomeHeroSection";
import HomeAboutSection from "../components/Home/HomeAboutSection";
import Newsletter from "../components/Home/Newsletter";
import Products from "../components/Products/Products";
import HowItWorks from "../components/HowItWorks";
import HomeBlogs from "../components/Blog/HomeBlogs";

const Home = () => {
    return ( 
        <>
            <HomeHeroSection />
            <Category />
            <Products />
            <HomeAboutSection />
            <HowItWorks />
            <HomeBlogs />
            <Newsletter />
        </>
     );
}
 
export default Home;