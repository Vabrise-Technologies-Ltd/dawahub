import BlogList from "./BlogList";
import { Link } from "react-router-dom";

const HomeBlogs = () => {
    return ( 
        <>
            <div className="md:my-24 my-12 md:px-16 px-4">
                <h1 className="section-title">Our Blogs</h1>
                <p className="section-subtitle">Find a bright ideal to suit your taste with our great selection</p>
                <BlogList />

                <div className="text-center md:mt-16 mt-8">
                    <Link to='/blog' className="border-b-2 border-gray-800 pb-2">View All Post</Link>
                </div>
            </div>

            
        </>
     );
}
 
export default HomeBlogs;