import React from 'react'
import Animatepages from '../Animate/Animatepages'

export const Hello = () => {
  return (

<Animatepages>  
<div class='text'>
 <div 
  class=
  'flex bg-zinc-800 h-screen w-full text-white items-center justify-center'
  >
   <div class='flex absolute mb-10 h-[460px] w-80 bg-slate-500 rounded-xl items-center rotate-6 blur-lg'></div>
   <div 
    class=
   'flex flex-col absolute mb-10 h-[460px] w-80 bg-slate-200 rounded-xl items-center'
   >        
    <div class='flex text-xl mt-14 text-gray-600'>Sign In</div>
    <div class='flex text-xs mt-4 font-thin text-gray-600'>Please sigin to use platform</div>
    <div class='flex absolute h-fit w-fit top-[140px] gap-2 rounded-2xl'>
     <form>
       <span class="flex text-slate-700 mb-2 text-xs font-light indent-1">Email</span>
        <input type="email" class="indent-3 text-black rounded-2xl w-56 h-8"/>
     </form>
    </div>
    <div class='flex absolute h-fit w-fit top-[220px] gap-2 rounded-2xl'>
     <form>
     <label class="block">
       <span class="flex text-slate-700 mb-2 text-xs font-light indent-1">Password</span>
        <input type="email" class="indent-3 text-black rounded-2xl w-56 h-8"/>
        </label>
     </form>
    </div>
    <div class='flex flex-cols-2 gap-4 '></div>
    <input type="checkbox" class="appearance flex absolute bottom-[158px] mr-[204px] checked:bg-blue-500 ..."/>
    <p class='flex absolute bottom-[156px] mr-24 text-black text-xs'>Remember me</p>
    <button class='flex absolute bottom-16 w-[102px] bg-blue-500 h-12 rounded-2xl'>
    <div 
     class=
     'flex absolute w-[102px] h-12 bg-gray-700 rounded-2xl items-center justify-center'
     >
       <p class='flex uppercase text-xs'>sıng ın</p>   
     </div>
     </button> 
     </div>
 </div>
</div>
</Animatepages>
  ) 
}