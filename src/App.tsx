
import { useEffect } from 'react';
import './App.css'
import ButtonReg from './components/button';
import PreviewItem from './components/previewItem';
// import ImageCarousel from './components/imageCarousel'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel'
import { delay, motion } from "framer-motion"
import { Route, Router, useRouterState } from '@tanstack/react-router';


function App() {
  const router = useRouterState()
  useEffect(() => {
    console.log(router.location.pathname)
  }, [])
  // const pictures = {
  //   images: [
  //     "https://www.pexels.com/photo/a-camera-book-and-flowers-on-a-beach-24245176/",
  //     "https://www.pexels.com/photo/abundance-of-fruit-and-vegetables-on-table-22873594/",
  //     "https://www.pexels.com/photo/aerial-view-of-a-city-1225100/",
  //   ],
  // };
  return (
    <div>
      <section className="h-[700px]">
      <div className='mx-0 mt-60'>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8 }}
            className="font-display font-bold text-white"
          >
            Symien Moore designs
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="font-display text-white text-9xl font-bold w-30"
          >
            logos, apps & websites.
          </motion.h1>
        </div>
      </section>
      <section className="h-screen">
        {/* <Carousel orientation="vertical | horizontal">
          <CarouselContent className='hover:cursor-pointer'>
            <CarouselItem>
              <div className="h-96 bg-blue-300">
                <img
                className='h-72 p-5 mx-auto mt-24'
                  alt="surf"
                  srcSet="src/assets/surf.svg"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-blue-700 w-100 h-96">new test</div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-green-700 w-100 h-96">new test</div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}
        {/* <div>
          <motion.div></motion.div>
        </div> */}
        <h3 className='text-3xl text-white font-bold -ml-[1000px] mb-5 font-display'>Selected Work</h3>
        <div className='w-full h-3/6 flex'>
          <motion.div 
          initial={{
            
          }}
          className='min-h-[626px] w-8/12 bg-blue-500 p-20 relative'
          >
            <div className='absolute top-500 bg-red h-1/3 z-50 '></div>
            <motion.img 
            srcSet="src/assets/surf.svg" 
            alt=" surf" 
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            transition={{}}
            className='mt-24 hover:cursor-pointer'/>
            <h3 className='text-white font-display mt-24 mr-80 text-3xl ease-linear'>Surf</h3>
          </motion.div>
          <div className='min-h-[626px] w-8/12 bg-red-500 p-5'>
          </div>
          <div className='min-h-[626px] w-8/12 bg-green-500 p-5'></div>
        </div>
          <h3 className='text-white mt-44 -ml-[1120px] text-2xl font-semibold'>See more</h3>
      </section>
      <section className='w-full'>
        <h3 className='text-white font-display font-bold -ml-[1100px] text-3xl'>Services</h3>
        <div className='servcies-container flex flex-col text-white'>
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
