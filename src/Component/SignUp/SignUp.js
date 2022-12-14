import React from 'react';
import { useContext } from 'react';

import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {
    const { createUserWithEmail, googleSignIn, varifyEmailPass, updateUserProfile, gitHubSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/"

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        // console.log(name, email, password)


        // validation
        if (password.length < 6) {
            return toast.error("Password Must Have 6 Charecters")
        }

        // Email sing up
        createUserWithEmail(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
                handleUpdateUser(name, photoURL)
                handleEmailVerification()
                toast.success("Account Created")
                toast.success("Check Your Email To Verify")
            })
            .catch(e => {
                console.error(e)
                toast.error(e.message)
            })


    }

    const handleEmailVerification = () => {
        varifyEmailPass()
            .then(() => {

            })
            .catch(e => {
                console.error(e)
                toast.error(e.message)
            })
    }

    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => {
                console.error(e)
                const eMessage = e.message.slice()
                toast.error(eMessage)
            })
    }

    // Google Sign In
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
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
        <div className='bg-slate-100 mt-14 hero'>
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input name='photoURL' type="text" placeholder="Photo Url" className="input input-bordered" />
                            </div>
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
                                    <p href="#" className="label-text-alt link link-hover">
                                        <Link to='/login'>Already have an account? Login</Link>
                                    </p>
                                </label>

                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Sign Up</button>
                            </div>

                        </form>
                        <div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success w-full mb-2"><FaGoogle /> Sign In With Google</button>
                            <button onClick={handleGitHubSubmit} className="btn btn-outline w-full"><FaGithub /> Sign In With GitHub</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;