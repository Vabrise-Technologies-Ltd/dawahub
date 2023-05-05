import BlogList from "../components/Blog/BlogList";

const Blogs = () => {
    return ( 
        <>
            <div className="md:my-24 my-12 md:px-16 px-4">
            <h1 className="section-title">Our Blogs</h1>
                <p className="section-subtitle">Find a bright ideal to suit your taste with our great selection</p>
                <div>
                    <BlogList />
                </div>
                <div>
                    <BlogList />
                </div>
                <div>
                    <BlogList />
                </div>
            </div>
        </>
     );
}
 
export default Blogs;