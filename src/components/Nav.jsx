import React from 'react'
import { Link } from 'react-scroll'

const SideBar = () => {
  return (

    <div class="text">
      <div class="main">
        <div class="container">
            <nav class="nav-container-active">
                <ul class="title">
                    <li class="hover:underline">
                        <Link activeClass="active" spy to="introduction">
                             Introduction
                         </Link>
                    </li>
                    <li class="hover:underline">
                        <Link activeClass="active" spy to="hello"> 
                             Hover Animation
                         </Link>
                    </li>
                    <li class="hover:underline">
                        <Link activeClass="active" spy to="click">
                            Click
                        </Link>
                    </li>
                    <li class="hover:underline">
                        <Link activeClass="active" spy to="card">
                            UI Card
                         </Link>
                    </li>
                    <li class="hover:underline">
                        <Link activeClass="active" spy to="animations">
                            Loader Animations
                        </Link>
                    </li>
                    <li class="hover:underline">
                        <Link activeClass="active" spy to="">
                            More Stuff Coming soon...
                        </Link>
                    </li>
                </ul>
                <a 
                 href="https://github.com/berkinkinay/Developer-Workspace"
                 target= "_blank" rel="noreferrer"
                 class="flex h-fit w-64 text-white text-center items-center
                        justify-center absolute right-2 bottom-0 text-xs hover:text-purple-500"
                 >
                   Last updated -version 2.0
                </a>
            </nav>
        </div>
      </div>
    </div>
  )
}

export default SideBar;