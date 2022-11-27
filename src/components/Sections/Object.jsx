import React from 'react'
import {motion} from 'framer-motion'
//OBJECT
import Object1 from '../Objects/Object1'

export const Object = () => {
 return (

<div className='text' id='Workspace'>
  <div 
    class=
    'flex absolute bg-zinc-800 w-full h-screen text-white items-center justify-center'
    >  
    <p class='flex absolute top-10 text-xl text-gray-400'>Last part</p> 
    <div class='flex h-[500px] w-[1000px] rounded-xl items-center justify-center'>
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
      'flex h-[450px] w-[420px] bg-zinc-900 absolute rounded-2xl 2xl:right-[350px] xl:right-[400px] 3xl:right-[530px] 3xl:top-[240px] 2xl:top-[134px] xl:top-[250px]'
      > 
          <Object1 />
      </div>
    </div>
    </div>
  </div>
</div>
  )
}