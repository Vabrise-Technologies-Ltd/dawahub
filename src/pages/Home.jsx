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
            <div className="md:my-24 my-12 md:px-16 px-4">
                <h1 className="section-title">Our Blogs</h1>
                <p className="section-subtitle">Find a bright ideal to suit your taste with our great selection</p>
                <BlogList />
            </div>
            <Newsletter />
        </>
     );
}
 
export default Home;