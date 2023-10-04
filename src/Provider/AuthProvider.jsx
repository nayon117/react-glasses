import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase.config";
// create context 
export const AuthContext = createContext(null)

// google Provider 
const googleProvider = new GoogleAuthProvider()
const githubProvider = new  GithubAuthProvider()


// component 
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);

    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
 
    //  sign up 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //  sign in 
    const signIn = (email, password) => {
        setLoading(true)
        return  signInWithEmailAndPassword(auth,email,password)
    }
    const handleUpdateProfile = (name,photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
          })
    }

    // logout 
    const logOut = () => {
        return signOut(auth)
    }
   
    // observer 
    useEffect(() => {
      const unSubscribe =   onAuthStateChanged(auth, (user) => {
          setUser(user)
          setLoading(false)
          });
        return () => {
           unSubscribe()
       }   
    },[])
    

    const authentications = {
        googleLogin,
        createUser,
        signIn,
        user,
        logOut,
        loading,
        githubLogin, handleUpdateProfile
    }
    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;