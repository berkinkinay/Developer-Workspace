import React from 'react'
import { motion } from 'framer-motion'

export const Object2 = () => {
  return (
<div class='text'>
 <div 
  class='' 
  >
    <motion.div
       whileHover={{ scale: 1.1 }}
       transition={{ type: "spring", stiffness: 100, damping: 10 }}
       whileTap={{ scale: 1 }}
    >
   <div   
     class=
     'flex items-center justify-center h-56 w-[420px] text-black bg-slate-200 rounded-xl drop-shadow-sm hover:drop-shadow-lg'
     >
        You can also click on this object
   </div>
   </motion.div>
 </div>
</div>
  )
}