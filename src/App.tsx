
import { Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import './App.css'
import { motion } from 'framer-motion'
import { createBucketClient } from '@cosmicjs/sdk';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';




const cosmic = createBucketClient({
  bucketSlug: import.meta.env.VITE_BUCKET_SLUG || "",
  readKey: import.meta.env.VITE_BUCKET_READ_KEY || "",
});

async function getPosts() {
  const { objects: posts } = await cosmic.objects
    .find({
      type: "posts",
    })
    // .props("title,metadata.description");
  return posts;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    getPosts().then((posts: Post[]) => {
      setPosts(posts);
    });
    console.log(posts[0], "posts")
  }, [posts])
  


  return (
    <div className='container mx-auto'>
      <div className='mt-24 flex flex-col'>
        <motion.h1
         className='font-bhs lg:text-9xl font-bold text-regal-blue text-6xl text-center'>
          Symien Moore
          </motion.h1>
          <motion.p
          className='lg:w-[600px] text-gray mt-[12px] text-2xl text-center'>
            I am a results driven, passionate, designer & developer, 
            focused on the people side of technology. I am a creative
            problem solver, with a passion for creating beautiful,
            functional, and user-friendly applications.
          </motion.p>
          {/* <Button colorScheme='blackAlpha' variant='outline'>My Work</Button> */}
        </div>
      {/* <div className='flex mt-8 mx-auto gap-40'>
      <img className='h-[900px]' src="src/assets/profilepic.svg" alt="" />
      <img className='h-[900px]' src="src/assets/profile2.jpeg" alt="" />
      </div> */}
      <div className='flex flex-row items-center'>
        <h1 className='mx-auto font-bhs text-5xl flex-1'>"people ignore design <br />that ignores people..."</h1>
        <div className='flex-1'>
        <img src="src/assets/profilePic.svg" alt="" width={700}/>
          <p className='text-2xl text-gray '>
            The quote above is from designer Frank Chimero, and it is one that I base
            all my work on. I believe that design should be user-centered, and that
            the user experience should be at the forefront of every design decision.
            I am fortunate enough to have worked with various companies, designers, & 
            developers who share the same belief.
          </p>
          <Button>Get in touch</Button>
        </div>
      </div>
      <div className='mt-48'>
        {posts.map((post, index) => (
          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.2,
          }}
           key={index} className='lg:flex lg:flex-row flex flex-col items-center mt-44'>
            <div className='flex-1 pl-5 lg:pl-0'>
              <h1 className='lg:text-5xl text-4xl font-bold font-bhs text-regal-blue'>{post.title}</h1>
              <p className='text-[#7d7d7d] text-2xl lg:w-1/2 lg:text-left'>{post.metadata['description:']}.</p>
              <p>In progress: <span className={`font-bold ${post.metadata['in_progress:'] == true ? 'text-regal-blue' : ''}`}>{post.metadata['in_progress:'].toString()}</span></p>
              <Button rightIcon={<ArrowForwardIcon />}>
              <Link to={post.slug}>See more</Link>
              </Button>
            </div>
              <img src={post.thumbnail} alt="" width={220}/> 
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default App
