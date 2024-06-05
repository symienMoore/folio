import { motion } from 'framer-motion'
import React from 'react'

const PreviewItem = ({imagepath, title, count}) => {
  return (
    <motion.div className='min-h-[626px] w-8/12 bg-blue-500 p-5 m-5'>
        <p className='text-white mr-72'>/00.{count}</p>
        <img srcSet={imagepath} alt=" surf" className='mt-32'/>
           
        <h3 className='text-white font-display mt-24 mr-72 text-3xl'>{title}</h3>
    </motion.div>
  )
}

export default PreviewItem