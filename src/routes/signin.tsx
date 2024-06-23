import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import React, { useEffect, useState } from 'react'
import {auth} from '../config/firebase'
import { useAuth } from '@/config/firebase-context';
import { signInWithEmailAndPassword } from "firebase/auth";


const Signin = () => {
    const {currentUser} = useAuth()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [userLoggedIn, setUserLoggedIn] = useState<boolean>()
    
    useEffect(() => {
      console.log(JSON.stringify(currentUser) + ": the current user")
      checkUser(currentUser)
    }, [currentUser])
    
    const checkUser = (user) => {
        if(user) {
            setUserLoggedIn(true)
        }
        if(!user) {
            setUserLoggedIn(false)
        }
        console.log(userLoggedIn)
    }

    const updateEmail = (e: { target: { value: React.SetStateAction<string> } }) => {
        setEmail(e.target.value)
    }

    const updatePassword = (e: {target: { value: React.SetStateAction<string> } }) => {
        setPassword(e.target.value)
    }

    const doSignIn = async () => {
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error: {code: '', message: ''}) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage)
        });
    }
  return (
    <>
        { !userLoggedIn ? <div className='w-96 mx-auto my-52'>
        <h1 className='font-display text-2xl mr-52'>Welcome back</h1>
        <form action="submit" className='flex flex-col' 
        onSubmit={
            (e) => {
            e.stopPropagation(); 
            e.preventDefault()
            doSignIn()
        }}>
            <label className='text-left text-gray-600' htmlFor="email">Email</label>
             <input 
                    className='border m-2 p-2 rounded-md outline-none' 
                    placeholder='someone@example.com' 
                    required 
                    type="email" 
                    onChange={updateEmail}
                />
            <label className='text-left text-gray-600' htmlFor="password">Password</label>
            <input 
                    className='border m-2 p-2 rounded-md outline-none' 
                    placeholder='******' 
                    required 
                    type="password" 
                    onChange={updatePassword}
                />
            <Button>Sign in</Button>
        </form>
     </div> : 
     null }
    </>
  )
}

export default Signin

export const Route = createFileRoute('/signin')({
  component: Signin
})