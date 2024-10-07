import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/test",
    element: <div>Test</div>,
  },
  {
    path: "/:slug",
    element: <div>Slug</div>,
  }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <Navbar />
    <RouterProvider router={router} />
      {/* <App /> */}
    </ChakraProvider>
  </StrictMode>,
)
