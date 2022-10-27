import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";
import toast from 'react-hot-toast';

const Login = () => {
    const { login, googleSignIn, gitHubSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password)

        login(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(e => {
                console.error(e)
                const eMessage = e.message.slice()
                toast.error(eMessage)
            })
    }


    // Google SignIn
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(e => {
                console.error(e)
                const eMessage = e.message.slice()
                toast.error(eMessage)
            })
    }



    // gitHub submit
    const handleGitHubSubmit = () => {
        gitHubSignIn()
            .then((result) => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
                toast.success("Login Succesfull")
            })
            .catch(e => {
                console.error(e)
                const eMessage = e.message.slice()
                toast.error(eMessage)
            })
    }

    return (
        <div className='h-screen hero'>
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login Now!</h1>
                    <p className="py-6">Login Our Latest Courses designed for most enjoyable learning experience by one of the most experienced teachere's.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <div>
                                    <label className="label">
                                        <p href="#" className="label-text-alt link link-hover">Forgot password?</p>
                                    </label>
                                    <label className="label">
                                        <p href="#" className="label-text-alt link link-hover">
                                            <Link to='/signup'>New here? Sign Up</Link>
                                        </p>
                                    </label>

                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>

                            </div>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success w-full mb-2"><FaGoogle /> Sign In With Google</button>
                        <button onClick={handleGitHubSubmit} className="btn btn-outline w-full"><FaGithub /> Sign In With GitHub</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;