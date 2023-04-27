import ContactForm from "../components/Contact/ContactForm";
import ContactDetails from "../components/Contact/ContactDetails";
import { motion } from "framer-motion";
import Bounce from 'react-reveal/Bounce';
import CTA from "../components/CTA";


const Contact = () => {
    return ( 
        <>
            <div className="md:pt-16 pt-8 px-6" id="contact">
                <Bounce top>
                    <div className="flex flex-col items-center justify-center pt-8 pb-4 text-gray-800 md:mx-72">
                        <h1 className="section-title">Get In Touch With Us</h1>
                        <p className="text-gray-500 font-light md:text-base text-xs text-center md:mt-2">
                            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                        </p>
                    </div>
                </Bounce>
                <div className="md:flex justify-around items-center md:mx-32 my-8 md:p-10 p-4 bg-gray-100 rounded-lg">
                    <div>
                        <motion.div 
                            initial={{x: "-100vw", opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{type: "spring", delay: 0.2, stiffness: 50}}
                            class="flex flex-col md:my-0 my-8 md:text-2xl text-center text-2xl text-gray-700 space-y-8 ">
                            <ContactDetails />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{x: "100vw", opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{type: "spring", delay: 0.4, stiffness: 50}}
                        className="md:mb-0 mb-4">
                        <ContactForm />
                    </motion.div>
                    
                </div>
            </div>
            <CTA />
        </>
     );
}
 
export default Contact;