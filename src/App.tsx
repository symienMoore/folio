
import { useEffect, useState } from 'react';
import './App.css'
import ButtonReg from './components/button';
import PreviewItem from './components/previewItem';
// import ImageCarousel from './components/imageCarousel'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel'
import { delay, motion } from "framer-motion"
import { useRouterState, Link } from '@tanstack/react-router';


function App() {
  // const [message, setMessage] = useState("")
  // const [overlay, setOverlay] = useState(false)
  const router = useRouterState()
  useEffect(() => {
    console.log(router.location.pathname)
  }, [])
  // const test = () => {
  //   setMessage("this is a test")
  //   console.log(message)
  // }
  // const toOverlay = () => {
  //   setOverlay(true)
  // }

  // const FromOverlay = () => {
  //   setOverlay(false)
  // }

  
  return (
    <div>
      <section className="h-[700px]">
      <div className='mx-0 mt-60'>
          <motion.h1 className="font-display text-black mt-[200px]">
            Symien Moore designs
          </motion.h1>
          <motion.h1 className="font-display text-black text-9xl font-bold w-30">
            logos, apps & websites.
          </motion.h1>
          <div className='mx-0'>
            <img className='mx-auto' alt="open to work" srcSet="src/assets/available.svg" />
          </div>
        </div>
      </section>
      <section className="h-screen">
        <h3 className='text-3xl w-64 font-bold mb-5 font-display -ml-[10px]'>Selected Work</h3>
        <div className='w-full h-3/6 flex'>
          <PreviewItem title="Surf"/>
          <PreviewItem title={"Evergreen Adventure Co."}/>
          <PreviewItem title={"undefined"}/>
        </div>
        <Link to="/work">
          <h3 className='mt-44 p-2 text-2xl font-semibold w-32 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white rounded-sm'>See more</h3>
        </Link>
      </section>
      <section className='w-full' id=''>
        <h3 className='font-display font-bold w-64 -ml-[60px] text-3xl'>Services</h3>
        <div className='servcies-container flex flex-col'>
          <div className='flex flex-row my-10'>
            <div className='mr-[200px]'>00.1</div>
            <div>
              <h3 className='font-bold text-left text-2xl'>UX/UI Design</h3>
              <p className='text-left'>
              offer expert web development services to help you create a stunning online presence. 
              Whether you need a new website or a redesign, I'll ensure your website not only looks great 
              but also provides an intuitive and seamless user experience. 
              Let's collaborate to build a website that showcases your brand and drives results.
              </p>
            </div>
          </div>
          <div className='flex flex-row my-10'>
            <div className='mr-[200px]'>00.2</div>
            <div>
              <h3 className='font-bold text-left text-2xl'>Product Design</h3>
              <p className='text-left'>
              offer expert web development services to help you create a stunning online presence. 
              Whether you need a new website or a redesign, I'll ensure your website not only looks great 
              but also provides an intuitive and seamless user experience. 
              Let's collaborate to build a website that showcases your brand and drives results.
              </p>
            </div>
          </div>
          <div className='flex flex-row my-10'>
            <div className='mr-[200px]'>00.3</div>
            <div>
              <h3 className='font-bold text-left text-2xl'>Logo Design</h3>
              <p className='text-left'>
              offer expert web development services to help you create a stunning online presence. 
              Whether you need a new website or a redesign, I'll ensure your website not only looks great 
              but also provides an intuitive and seamless user experience. 
              Let's collaborate to build a website that showcases your brand and drives results.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default App
