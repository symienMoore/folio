
import './App.css'
import ButtonReg from './components/button';
// import ImageCarousel from './components/imageCarousel'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel'
import { motion } from "framer-motion"

function App() {
  // const pictures = {
  //   images: [
  //     "https://www.pexels.com/photo/a-camera-book-and-flowers-on-a-beach-24245176/",
  //     "https://www.pexels.com/photo/abundance-of-fruit-and-vegetables-on-table-22873594/",
  //     "https://www.pexels.com/photo/aerial-view-of-a-city-1225100/",
  //   ],
  // };
  return (
    <div>
      <section className="h-screen">
      <div className='text-left mx-80 mt-60'>
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
        <div className='w-full h-3/6 flex'>
          <motion.div className='min-h-[626px] w-8/12 bg-blue-500 p-5 m-5'>
            <p className='text-white mr-72'>/00.1</p>
            <img srcSet="src/assets/surf.svg" alt=" surf" className='mt-32'/>
            {/* <motion.div
            className='text-white font-bold font-display'

            >
              See More
            </motion.div> */}
            <h3 className='text-white font-display mt-24 mr-72 text-3xl'>Surf</h3>
          </motion.div>
          <div className='min-h-[626px] w-8/12 bg-red-500 p-5 m-5'></div>
          <div className='min-h-[626px] w-8/12 bg-green-500 p-5 m-5'></div>
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default App
