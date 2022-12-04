import React from 'react'
import Me from '../assets/aynen.png'

const Footer = () => {
  return (

<div class="text" id="more">
  <div class="flex absolute w-full h-56"> 

        <div
         class=
         "flex h-56 w-full absolute bottom-0 items-center justify-center bg-gray-800"
         > 
           <a
            href="https://github.com/berkinkinay/3D-Earth"
            target= "_blank" rel="noreferrer" 
            class="flex absolute w-fit h-fit mr-[720px] bottom-16 text-sm text-purple-300"
            >
                Click here to review my recently project 💻🥰💫
           </a>
            <div class="flex flex-col absolute gap-5 items-center justify-center text-purple-300">
                  <img class='h-24 w-24 rounded-full drop-shadow-2xl shadow-white' src={Me} alt='' /> 
                  <p class="flex 3xl:text-base 2xl:text-xs"> ©2022 Berkin Kınay. All Rights Reserved. </p>
                  <p class="flex 3xl:text-base 2xl:text-xs"> All source codes related to this project can be found on my github account. </p>
            </div>
            <div 
             class="flex flex-col gap-5 absolute right-48 bg-black drop-shadow-xl rounded-[60px] w-56 h-48 text-white items-center"
            >
               <p class="flex mt-5 3xl:text-base 2xl:text-sm font-bold underline"> Links </p>
               <a 
                  href="https://github.com/berkinkinay" 
                  target= "_blank"
                  rel="noreferrer" 
                  class="flex 3xl:text-base 2xl:text-sm hover:text-purple-700 hover:font-bold"
                >
                   Github 
                </a>
               <a 
                  href="https://dev.to/berkinkinay" 
                  target= "_blank"
                  rel="noreferrer" 
                  class="flex 3xl:text-base 2xl:text-sm hover:font-bold hover:text-purple-700"
                > 
                  Dev.to 
                </a>
               <a 
                 href="https://berkinkinay.dev/" 
                 target= "_blank"
                 rel="noreferrer" 
                 class="flex 3xl:text-base 2xl:text-sm hover:font-bold hover:text-purple-700"
                >
                   berkinkinay.dev
                 </a>
            </div>
        </div>
    </div>
</div>
  )
}
export default Footer;