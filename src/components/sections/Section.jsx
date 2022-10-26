import React from 'react'
import {motion} from 'framer-motion'
import Object1 from './Object1'
import Swing  from './Swing'

export const Section = () => {
 return (
<div className='text' id='Workspace'>
<div class='flex w-full h-screen'>
 <div 
  class=
 'flex absolute bg-gray-700 w-full h-screen text-white items-center justify-center'
 >  
  <p class='flex absolute top-10 text-xl text-gray-900'>Let's start!</p> 
  <div class='flex absolute h-[500px] w-[1000px] bg-slate-800 rounded-xl items-center justify-center'>
    <div
     class=
     'grid grid-cols-2 h-[full] w-full'
     >
    <div 
      class=
     'flex h-96 w-72 2xl:ml-24 3xl:ml-[100px]'>
      <motion.div
        whileHover={{ x: 20, transition: { duration: 0.1 }, }}  
        transition={{ type: "spring", stiffness: 80,  duration: 0.1 }}
      >
       <div 
        class=
       'flex items-center justify-center h-96 w-72 bg-slate-500 rounded-xl'>
        <p class='flex my-2 mx-4 text-black text-center'
        >
          Hover the object to see animation. I can code animation module to different possibilities than this example.
       </p> 
      </div>
      </motion.div>
    </div>
     <div 
     class=
     'flex items-center justify-center h-[390px] w-[420px] bg-zinc-900 absolute rounded-2xl 2xl:right-[90px] 3xl:right-[60px] 3xl:top-[60px] 2xl:top-[59px]'
     > 
       <Swing />
     </div>
    </div>
   </div>
  </div>
 </div>
</div>
  )
}
