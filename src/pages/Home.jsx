import Category from "../components/Home/Category";
import HomeHeroSection from "../components/Home/HomeHeroSection";
import HomeAboutSection from "../components/Home/HomeAboutSection";
import Newsletter from "../components/Home/Newsletter";
import Products from "../components/Products/Products";
import HowItWorks from "../components/HowItWorks";
import HomeBlogs from "../components/Blog/HomeBlogs";

const Home = ({products, loading, error}) => {
    const catItems = products.filter((item) => {
        return item.category
    })
    console.log(catItems)
    return ( 
        <>  
            <HomeHeroSection />
            <Category   />
            <Products products={products} loading={loading} error={error} />
            <HomeAboutSection />
            <HowItWorks />
            <HomeBlogs />
            <Newsletter />
        </>
     );
}
 
export default Home;