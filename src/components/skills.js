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
import Sql from '../images/sql.png'
import Git from '../images/git.png'
import Mangodb from '../images/mangodb.jpg'




const skills = () => {
  return (
    <div className='min-h-screen bg-gray-200 font-kalam'>
    <div className='text-3xl lg:pt-14 lg:p-3 lg:text-6xl md:text-5xl pt-4 text-pink-500 text-center font-semibold'>Technical Skills</div>
        <div className='flex flex-row flex-wrap lg:flex-row justify-center  sm:justify-center border-t-8 border-x-2 border-b-2 mx-4 rounded-xl border-pink-300 lg:mx-6 md:mx-4 pb-2 lg:py-14'>
            <div className=' w-20 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Html}
                ></img>
            </div>
            <div className='w-20 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Css}
                ></img>
            </div>
            <div className='w-20 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Tailwendcss}
                className='w-60 '></img>
            </div>
            <div className='w-20 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Bootstarp}
                className='w-60 '></img>
            </div>
            <div className='w-20 lg:w-32 md:w-28 bg-slate-400 mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Reactlogo}
                className='w-60 '></img>
            </div>
            <div className='w-20 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Reduxlogo}
                className='w-60 '></img>
            </div>
            <div className='w-20 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Router}
                className='w-60 '></img>
            </div>
            <div className='w-20 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Nodejs}
                className='w-60 '></img>
            </div>
            <div className='w-20 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Mangodb}
                className='w-60 '></img>
            </div>
            <div className='w-20 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Sql}
                className='w-60 '></img>
            </div>
            <div className='w-20 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Aws}
                className='w-60 '></img>
            </div>
            <div className='w-20 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Api}
                className='w-60 '></img>
            </div>
            <div className='w-20 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Git}
                className='w-60 '></img>
            </div>
            <div className='w-20 lg:w-32 md:w-28 bg-white  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Java}
                className='w-60 '></img>
            </div>
            <div className='w-20 lg:w-32 md:w-28 bg-white mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Python}
                className='w-60 '></img>
            </div>

        </div>
    </div>
  )
}

export default skills