
import { Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import './App.css'
import { motion } from 'framer-motion'
import { createBucketClient } from '@cosmicjs/sdk';
import { useEffect, useState } from 'react';


type Post ={
    "id": string,
    "slug": string,
    "title": string,
    "content": string,
    "bucket": string,
    "created_at": string | Date,
    "modified_at": string | Date,
    "status": "published",
    "published_at": string | Date,
    "modified_by": "66f053d3a6354f2a23284097",
    "created_by": "66f053d3a6354f2a23284097",
    "publish_at": string | Date,
    "thumbnail": string,
    "type": string,
    "metadata": {
        "problem:": "test",
        "solution:": "test",
        "start:": "2024-10-03",
        "end:": "2024-10-10",
        "in_progress:": boolean,
        "img1": {
            "url": string,
            "imgix_url": string
        },
        "img2": string,
        "img3": string,
        "img4": string,
        "img5": string,
        "description:": string
    }
}

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
      console.log(posts[0], "metadata")
      setPosts(posts);
    });
    console.log(posts[0], "posts")
  }, [])
  


  return (
    <div className='container mx-auto'>
      <div className='mt-24'>
        <motion.h1
         className='font-bhs text-9xl font-bold text-regal-blue'>
          Symien Moore
          </motion.h1>
          <motion.p
          className='text-xl w-[600px] text-[#7d7d7d] mt-[12px]'>
            I am a results driven, passionate, designer & developer, 
            focused on the people side of technology. I am a creative
            problem solver, with a passion for creating beautiful,
            functional, and user-friendly applications.
          </motion.p>
          {/* <Button colorScheme='blackAlpha' variant='outline'>My Work</Button> */}
        </div>
      <div className='flex mt-8 mx-auto gap-40'>
      <img className='h-[900px]' src="src/assets/profilepic.svg" alt="" />
      <img className='h-[900px]' src="src/assets/profile2.jpeg" alt="" />
      </div>
      <div className='w-full text-regal-blue h-[500px] flex'>
          <h1 className='mx-auto font-bhs text-7xl pt-72 items-center justify-center'>"people ignore design <br />that ignores people..."</h1>
      </div>
      <div className='mt-48'>
        {posts.map((post, index) => (
          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
           key={index} className='lg:flex items-center mt-44'>
            <div className='flex-1'>
              <h1 className='text-5xl font-bold font-bhs text-regal-blue'>{post.title}</h1>
              <p className='text-[#7d7d7d] text-2xl w-1/2'>{post.metadata['description:']}.</p>
              <p>In progress: <span className={`font-bold ${post.metadata['in_progress:'] == true ? 'text-regal-blue' : ''}`}>{post.metadata['in_progress:'].toString()}</span></p>
              <Button rightIcon={<ArrowForwardIcon />}>
              <link rel="stylesheet" href="/posts" />
              See more
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
