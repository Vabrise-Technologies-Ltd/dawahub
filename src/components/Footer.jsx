const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return ( 
        <>
            <div className="bg-white md:py-16 py-8 px-4">
                <footer className="footer text-base-content md:py-8 py-4 ">
                    <div>
                        <span className="footer-title">Shopping Categories</span> 
                        <a className="link link-hover"> Drugs</a> 
                        <a className="link link-hover">Viamins & Suppliments</a> 
                        <a className="link link-hover">Skin Care</a>
                        <a className="link link-hover">Medical Equipments</a> 
                    </div> 
                    <div>
                        <span className="footer-title">About Us</span> 
                        <a className="link link-hover">Our History</a> 
                        <a className="link link-hover">Our Team</a> 
                        <a className="link link-hover">Services</a> 
                        <a className="link link-hover">Blog</a> 
                        <a className="link link-hover">Terms of use</a> 
                        <a className="link link-hover">Privacy policy</a> 
                    </div> 
                    <div>
                        <span className="footer-title">Our Services</span> 
                        <a className="link link-hover">A-Z Brands</a> 
                        <a className="link link-hover">A-Z Store</a> 
                        <a className="link link-hover">Health Services</a>
                        <a className="link link-hover">Prescription Advice</a>
                    </div> 
                    <div>
                        <span className="footer-title">Customer Care</span> 
                        <a className="link link-hover">Delivery & Returns</a> 
                        <a className="link link-hover">My Account</a> 
                        <a className="link link-hover">FAQ's</a>
                        <a className="link link-hover">Sitemap</a>
                    </div> 
                    

                    
                </footer>
                
                <hr className="border-gray-500 " />

                <div className="mt-3">
                    <p>
                        {year} 
                        <a href="#" className="ml-1 text-cyan-700">Dawahub Africa</a>. All rights reserved
                    </p>
                </div>
            </div>
        </>
    );
}
 
export default Footer;