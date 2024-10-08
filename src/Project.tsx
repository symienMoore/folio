import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
// import cosmic from 'cosmicjs'; // Import cosmicjs



const Project = () => {
const [searchParams] = useSearchParams();
const [data, setData] = useState(null);
useEffect(() => {

    //?get the info for the post from the url param and add the id to the fetch url

    const slugValue = searchParams.get('slug');
    fetch(`https://api.cosmicjs.com/v3/buckets/${import.meta.env.VITE_BUCKET_SLUG}/objects/66fc54e4bf0105632ef059f7?read_key=${import.meta.env.VITE_BUCKET_READ_KEY}&depth=1&props=slug,title,metadata,`)
    .then(res => res.json())
    .then(data => console.log(data))
}, [searchParams])

  return (
    <div>

    </div>
  )
}

export default Project