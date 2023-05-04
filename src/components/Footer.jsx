import { Link } from "react-router-dom";

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return ( 
        <>
            <div className="bg-[#FBEBB5] py-8 px-4">
                <footer className="footer text-base-content md:py-8 py-4 ">
                    <div>
                        <span className="footer-title">Company</span> 
                        <Link to='/admin' className="link link-hover">Admin</Link> 
                        <Link to='/pharmacy-agent' className="link link-hover">Pharmacy Agents</Link> 
                        <Link to='/' className="link link-hover">Users</Link>
                        <Link to='/rider' className="link link-hover">Riders</Link> 
                    </div> 
                    <div>
                        <span className="footer-title">Shopping Categories</span> 
                        <Link to='/' className="link link-hover"> Drugs</Link> 
                        <Link to='/' className="link link-hover">Viamins & Suppliments</Link> 
                        <Link to='/' className="link link-hover">Skin Care</Link>
                        <Link to='/' className="link link-hover">Medical Equipments</Link> 
                    </div> 
                    <div>
                        <span className="footer-title">About Us</span> 
                        <Link to='/' className="link link-hover">Services</Link> 
                        <Link to='/' className="link link-hover">Blog</Link> 
                        <Link to='/terms_and_conditions' className="link link-hover">Terms & Conditions</Link> 
                        <a href='#privacy-policy' target='_blank' className="link link-hover">Privacy policy</a> 
                    </div> 
                    <div>
                        <span className="footer-title">Our Services</span> 
                        <Link to='/' className="link link-hover">A-Z Brands</Link> 
                        <Link to='/' className="link link-hover">A-Z Store</Link> 
                        <Link to='/' className="link link-hover">Health Services</Link>
                        <Link to='/' className="link link-hover">Prescription Advice</Link>
                    </div> 
                    <div>
                        <span className="footer-title">Customer Care</span> 
                        <Link to='/' className="link link-hover">Delivery & Returns</Link> 
                        <Link to='/' className="link link-hover">My Account</Link> 
                        <Link to='/' className="link link-hover">FAQ's</Link>
                        <Link to='/' className="link link-hover">Sitemap</Link>
                    </div> 
                    

                    
                </footer>
                
                <hr className="border-gray-500 " />

                <div className="mt-3">
                    <p>
                        {year} 
                        <Link to='/' href="#" className="ml-1 text-cyan-700">Dawahub Africa</Link>. All rights reserved
                    </p>
                </div>
            </div>
        </>
    );
}
 
export default Footer;