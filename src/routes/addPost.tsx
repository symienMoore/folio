import { createFileRoute } from '@tanstack/react-router'
const addPost = () => {
  return (
    <>
        <h1 className='text-white'>test</h1>
        
        
    </>
  )
}


export const Route = createFileRoute('/addPost')({
  component: addPost
})


