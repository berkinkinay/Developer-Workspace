import React from 'react'
import {motion} from 'framer-motion'
import Object1 from '../components/sections/Object1'
import '../components/Scroll.css'
import { Section } from '../components/sections/Section'

export const Workshop = () => {
 return (
<div className='text' id='Workspace'>
 <div 
  class=
 'flex absolute bg-gray-900 w-full h-screen text-white items-center justify-center'
 >  
  <p class='flex absolute top-10 text-xl text-gray-500'>Part two</p> 
  <div class='flex h-[500px] w-[1000px] bg-slate-800 rounded-xl items-center justify-center'>
    <div
     class=
     'grid grid-cols-2 h-[full] w-full'
     >
    <div 
      class=
     'flex h-96 w-72 2xl:ml-24 3xl:ml-36'>
      <motion.div
        whileHover={{ y: 20, transition: { duration: 0.1 }, }}  
        transition={{ type: "spring", stiffness: 80,  duration: 0.1 }}
      >
       <div 
        class=
       'flex h-96 w-72 bg-slate-500 rounded-xl text-center items-center justify-center'>
        <p class='flex my-8 mx-10 text-black'
        >
          This is scrollX, try to object scroll on X panel.
          There is a indicator when you move the cards it will follows you.
       </p> 
      </div>
      </motion.div>
    </div>
     <div 
     class=
     'flex h-[450px] w-[420px] bg-zinc-900 absolute rounded-2xl 2xl:right-[340px] 3xl:right-[530px] 3xl:top-[240px] 2xl:top-[134px]'
     > 
        <Object1 />
     </div>
   </div>
  </div>
 </div>
</div>
  )
}