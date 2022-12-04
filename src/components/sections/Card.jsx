  import React from 'react'
  //OBJECT
  import { CardUI } from '../objects/CardUI'

  export const Card = () => {
  return (

  <div className='text' id='card'>
    <div class='flex w-full h-screen'>
      <div 
       class=
      'flex absolute w-full h-screen text-white items-center justify-center'
      >  
          <p class='flex absolute top-10 text-xl text-gray-400'>UI Card Design</p> 
        <div 
           class=
           'flex absolute h-[530px] w-[1000px] rounded-xl items-center justify-center'
          >
            <div
             class=
             'grid grid-cols-2 h-screen w-full items-center justify-center'
            >
                  <div 
                   class=
                  'flex absolute left-36 items-center justify-center h-fit w-72 rounded-xl drop-shadow-xl'>
                  <p
                   class=
                  'flex my-2 mx-4 text-center text-white'
                  >
                      This is a example for UI Sign in card.
                    </p>
                </div>
              <div
              class=
              'flex items-center justify-center h-[390px] w-[420px] absolute rounded-2xl 2xl:right-[90px] 3xl:right-[60px] 3xl:top-[60px] 2xl:top-[59px]'
              > 
                  <CardUI/>
              </div>
           </div>
         </div>
      </div>
    </div>
  </div>
    )
  }