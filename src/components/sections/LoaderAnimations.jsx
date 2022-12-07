import React from 'react'
//OBJECTs
import Animation from '../objects/FirstAnimation/Animation'
import Animation2 from '../objects/SecondAnimation/Animation2'
import Animation3 from '../objects/ThirdAnimation/Animation3'

export const LoaderAnimations = () => {
 return (

<div className='text' id="animations">
  <div class="flex w-full h-screen">
    <div 
     class=
     'flex absolute bg-black w-full h-screen text-white items-center justify-center'
    >  
      <p 
       class=
       "flex absolute top-10 w-64 h-fit text-base items-center justify-center"
       >
         Loader Animations 
      </p>
      <div class="grid grid-cols-2 gap-36">
        <div class="flex! absolute! h-24 w-24 ml-12 rounded items-center justify-center">
           <Animation />
        </div>
        <div class="flex h-fit w-fit">
           <Animation2 />
        </div>
        <div class="flex h-36 w-48">
            <Animation3 />
        </div>
        <div 
         class=
         "flex h-36 w-48 bg-white text-black items-center justify-center text-xs rounded-xl"
         >
          more stuff coming soon
        </div>
      </div>
      <p 
       class=
       "flex absolute text-xs w-96 h-fit bottom-10 text-center"
      > 
        This is about CSS animations, I can code different stuff like these examples and more content will be here  coming soon.
      </p>
    </div>
  </div>
</div>
  )
}