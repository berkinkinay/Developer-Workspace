import React from 'react'
//OBJECT
import Swing  from '../objects/Swing'

export const ObjectOne = () => {
 return (
  
<div className='text' id='hello'>
<div class='flex w-full h-screen'> 
 <div 
  class=
 'flex absolute bg-black w-full h-screen text-white items-center justify-center'
 >  
   <p class='flex absolute top-10 text-xl text-gray-400'>Let's begin!</p> 
    <div 
     class=
     'flex absolute h-[500px] w-[1000px] rounded-xl items-center justify-center'
     >
        <div
         class=
        'grid grid-cols-2 gap-1'
        >
        <div 
         class=
        'flex h-fit w-64 mr-20 2xl:ml-24 items-center justify-center'>

          <div 
           class=
          'flex items-center justify-center h-fit w-72 rounded-xl drop-shadow-2xl'>
            <p class='flex my-2 mx-4 text-white text-center text-sm'
            >
              Hover object to see the animation. I can code animation module to different possibilities than this example.
            </p> 
          </div>
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