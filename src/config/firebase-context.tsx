import React, { useContext, useEffect, useRef, useState } from "react"
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {app as firebase} from '../config/firebase.ts';

const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

 export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState<any | null>(null)
    const [loading, setLoading] = useState(false)
    const userInfo = useRef()
    const auth = getAuth(firebase)

    function signIn(){
        const provider = new GoogleAuthProvider()
          signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
          })
    }

function signInWithEmail() {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        signIn,
        signInWithEmail,
        logout,
        currentUser
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
 }