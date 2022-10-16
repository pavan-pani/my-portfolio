import React from 'react'
import Test from './test'

function navbar() {
  return (
    <div>
    
        <header className='fixed w-full flex flex-row justify-between items-center px-4 md:px-20 bg-white'>
        <a href='#'> Pavan Portfolio

        </a>
        <nav>
        


            <div className='hidden w-full lg:block md:w-auto'>
                <ul className='flex flex-col lg:flex-row px-4 space-x-20'>
                    <li>
                        <a href='#' className='text-black'>Home</a>
                    </li>
                    <li>
                        <a href='#'  className='text-black'>Skills</a>
                    </li>
                    <li>
                        <a href='#'  className='text-black'>background</a>
                    </li>
                    <li>
                        <a href='#'  className='text-black'>About Me</a>
                    </li>
                    <li>
                        <a href='#'  className='text-black'>Contact</a>
                    </li>
                 </ul>
            </div>
            
        </nav>
        


        </header>
    </div>
  )
}

export default navbar