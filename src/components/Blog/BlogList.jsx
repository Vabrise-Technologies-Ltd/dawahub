import blog1 from "../../assets/blog1.png"
import blog2 from "../../assets/blog2.png"
import blog3 from "../../assets/blog3.png"
import { BsClock, BsCalendar } from "react-icons/bs"
import { Link } from "react-router-dom"

const BlogList = () => {
    const blogs = [
        {image: blog1, content: "Going all-in with millennial design", title: "Read More", icon1: <BsClock />, icon2: <BsCalendar />, time: "5min", date: "12th Oct 2022"},
        {image: blog2, content: "Going all-in with millennial design", title: "Read More", icon1: <BsClock />, icon2: <BsCalendar />, time: "5min", date: "12th Oct 2022"},
        {image: blog3, content: "Going all-in with millennial design", title: "Read More", icon1: <BsClock />, icon2: <BsCalendar />, time: "5min", date: "12th Oct 2022"},
    ]

    return ( 
        <>
            <div className="grid md:grid-cols-3 gap-16 md:mt-16 mt-8">
                {blogs.map((blog) => (
                    <div>
                        <div>
                            <img src={blog.image} alt="" />
                        </div>
                        <p className="text-center my-2">{blog.content}</p>
                        <h2 className="text-center pb-1 font-medium">
                            <a href="#">{blog.title}</a>
                        </h2>
                        <div className="flex flex-col justify-center items-center">
                            <hr className="border-b-2 rounded-full border-gray-800 w-20" />
                        </div>
                        <div className="flex justify-around mt-4">
                            <p className="flex items-center space-x-2">
                                {blog.icon1}
                                <span className="text-gray-600 font-light text-sm">{blog.time}</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                {blog.icon2}
                                <span className="text-gray-600 font-light text-sm">{blog.date}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}
 
export default BlogList;