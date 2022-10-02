import React from 'react'
import Myphoto from '../images/myphoto.jpg'

const frontpage = () => {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('G Pavan_Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'pavan_Resume.pdf';
            alink.click();
        })
    })
}
  return (
    <div className='min-h-screen bg-black'>
        <div className='grid grid-cols-1 sm:grid-cols-2 '>
            <div className="justify-end p-10 lg:m-20 lg:pl-32 rounded-full">
                <img src={Myphoto} alt='thsi is my iamge' 
                className="rounded-full "
                ></img>
            </div>
                <div className='justify-center lg:py-56 text-start mx-6 lg:ml-0 md:py-32 font-kalam'>
                    <h1 className="text-white text-sm lg:text-lg">Hi, There...</h1>
                    <h1 className="text-white text-5xl lg:text-7xl mt-2">I Am Pavan</h1>
                    <h1 className=" text-pink-600 text-lg lg:text-2xl mt-1">Software Engneer</h1>
                    <h1 className=" text-gray-400 text-xl lg:text-3xl mt-2 ">
                    I am very Happy and glad to see you here, Let's checkout my persanal portfolio</h1>
                    <button className='outline-dotted outline-2 outline-pink-600 text-gray-300 hover:text-black  text-2xl py-2 px-4 rounded-lg inline-flex items-center mt-3 hover:bg-pink-600' onClick={onButtonClick}>Resume
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                   
                </div>   
        </div>
    </div>
   
  )
}

export default frontpage