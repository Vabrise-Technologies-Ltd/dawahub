import { useState } from "react"
import { Link } from "react-router-dom"
import loginImg from "../assets/home-hero.jpg"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        console.log('hello')
    }


    return ( 
        <>
            <div className="md:flex justify-center items-center md:mt-16 mt-12 mx-8">
                <div className="md:w-1/3 lg:mr-16 md:mr-8">
                    <img src={loginImg} alt="" />
                </div>

                <div className="flex flex-col">
                    <form onSubmit={handleLogin}>
                        <h1 className="md:text-2xl text-xl my-4 font-semibold text-gray-800">
                            Login
                        </h1>
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
                        <button type="submit" className="btn w-full md:mt-8 mt-4">
                            Login
                        </button>
                    </form>
                    <div className="md:mt-4 mt-2">
                        <h3>
                            Don't have an account? 
                            <Link to="/signup" className="text-red-500 font-medium mx-2">
                                Sign Up
                            </Link>
                        </h3>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Login;