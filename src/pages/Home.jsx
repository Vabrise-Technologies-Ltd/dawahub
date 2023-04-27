import BlogList from "../components/Blog/BlogList";
import Category from "../components/Home/Category";
import HomeHeroSection from "../components/Home/HomeHeroSection";
import Newsletter from "../components/Home/Newsletter";

const Home = () => {
    return ( 
        <>
            <HomeHeroSection />
            <Category />
            <BlogList />
            <Newsletter />
        </>
     );
}
 
export default Home;