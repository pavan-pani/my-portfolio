import React from 'react'
import Html from '../images/html.png'
import Css from '../images/css.jpg'
import Nodejs from '../images/nodejs.png'
import Reactlogo from '../images/raect.png'
import Tailwendcss from '../images/tailwendcss.png'
import Reduxlogo from '../images/redux.png'
import Router from '../images/router.png'
import Java from '../images/java.png'
import Python from '../images/python.png'
import Aws from '../images/aws.png'
import Api from '../images/api.jpg'
import Bootstarp from '../images/bootstrap.png'
// import Aws from '../images/aws.png'
// import Aws from '../images/aws.png'




const skills = () => {
  return (
    <div className='min-h-screen bg-black'>
    <div className='text-3xl lg:p-8 lg:text-6xl md:text-5xl p-4 text-pink-600 text-center'>Technical Skills</div>
        <div className='flex flex-row flex-wrap lg:flex-row justify-center  sm:justify-center border-t-4 border-x-2 border-b-2 rounded-xl border-pink-600 lg:mx-6 md:mx-4'>
            <div className='w-24 lg:w-40 md:w-32 bg-slate-400  mx-3 my-5 shadow-md shadow-white  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Html}
                ></img>
            </div>
            <div className='w-24 lg:w-40 md:w-32 bg-slate-400  mx-3 my-5 shadow-md shadow-white  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Css}
                ></img>
            </div>
            <div className='w-24 lg:w-40 md:w-32 bg-slate-400  mx-3 my-5 shadow-md shadow-white  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Tailwendcss}
                className='w-60 '></img>
            </div>
            <div className='w-24 lg:w-40 md:w-32 bg-slate-400  mx-3 my-5 shadow-md shadow-white  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Bootstarp}
                className='w-60 '></img>
            </div>
            <div className='w-24 lg:w-40 md:w-32 bg-slate-400 mx-3 my-5 shadow-md shadow-white  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Reactlogo}
                className='w-60 '></img>
            </div>
            <div className='w-24 lg:w-40 md:w-32 bg-slate-400  mx-3 my-5 shadow-md shadow-white  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Reduxlogo}
                className='w-60 '></img>
            </div>
            <div className='w-24 lg:w-40 md:w-32 bg-slate-400  mx-3 my-5 shadow-md shadow-white  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Router}
                className='w-60 '></img>
            </div>
            <div className='w-24 lg:w-40 md:w-32 bg-slate-400  mx-3 my-5 shadow-md shadow-white  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Nodejs}
                className='w-60 '></img>
            </div>
            <div className='w-24 lg:w-40 md:w-32 bg-slate-400  mx-3 my-5 shadow-md shadow-white  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Aws}
                className='w-60 '></img>
            </div>
            <div className='w-24 lg:w-40 md:w-32 bg-slate-400  mx-3 my-5 shadow-md shadow-white  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Api}
                className='w-60 '></img>
            </div>
            <div className='w-24 lg:w-40 md:w-32 bg-white-400  mx-3 my-5 shadow-md shadow-white  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Java}
                className='w-60 '></img>
            </div>
            <div className='w-24 lg:w-40 md:w-32  mx-3 my-5 shadow-md shadow-white  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Python}
                className='w-60 '></img>
            </div>

        </div>
    </div>
  )
}

export default skills