import { createFileRoute } from '@tanstack/react-router'



const Work = () => {
  return (
    <div>work</div>
  )
}




export const Route = createFileRoute('/work')({
  component: Work
})