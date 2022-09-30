import React from 'react'
import Myphoto from '../images/myphoto.jpg'

const frontpage = () => {
  return (
    <div className='min-h-screen bg-black'>
        <div className='grid grid-cols-1 sm:grid-cols-2 '>
            <div className=" justify-end p-10 lg:m-20 lg:pl-32 ">
                <img src={Myphoto} alt='thsi is my iamge' 
                className="rounded-full "
                ></img>
            </div>
                <div className='justify-center lg:py-56 text-start ml-5 lg:ml-0'>
                    <h1 className="text-white text-sm lg:text-lg">Hi, There...</h1>
                    <h1 className="text-white text-5xl lg:text-7xl">I Am Pavan</h1>
                    <h1 className=" text-pink-600 text-lg lg:text-2xl mt-2">Software Engneer</h1>
                    <h1 className=" text-white text-xl lg:text-3xl mt-2">
                    Happy very glad to see you here, Let's checkout my persanal portfolio
                    </h1>
                </div>   
        </div>
    </div>
   
  )
}

export default frontpage