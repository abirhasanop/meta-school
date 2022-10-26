import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const { login, googleSignIn } = useContext(AuthContext)
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
            .catch(e => console.error(e))
    }


    // Google SignIn
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(e => console.error(e))
    }

    return (
        <div className='bg-slate-100 hero'>
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login Now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
                                <label className="label">
                                    <p href="#" className="label-text-alt link link-hover">Forgot password?</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>

                            </div>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success w-full mb-2"><FaGoogle /> Sign In With Google</button>
                        <button className="btn btn-outline w-full"><FaGithub /> Sign In With GitHub</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;