import React from 'react';
import Typewrite from 'typewriter-effect';
//ICONS
import { BiDownArrow } from 'react-icons/bi'
import { FaConnectdevelop } from 'react-icons/fa';
//ANIMATE
import Animatedpages from '../components/Animate/Animatedpages';
import '../App.css';

export const Home = () => {
 return (

<Animatedpages>
  <div className='text' id='introduction'>
    <div 
     class=
    'flex w-full h-screen justify-center items-center 2xl:text-lg'
    >     
        <div class='flex items-center justify-center absolute 3xl:top-20
                    2xl:top-14 h-36 w-[590px] bg-purple-900 rounded-[60px] '
        >   
        <div
         class=
        'flex absolute top-8 rounded-xl text-white w-fit h-fit justify-center'
        >
        <a 
          target="_blank" rel="noreferrer" href="https://berkinkinay.dev/"
          class='hover:underline hover:decoration-slate-200 text-white 3x:text-xl
                 2xl:text-base font-semibold'
          > 
            berkinkinay.dev
            </a> 
          </div>
        <div 
         class=
         'flex absolute bg-purple-400 text-slate-900 font-normal rounded-md w-fit h-fit mt-10 t-3xl:text-lg 2xl:text-base'
          >
            <Typewrite 
              onInit=
              {(typewriter) => { 
              typewriter
              .pauseFor(2000)
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
        'flex h-80 w-96 drop-shadow-xl rounded-xl mt-4 items-center justify-center'>
          <p 
           class=
          'flex text-center justify-center 2xl:text-base my-10 mx-10 text-white'
          > 
           This is my developer workspace project.  When I code some objects or
           new features, this will be in the project and also there are going to
           be some UI designs, UX stuff, CSS animations and focusing to writing JavaScript
           here that I coded all things.
          </p>
            <div className='App'>
              <div class="flex w-full bg-white">
                <div class='flex absolute top-[300px] h-fit w-fit bg-sky-600 rounded-full items-center justify-center 3xl:right-[173px]'
                  >   
                    <FaConnectdevelop size='2em' color='black' className='App-logo' />        
                </div>
              </div>
            </div> 
      </div>
      <div 
       class=
      'flex absolute bottom-36 2xl:bottom-16 items-center justify-center bg-slate-200 w-fit h-12 shadow-md drop-shadow-3xl'
      >
        <span class='absolute inline-flex h-full w-full rounded-full bg-sky-100 opacity-75 mr-10'>
        <button 
         class=
        'w-fit h-fit relative inline-flex rounded-full bg-sky-400'
        >
          <a href='#hello'>
            <BiDownArrow class='animate-bounce' size='2.5em' color='purple'/>
          </a>
        </button>
        </span>
      </div>
    </div>
  </div>
</Animatedpages>
 )
}