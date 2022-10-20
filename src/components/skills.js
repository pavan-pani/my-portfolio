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
    <div className='pb-12 md:min-h-screen bg-green-200 font-kalam  ' id='Skills'>
    <div className='text-3xl pt-20 lg:pt-24 lg:p-3 lg:text-6xl md:text-5xl pt-4 text-pink-500 text-center font-semibold '>Technical Skills</div>
        <div className='flex flex-row flex-wrap bg-white lg:flex-row justify-center  sm:justify-center border-t-8 border-x-4 border-b-2 mx-2 rounded-xl border-pink-400 lg:mx-10 md:mx-4 pb-2 lg:py-14'>
            <div className=' w-14 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Html} alt="HTML image" title="5/5"
                ></img>
            </div>
            <div className='w-14 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Css} alt="CSS image" title="5/5"
                ></img>
            </div>
            <div className='w-14 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Tailwendcss} alt="Tailwend CSS image" title="4.5/5"
                className='w-60 '></img>
            </div>
            <div className='w-14 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Bootstarp}alt="Bootstrap image" title="4.5/5"
                className='w-60 '></img>
            </div>
            <div className='w-14 lg:w-32 md:w-28 bg-slate-400 mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Reactlogo}  alt="RacatJS image" title="4.5/5"
                className='w-60 '></img>
            </div>
            <div className='w-14 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Reduxlogo} alt="Redux image" title="5/5"
                className='w-60 '></img>
            </div>
            <div className='w-14 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Router} alt="Router image" title="5/5"
                className='w-60 '></img>
            </div>
            <div className='w-14 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Nodejs} alt="Nodejs image" title="4/5"
                className='w-60 '></img>
            </div>
            <div className='w-14 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Mangodb} alt="MangoDB image" title="4/5"
                className='w-60 '></img>
            </div>
            <div className='w-14 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Sql} alt="SQL image" title="4.5/5"
                className='w-60 '></img>
            </div>
            <div className='w-14 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Aws} alt="AWS image" title="Serverless, dynamoDB, S3"
                className='w-60 '></img>
            </div>
            <div className='w-14 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Api} alt="API image" title="Creating & Integrating"
                className='w-60 '></img>
            </div>
            <div className='w-14 lg:w-32 md:w-28 bg-slate-400  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Git} alt="GIT image" title="4/5"
                className='w-60 '></img>
            </div>
            <div className='w-14 lg:w-32 md:w-28 bg-white  mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Java} alt="JAVA image" title="4/5"
                className='w-60 '></img>
            </div>
            <div className='w-14 lg:w-32 md:w-28 bg-white mx-3 my-5 shadow-md  hover:shadow-lg hover:shadow-pink-400'> 
                <img src={Python} alt="Python image" title="4/5"
                className='w-60 '></img>
            </div>

        </div>
    </div>
  )
}

export default skills