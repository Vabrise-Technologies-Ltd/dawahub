import { FaPaperPlane } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
     
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t90pxy5', 'template_tv081r2', form.current, 'WRrSye9uB_rR96j-n')
        .then((result) => {
            console.log(result.text);
            console.log('Message sent successfully!')
        }, (error) => {
            console.log(error.text);
            console.log('There was an error, please try again!')
        });
        
        e.target.reset()
        alert('Email sent successfully')
    };

    return ( 
        <>
            <div>
                <form ref={form} onSubmit={sendEmail} >
                    <div className="label">
                        <input className="input" type="text" name="name" placeholder="Enter name..." required />
                    </div>
                    <div className="label">
                        <input className="input" type="email" name="email" placeholder="Enter email..." required />
                    </div>
                    <div className="label">
                        <input className="input" type="text" name="subject" placeholder="Enter subject..." required />
                    </div>
                    <div className="label">
                        <textarea className="py-2 px-3 rounded-lg w-full outline-none" name="message" placeholder="Enter Message..." cols="30" rows="4"></textarea>
                    </div>
                    <button className="mt-4 btn flex items-center">
                        Submit
                        <span className="ml-2">
                            <FaPaperPlane />
                        </span>
                    </button>
                </form>
            </div>
        
        </>
     );
}
 
export default ContactForm;