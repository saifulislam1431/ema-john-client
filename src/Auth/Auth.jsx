import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const UserContext = createContext(null)
const auth = getAuth(app);

const Auth = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const sigUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const sigIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLog = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
            if(currentUser){
                const userEmail = {
                    email : currentUser.email
                }
                fetch("http://localhost:5000/jwt",{
                    method:"POST",
                    headers:{"content-type":"application/json"},
                    body: JSON.stringify(userEmail)
                })
                .then(res=>res.json())
                .then(data=>{
                    localStorage.setItem('user-token' , data)
                })
            }
           
        })
        return () => unsubscribe();
    }, [])


    const userInfo = {
        user,
        loading,
        sigUp,
        sigIn,
        logOut,
        googleLog
    }

    return (
        <UserContext.Provider value={userInfo} >
            {children}
        </UserContext.Provider>
    );
};

export default Auth;