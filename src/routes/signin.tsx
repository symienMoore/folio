import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react'

const Signin = () => {
    // const [email, password] = useState({email: '', password: ''})
    
   
  return (
    <>
    <div className='w-96 mx-auto my-52'>
        <h1 className='font-display text-2xl mr-52'>Welcome back</h1>
        <form action="" className='flex flex-col'>
            <input className='border m-2 p-2 rounded-md outline-none' placeholder='someone@example.com' required type="email" name='email'/>
            <input className='border m-2 p-2 rounded-md outline-none' placeholder='password' required type='password' name='pasword' />
            <input type="button" />
        </form>
    </div>
    </>
  )
}

export default Signin

export const Route = createFileRoute('/signin')({
  component: Signin
})