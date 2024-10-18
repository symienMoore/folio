import { createBucketClient } from "@cosmicjs/sdk";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Post } from "../types.ts"   
// import cosmic from 'cosmicjs'; // Import cosmicjs

const cosmic = createBucketClient({
    bucketSlug: import.meta.env.VITE_BUCKET_SLUG || "",
    readKey: import.meta.env.VITE_BUCKET_READ_KEY || "",
})



const Project = () => {
const params = useParams();
// const [searchParams] = useSearchParams();
const [data, setData] = useState<Post | null>(null);
useEffect(() => {
const getPost = async () => {
    const response = await cosmic.objects
        .find({
          type: "posts",
            slug: params.slug
        }).props("slug,title,metadata")
        .depth(1);
        
    if (response && response.objects && response.objects.length > 0) {
        setData(response.objects[0]);
    }
    console.log(data, "data");
    return data;
}
    //?get the info for the post from the url param and add the id to the fetch url
    getPost()
    console.log(data)
    // console.log(searchParams.get("slug"))
    // fetch(`https://api.cosmicjs.com/v3/buckets/${import.meta.env.VITE_BUCKET_SLUG}/objects/66fc54e4bf0105632ef059f7?read_key=${import.meta.env.VITE_BUCKET_READ_KEY}&depth=1&props=slug,title,metadata,`)
    // .then(res => res.json())
    // .then(data => console.log(data))
}, [params, data])

  return (
    <div className="container mx-auto">
        { data && <div>
            <div className="flex flex-col items-center">
                 <h1 className="font-bhs text-8xl">{data.title}</h1>
                 <p className="text-[#7d7d7d] text-2xl lg:w-1/2 text-center">{data.metadata["description:"]}</p>
                 <img src={data.metadata.img1.imgix_url} alt="" />
            </div>
        </div>}
    </div>
  )
}

export default Project