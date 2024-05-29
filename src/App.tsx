
import './App.css'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel'

function App() {

  return (
    <div>
      <section className='h-screen'>
        <div className='text-left mx-80 mt-60'>
          <h1 className='font-display font-bold text-white'>
            Symien Moore designs
          </h1>
          <h1 className='font-display text-white text-9xl font-bold w-30'>
            logos, apps & websites.
          </h1>
        </div>
      </section>
      <section className='h-screen'>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className='bg-orange-700 h-96'>
                new test
              </div>
            </CarouselItem>
            <CarouselItem>
            <div className='bg-blue-700 w-100 h-96'>
                new test
              </div>
            </CarouselItem>
            <CarouselItem>
            <div className='bg-green-700 w-100 h-96'>
                new test
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section></section>
    </div>
  )
}

export default App
