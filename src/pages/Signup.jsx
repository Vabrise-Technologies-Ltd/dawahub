import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import signUpImg from "../assets/home-hero.jpg"
import axios from 'axios';


const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3000/users', {
            name,
            email,
            password
          })
          .then(function (response) {
            console.log(response);
            navigate("/login")
          })
          .catch(function (error) {
            console.log(error);
          });

          setName('')
          setEmail('')
          setPassword('')
    }


    return ( 
        <>
            <div className="md:flex justify-center items-center md:my-16 my-12 mx-8">
                <div className="md:w-1/3 lg:mr-16 md:mr-8">
                    <img src={signUpImg} alt="" />
                </div>

                <div className="flex flex-col">
                    <form onSubmit={handleSignup}>
                        <h1 className="md:text-2xl text-xl my-4 font-semibold text-gray-800">
                            Signup
                        </h1>
                        <div>   
                            <label htmlFor="name">Name</label><br />
                            <input
                                type="name"
                                className="input form-input"
                                placeholder="Enter name..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>   
                            <label htmlFor="email">Email</label><br />
                            <input
                                type="email"
                                className="input form-input"
                                placeholder="Enter email..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label><br />
                            <input
                                type="password"
                                className="input form-input"
                                placeholder="Enter password..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn w-full mt-4">
                            Signup
                        </button>
                    </form>
                    <div className="md:mt-4 mt-2">
                        <h3>
                            Don't have an account? 
                            <Link to="/login" className="text-red-500 font-medium mx-2">
                                Login
                            </Link>
                        </h3>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Signup;