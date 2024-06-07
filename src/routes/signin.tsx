import { createFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Signin = () => {
    const [email, password] = useState({email: '', password: ''})
    const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return (errorCode + errorMessage)
        });
  return (
    <>
      <form action="">
        
      </form>
    </>
  )
}

export default Signin

export const Route = createFileRoute('/signin')({
  component: () => <div>Hello /signin!</div>
})