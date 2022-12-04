import React from 'react'
//OBJECT
import { Object2 } from '../objects/Object2';

export const ObjectTwo = () => {
 return (

<div className='text' id="click">
  <div class='flex w-full h-screen'>
    <div 
    class=
    'flex absolute bg-black w-full h-screen text-white items-center justify-center'
    >  
      <p class='flex absolute top-10 text-xl text-gray-400'>Click</p> 
      <div class='flex absolute h-[500px] w-[1000px] rounded-xl items-center justify-center'>
          <div
           class=
          'grid grid-cols-2 gap-2'
          >
          <div 
           class=
          'flex h-fit w-72 mr-24 2xl:ml-24'
          >
            <div
              class=
            'flex items-center justify-center h-fit w-72 rounded-xl'>
              <p class='flex my-2 mx-4 text-white text-center'>
                 Hover object to see the animation. I usually use like this stuff in my projects. I create this button
                 using with Framer Motion library You can use this like a button. 
              </p>
            </div>
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