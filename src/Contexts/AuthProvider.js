import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../FireBase/Firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loding, setLoding] = useState(true)

    const provider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()

    const googleSignIn = () => {
        setLoding(true)
        return signInWithPopup(auth, provider)
    }

    const gitHubSignIn = () => {
        setLoding(true)
        return signInWithPopup(auth, gitHubProvider)
    }

    const createUserWithEmail = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        signOut(auth)
    }


    const varifyEmailPass = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log("User found in effect", currentUser)
            setLoding(false)
        })

        return () => unsubcribe()
    }, [])

    const appInfo = { user, createUserWithEmail, login, loding, logOut, googleSignIn, varifyEmailPass, updateUserProfile, gitHubSignIn }

    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;