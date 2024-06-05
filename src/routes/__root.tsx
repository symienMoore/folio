import Footer from '@/components/footer'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
    <div className='flex items-baseline'>
    <img srcSet="src/assets/logowhite.svg" alt="logo"  className='mr-10 h-auto w-auto p-0'/>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold text-white">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold text-white">
          About
        </Link>
        <Link to="/addPost" className="[&.active]:font-bold text-white">
          new post
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