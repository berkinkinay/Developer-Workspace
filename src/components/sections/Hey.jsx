  import React from 'react'
  import {motion} from 'framer-motion'
  import {Hello} from '../objects/Hello'

  export const Hey = () => {
  return (
  <div className='text' id='Workspace'>
  <div class='flex w-full h-screen'>
  <div 
    class=
  'flex absolute w-full h-screen text-white items-center justify-center'
  >  
    <p class='flex absolute top-10 text-xl text-gray-400'>Part three</p> 
    <div class='flex absolute h-[530px] w-[1000px] rounded-xl items-center justify-center'>
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
            This is a example for UI Sign in card.
        </p> 
        </div>
        </motion.div>
      </div>
      <div 
      class=
      'flex items-center justify-center h-[390px] w-[420px] absolute rounded-2xl 2xl:right-[90px] 3xl:right-[60px] 3xl:top-[60px] 2xl:top-[59px]'
      > 
        <Hello/>
      </div>
      </div>
    </div>
    </div>
  </div>
  </div>
    )
  }