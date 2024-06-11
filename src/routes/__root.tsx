import Footer from '@/components/footer'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
    <div className='flex items-baseline'>
    <img srcSet="src/assets/patternblack.svg" alt="logo"  className='mr-10 w-auto p-0 h-9'/>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/work" className="[&.active]:font-bold">
          work
        </Link>
        <Link to="/signin">
          
        </Link>
      </div>
    </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
      <Footer/>
    </>
  ),
})