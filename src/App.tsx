
import './App.css'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel'

function App() {

  return (
    <div>
      <section className='h-screen'>
        <div className='mx-auto'>
          <h1 className='font-display font-bold text-white'>
            Symien Moore designs
          </h1>
          <h1 className='font-display text-white text-8xl font-bold w-20'>
            logos, apps & websites.
          </h1>
        </div>
      </section>
      <section className='h-screen'>
        <Carousel>
          <CarouselContent>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
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
