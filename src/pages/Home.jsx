import BlogList from "../components/Blog/BlogList";
import Category from "../components/Home/Category";
import HomeHeroSection from "../components/Home/HomeHeroSection";
import HomeAboutSection from "../components/Home/HomeAboutSection";
import Newsletter from "../components/Home/Newsletter";

const Home = () => {
    return ( 
        <>
            <HomeHeroSection />
            <Category />
            <HomeAboutSection />
            <BlogList />
            <Newsletter />
        </>
     );
}
 
export default Home;