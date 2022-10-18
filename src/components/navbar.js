import { useState } from "react";


 const NavBar = () =>{
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="fixed w-full  shadow bg-[#e24bc9cc]">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="#">
                            <h2 className="text-2xl">Pavan Portfolio</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-white-700 rounded-md outline-none"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center text-center pb-3 mt-2 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
                            <li className="text-white  hover:text-black">
                                <a href="#">Home</a>
                            </li>
                            <li className="text-white  hover:text-black">
                                <a href="#Skills">Skills</a>
                            </li>
                            <li className="text-white hover:text-black">
                                <a href="#BackgroundDitails">Background</a>
                            </li>
                            <li className="text-white hover:text-black">
                                <a href="#About Me">About Me</a>
                            </li>
                            <li className="text-white hover:text-black">
                                <a  href="#Contacts">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}



export default NavBar








// import React, { useState } from 'react'

// const Navbar = () => {
//     const [showMenu, setShowMenu]=useState(false);
//   return (
//     <div>
//         <header className='fixed  w-full flex  justify-between items-center px-4 md:px-12 h-16 bg-pink-300'>
//             <a href='#'> Pavan Portfolio</a>
//         <nav>
//             <button className='md:hidden' onClick={()=>setShowMenu(!showMenu)} >
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
//                     <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                 </svg>
//             </button>
//             <div className={showMenu ? 'flex flex-row it' : 'hidden'}>
//                 <ul className= 'fixed left-0 right-0 min-h-screen space-y-4 p-4 transform translate-x-full md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-16 md:p-0 md:translate-x-0'>
//                     <li>
//                         <a href='#' className='text-white'>Home</a>
//                     </li>
//                     <li>
//                         <a href='#'  className='text-white'>Skills</a>
//                     </li>
//                     <li>
//                         <a href='#'  className='text-white'>background</a>
//                     </li>
//                     <li>
//                         <a href='#'  className='text-white'>About Me</a>
//                     </li>
//                     <li>
//                         <a href='#'  className='text-white'>Contact</a>
//                     </li>
//                  </ul>   
//             </div>
                   
//         </nav>
//     </header>
//     </div>
//   )
// }

// export default Navbar