import { FaPhone, FaUserAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

const ContactDetails = () => {
    const contactInfo = [
        {icon: <FaUserAlt />, details: 'Dawahub Pharmacy'},
        {icon: <FaPhone />, details: '0710815080'},
        {icon: <MdLocationOn />, details: 'Nairobi, Kenya'},
        {icon: <HiOutlineMail />, details: 'info@dawahub.com'},
    ]
    return ( 
        <>
            {contactInfo.map((info) => (
                <motion.div 
                    whileHover={{y: -8, scale: 1.02}}
                    transition={{type: 'spring', stiffness: 80}}
                    class="flex items-center bg-white rounded-lg ease-out duration-300 px-4 py-6 shadow-lg hover:shadow-xl">
                    <p className="text-cyan-600">{info.icon}</p>
                    <p class="md:ml-4 ml-2 mt-2 md:text-sm text-xs">{info.details}</p>
                </motion.div>
            ))}
        </>
     );
}
 
export default ContactDetails;