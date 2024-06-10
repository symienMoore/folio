import { motion } from 'framer-motion'
import React, { useState } from 'react'

const PreviewItem = ({title}: {title: string}) => {
    const [overlay, setOverlay] = useState(false)
    const toOverlay = () => {
        setOverlay(true)
      }
    
      const FromOverlay = () => {
        setOverlay(false)
      }
  return (
    <motion.div 
    initial={{
      
    }}
    className='min-h-[626px] w-1/3 bg-blue-500 p-20 relative'
    onHoverStart={() => toOverlay()}
    onHoverEnd={() => FromOverlay()}
    >
     { overlay && <div 
      className=' bg-black min-h-[626px] w-full p-0 mt-0 absolute top-0 left-0 opacity-25 duration-500'
      >
        <h1 className='text-white opacity-100 mx-auto my-[50%] relative'>UX/UI design</h1>
      </div>
      }
      <motion.img 
      srcSet="src/assets/surf.svg" 
      alt=" surf" 
      whileHover={{ scale: 1.2 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}
      transition={{duration: 1}}
      className='mt-24 hover:cursor-pointer'/>
      <h3 className='text-white font-display mt-24 mr-80 text-3xl ease-linear'>{title}</h3>
    </motion.div>
  )
}

export default PreviewItem