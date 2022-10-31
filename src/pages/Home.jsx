import React from 'react';
import Typewrite from 'typewriter-effect';
import { BiDownArrow } from 'react-icons/bi'
import { FaConnectdevelop } from 'react-icons/fa';
import '../App.css';
import Object1 from '../components/objects/Object1'

export const Home = () => {
 return (
<div className='text'>
<div 
 class=
 'flex bg-black w-full h-screen justify-center items-center 2xl:text-lg'
>     
 <div class='hidden'> <Object1 /></div>
  <div class='flex items-center justify-center absolute 3xl:top-28 2xl:top-14 h-36 w-[590px] bg-blue-300 rounded-lg'>
  <div 
   class=
  'flex absolute top-8 rounded-xl text-white w-fit h-fit justify-center'
  >
   <a 
    class='hover:underline hover:decoration-slate-200 text-black 3x:text-xl 2xl:text-base font-semibold'
    target="_blank" rel="noreferrer" href="https://berkinkinay.dev/"
    > 
      berkinkinay.dev
      </a> 
    </div>
   <div 
     class=
    'flex absolute bg-purple-800 text-slate-200 rounded-md w-fit h-fit mt-10 t-3xl:text-lg 2xl:text-base'
    >
      <Typewrite 
        onInit=
        {(typewriter) => { 
        typewriter
       .typeString ("Hello There!")
       .pauseFor(1000)
       .deleteAll()
       .pauseFor(50)
       .typeString ("Welcome to my workspace.")
       .pauseFor(1500)
       .deleteAll()
       .typeString("Let's code, create and develop the new features!")
       .pauseFor(2000)
       .start();
        }}
           > 
     </Typewrite>
    </div>
  </div> 
  <div 
   class=
   'flex bg-slate-500 h-64 w-80 drop-shadow-xl rounded-xl justify-center mt-16'>
    <p 
     class=
     'flex text-center justify-center 2xl:text-base my-10 mx-10 text-black'
     > 
      This is a my workspace project. There are going to be objects,
      some UI, UX stuff and also focusing to writing
      JavaScript here that I coded all things.
    </p>
      <div className='App'>
       <div class='flex absolute bottom-5 rounded-full 2xl:right-[140px] 3xl:right-[144px]'
        >   
          <FaConnectdevelop size='2em' color='white' className='App-logo' />        
        </div> 
     </div>  
  </div>
  <div 
  class=
  'flex absolute bottom-20 items-center justify-center bg-slate-200 w-fit h-12 shadow-md drop-shadow-3xl'
  >
    <span class='animate-pulse absolute inline-flex h-full w-full rounded-full bg-sky-100 opacity-75 mr-10'>
    <button 
     class=
    'w-fit h-fit relative inline-flex rounded-full bg-sky-400'
    >
      <a href='#Workspace'>
         <BiDownArrow class='animate-bounce' size='2.5em' color='purple'/>
      </a>
    </button>
    </span>
   </div>
 </div>
</div>
  )
}
