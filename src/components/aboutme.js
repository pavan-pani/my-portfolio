import React from 'react'
import FoodApi from '../images/foodapi.jpg'
import Restorent from '../images/restorent.jpg'


const aboutme = () => {
  return (
    <div id='About Me'>
      <div className='min-h-screen bg-white pt-20 md:pt-24'>
        <div className='flex md:flex-row flex-col items-start justify-center  '>
        <div className='basis-1/2 '>
            <div className=' w-[280px] border-[2px] rounded-xl  border-yellow-300  space-y-6 shadow-2xl p-2'>
              <div className=' text-center text-4xl text-blue-500 '>Personal Info</div>
                  <div className=' space-y-3'>
                    <div className='flex space-x-2'>
                      <div><img srcset="https://img.icons8.com/office/344/user.png 2x" alt="icon" className='w-9'/></div>
                      <div className='inline-block align-text-bottom pt-2'>Goudara Pavan Kumar</div>
                    </div>
                    <div className='flex space-x-2'>
                      <div><img srcset="https://img.icons8.com/nolan/344/marker.png 2x" className='w-10'/></div>
                      <div className='w-[250px] text-sm'>110, Thumbiganuru(v), Kanekal(T), anathpuram(D), AP 515871</div>
                    </div>
                    <div className='flex space-x-2'>
                      <div><img srcset="https://img.icons8.com/nolan/344/apple-phone.png 2x" alt="icon"  className='w-10'/></div>
                      <div className='pt-1 md:pt-2 md:text-sm'>+91  74060 36963</div>
                    </div>
                </div>
                  
                <div className=' flex space-x-5 justify-center'>
                  <a href='https://github.com/pavan-pani'> <img srcset="https://img.icons8.com/nolan/344/git.png 2x" alt="icon" className='w-12 hover:shadow-xl' /></a>
                  <a href='https://www.linkedin.com/in/g-pavan-kumar-2957181b5/'><img srcset="https://img.icons8.com/nolan/344/linkedin-circled.png 2x" alt="icon" className='w-12'/></a>
                  <a href='https://instagram.com/__pavan.pani__?igshid=YmMyMTA2M2Y='><img srcset="https://img.icons8.com/nolan/344/instagram-new.png 2x" alt="icon" className='w-12'/></a>
                </div>
            </div>
            </div>

            <div className='p-2 justify-around'>
              <div className='text-2xl md:text-5xl'>My works</div>
                <div className='flex flex-wrap gap-3 md:gap-6 '>
                  <div className='w-[160px] md:w-[200px]  rounded-xl  justify-center shadow-lg border-b-2  border-yellow-300'>
                    <img src={FoodApi} className='p-0 rounded-t-lg'/>
                    <div className='inline-block rounded-b-lg space-y-2 h-[120px]'>
                      <h1 className='px-1 font-semibold text-center'>Food items Api </h1>
                      <h1 className='px-3 text-xs text-center pb-2'>DynamoDB, API Gateway, AWS lambda, PostMan</h1>
                      <a className=' px-16 md:px-20 text-sm text-center' href=''>  <img srcset="https://img.icons8.com/nolan/344/link.png 2x" className='w-6 inline'/></a>
                    </div>
                  </div>
                  <div className='w-[160px] md:w-[200px]  rounded-xl  justify-center shadow-lg border-b-2  border-yellow-300'>
                    <img src={Restorent} className='p-0 rounded-t-lg'/>
                    <div className='inline-block rounded-b-lg space-y-3 h-[120px]'>
                      <h1 className='px-1 font-semibold text-center'>Restaurant App</h1>
                      <h1 className='px-3 text-xs text-center pb-2'>HTML, Tailwend CSS, ReactJS(v18.6), Hooks, Redux-Toolkit, custome API, Router-Dom</h1>                   
                      <a className=' px-16 md:px-20 text-sm text-center' href=''>  <img srcset="https://img.icons8.com/nolan/344/link.png 2x" className='w-6 inline'/></a>                      
                    </div>
                  </div>

                  <div className='w-[160px] md:w-[200px]  rounded-xl  justify-center shadow-lg border-b-2  border-yellow-300'>
                    <img src={Restorent} className='p-0 rounded-t-lg'/>
                    <div className='inline-block rounded-b-lg space-y-3 h-[120px]'>
                      <h1 className='px-1 font-semibold text-center'>Restaurant App</h1>
                      <h1 className='px-3 text-xs text-center pb-2'>HTML, Tailwend CSS, ReactJS(v18.6), Hooks, Redux-Toolkit, custome API, Router-Dom</h1>                   
                      <a className=' px-16 md:px-20 text-sm text-center' href=''>  <img srcset="https://img.icons8.com/nolan/344/link.png 2x" className='w-6 inline'/></a>                      
                    </div>
                  </div>
                  <div className='w-[160px] md:w-[200px]  rounded-xl  justify-center shadow-lg border-b-2  border-yellow-300'>
                    <img src={Restorent} className='p-0 rounded-t-lg'/>
                    <div className='inline-block rounded-b-lg space-y-3 h-[120px]'>
                      <h1 className='px-1 font-semibold text-center'>Restaurant App</h1>
                      <h1 className='px-3 text-xs text-center pb-2'>HTML, Tailwend CSS, ReactJS(v18.6), Hooks, Redux-Toolkit, custome API, Router-Dom</h1>                   
                      <a className=' px-16 md:px-20 text-sm text-center' href=''>  <img srcset="https://img.icons8.com/nolan/344/link.png 2x" className='w-6 inline'/></a>                      
                    </div>
                  </div>
                  <div className='w-[160px] md:w-[200px]  rounded-xl  justify-center shadow-lg border-b-2  border-yellow-300'>
                    <img src={Restorent} className='p-0 rounded-t-lg'/>
                    <div className='inline-block rounded-b-lg space-y-3 h-[120px]'>
                      <h1 className='px-1 font-semibold text-center'>Restaurant App</h1>
                      <h1 className='px-3 text-xs text-center pb-2'>HTML, Tailwend CSS, ReactJS(v18.6), Hooks, Redux-Toolkit, custome API, Router-Dom</h1>                   
                      <a className=' px-16 md:px-20 text-sm text-center' href=''>  <img srcset="https://img.icons8.com/nolan/344/link.png 2x" className='w-6 inline'/></a>                      
                    </div>
                  </div>
                  <div className='w-[160px] md:w-[200px]  rounded-xl  justify-center shadow-lg border-b-2  border-yellow-300'>
                    <img src={Restorent} className='p-0 rounded-t-lg'/>
                    <div className='inline-block rounded-b-lg space-y-3 h-[120px]'>
                      <h1 className='px-1 font-semibold text-center'>Restaurant App</h1>
                      <h1 className='px-3 text-xs text-center pb-2'>HTML, Tailwend CSS, ReactJS(v18.6), Hooks, Redux-Toolkit, custome API, Router-Dom</h1>                   
                      <a className=' px-16 md:px-20 text-sm text-center' href=''>  <img srcset="https://img.icons8.com/nolan/344/link.png 2x" className='w-6 inline'/></a>                      
                    </div>
                  </div>

                </div>  
            </div>


          </div>
      </div>
    </div>
  )
}

export default aboutme