import BlogList from "../components/Blog/BlogList";
import Category from "../components/Home/Category";
import HomeHeroSection from "../components/Home/HomeHeroSection";
import HomeAboutSection from "../components/Home/HomeAboutSection";
import Newsletter from "../components/Home/Newsletter";
import Products from "../components/Products";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
    return ( 
        <>
            <HomeHeroSection />
            <Category />
            <Products />
            <HomeAboutSection />
            <HowItWorks />
            <BlogList />
            <Newsletter />
        </>
     );
}
 
export default Home;