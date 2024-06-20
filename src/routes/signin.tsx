import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react'
import { Field, createFormFactory, useForm } from '@tanstack/react-form'
import Login from '@/interfaces/Login.interface'

const Signin = () => {
    // const [email, password] = useState({email: '', password: ''})

    
    const formFactory = createFormFactory<Login>({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const form = formFactory.useForm({
        onSubmit: async ({value}) => {
            console.log(value)
        }
    })
//    const onSubmit = (e) => {
//         console.log(e.email)
//    }
  return (
    <>
    <div className='w-96 mx-auto my-52'>
        <h1 className='font-display text-2xl mr-52'>Welcome back</h1>
        <form action="submit" className='flex flex-col' 
        onSubmit={(e) => {
            e.stopPropagation(); 
            e.preventDefault()
            form.handleSubmit()
        }}>
            <label className='text-left text-gray-600' htmlFor="email">Email</label>
            <form.Field
             name="email"
            //  validators={{
            //     onChange: ({value}) => {
                    
            //     }
            //  }}
             children={(field) => (
              <>
               <input 
                    className='border m-2 p-2 rounded-md outline-none' 
                    placeholder='someone@example.com' 
                    required 
                    type="email" 
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                />
              </>
              )}
            />
            <label className='text-left text-gray-600' htmlFor="password">Password</label>
            <input className='border m-2 p-2 rounded-md outline-none' placeholder='********' required type='password' name='pasword' />
            <Button>Sign in</Button>
        </form>
    </div>
    </>
  )
}

export default Signin

export const Route = createFileRoute('/signin')({
  component: Signin
})