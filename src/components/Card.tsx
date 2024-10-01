import { createBucketClient } from "@cosmicjs/sdk";
import { useState, useEffect } from "react";

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
  
const Card = () => {
    const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
    console.log(posts, "posts")
  }, [])
  
  return (
    <div>Card</div>
  )
}

export default Card