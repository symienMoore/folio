
// import { Button } from '@chakra-ui/react'
import './App.css'
import { motion } from 'framer-motion'
import { createBucketClient } from '@cosmicjs/sdk';
import { useEffect, useState } from 'react';


type Post = {
  title: string;
  description: string;
  slug: string;
  problem: string;
  solution: string;
  start: Date
  end: Date
  in_progress: boolean
  img1: string
  img2: string
  img3: string
  img4: string
  img5: string
  thumbnail: string
};

const cosmic = createBucketClient({
  bucketSlug: import.meta.env.VITE_BUCKET_SLUG || "",
  readKey: import.meta.env.VITE_BUCKET_READ_KEY || "",
});

async function getPosts() {
  const { objects: posts } = await cosmic.objects
    .find({
      type: "posts",
    })
    // .props("title,description,image");
  return posts;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
    console.log(posts, "posts")
  }, [])
  


  return (
    <div className='container mx-auto'>
      {/* <div className='flex items-center  mx-auto'>
        <div className='flex-1'>
        <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
        }}
         className='font-bhs text-8xl font-bold text-regal-blue'>
          Symien Moore
          </motion.h1>
          <motion.p 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.9,
          }}
          className='text-xl w-[600px] text-[#7d7d7d] mt-[12px]'>
            I am a results driven, passionate, designer & developer, 
            focused on the people side of technology. I am a creative
            problem solver, with a passion for creating beautiful,
            functional, and user-friendly applications.
          </motion.p>
          <Button colorScheme='blackAlpha' variant='outline'>My Work</Button>
        </div>
        <div className='flex-2'>
          <img className='h-[900px]' src="src/assets/profilepic.svg" alt="" />
        </div>
      </div> */}
      <div className='mt-48'>
        <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
        }}
         className='font-bhs text-9xl font-bold text-regal-blue'>
          Symien Moore
          </motion.h1>
          <motion.p 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.9,
          }}
          className='text-xl w-[600px] text-[#7d7d7d] mt-[12px]'>
            I am a results driven, passionate, designer & developer, 
            focused on the people side of technology. I am a creative
            problem solver, with a passion for creating beautiful,
            functional, and user-friendly applications.
          </motion.p>
          {/* <Button colorScheme='blackAlpha' variant='outline'>My Work</Button> */}
        </div>
      <div className='flex space-x-24 mt-8'>
      <img className='h-[900px] ' src="src/assets/profilepic.svg" alt="" />
      <img className='h-[900px]' src="src/assets/profile2.jpeg" alt="" />
      </div>
      <div className='w-full text-regal-blue'>
          <h1 className='mx-auto font-bhs text-7xl pt-48'>"people ignore design <br />that ignores people..."</h1>
      </div>
      <div>
        {posts.map((post, index) => (
          <div key={index} className='flex'>
            <div className='flex-1'>
              <h1>{post.title}</h1>
              <p>{post.description}</p>
            </div>
            <img src={post.thumbnail} alt="" width={220}/> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
