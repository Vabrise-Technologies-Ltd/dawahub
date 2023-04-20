import BlogList from "../components/Blog/BlogList";
import HomeHeroSection from "../components/Home/HomeHeroSection";
import Newsletter from "../components/Home/Newsletter";

const Home = () => {
    return ( 
        <>
            <HomeHeroSection />
            <BlogList />
            <Newsletter />
        </>
     );
}
 
export default Home;