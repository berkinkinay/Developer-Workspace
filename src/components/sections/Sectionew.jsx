import React from 'react'
import {motion} from 'framer-motion'
import { Object2 } from '../objects/Object2';

export const Sectionew = () => {
 return (
<div className='text'>
<div class='flex w-full h-screen'>
 <div 
  class=
 'flex absolute bg-gray-900 w-full h-screen text-white items-center justify-center'
 >  
  <p class='flex absolute top-10 text-xl text-gray-900'>Part two</p> 
  <div class='flex absolute h-[500px] w-[1000px] bg-slate-800 rounded-xl items-center justify-center'>
    <div
     class=
     'grid grid-cols-2 h-[full] w-full'
     >
    <div 
      class=
     'flex h-96 w-72 2xl:ml-24 3xl:ml-[100px]'>
      <motion.div
        whileHover={{ x: -20, transition: { duration: 0.1 }, }}  
        transition={{ type: "spring", stiffness: 80,  duration: 0.1 }}
      >
       <div 
        class=
       'flex items-center justify-center h-96 w-72 bg-slate-500 rounded-xl'>
        <p class='flex my-2 mx-4 text-black text-center'
        >
          Hover object to see the animation. I can code animation module to different possibilities than this example. You can use this like a button. 
       </p> 
      </div>
      </motion.div>
    </div>
     <div 
     class=
     'flex items-center justify-center h-[390px] w-[500px] bg-zinc-900 absolute rounded-2xl 2xl:right-[40px] 3xl:right-[60px] 3xl:top-[60px] 2xl:top-[59px]'
     > 
        <Object2 />
     </div>
    </div>
   </div>
  </div>
 </div>
</div>
  )
}