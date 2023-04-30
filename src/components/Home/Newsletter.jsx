const Newsletter = () => {
    return ( 
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-700 via-cyan-600 md:p-16 p-6 grid md:grid-cols-2 md:gap-32 gap-8">
            <div className="section-title md:text-left text-white font-bold">
                Sign Up for the Latest Deals, Product News, and more from Dawahub.
            </div> 
            <div className="form-control md:w-80">
                <div className="relative">
                    <input type="text" placeholder="user@gmail.com" className="input input-bordered rounded-lg w-full text-sm" /> 
                    <button className="bg-[#FBEBB5] p-3 rounded-r-lg border-none absolute top-0 right-0 rounded-l-none font-medium uppe">Subscribe</button>
                </div>
            </div>
        </div>
     );
}
 
export default Newsletter;