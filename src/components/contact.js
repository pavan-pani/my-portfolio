import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import Getintouch from '../images/contact.jpg'

const Contact = () => {
    const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5zf9kcc', 'template_jvjef3g', form.current, 'nqU6a3msYgpcPxR8g')
      .then((result) => {
        alert("Hi, it's me Pavan... \nI recived your message. Thanks for visiting..")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
//   const clickahndel=()=>{
    
//     alert("I recived your message. Thanks for visiting..")
//   }

  return (
    <div className='min-h-screen bg-white text-white' id='Contacts'>
       <div className='flex flex-col flex-grow lg:flex-row md:flex-row justify-center pt-4 lg:pt-11'>
            <div className='w-0 items-center lg:w-auto p-0 lg:pt-20 lg:mr-20 md:w-96 md:pt-36 invisible lg:visible md:visible'>
            <img src={Getintouch} ></img>
                {/* <h1 className='font-bold text-pink-600 justify-center text-3xl p-4 lg:py-48 lg:mr-28 lg:text-start'>Get in touch with me </h1> */}
            </div>
       <div>

                    <div className="mx-auto mt-14 md:mt-[45px] px-4 lg:px-0 w-full lg:w-96 max-w-auto ">
                        <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label 
                            // for="name" 
                            className="mb-3 block text-base font-medium text-[#e351c1]"
                            >  Full Name</label>
                            <input type="text"  required name="name" id="name" placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#e351c1] outline-none focus:border-[#e351c1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                            // for="email"
                            className="mb-3 block text-base font-medium text-[#e351c1]"
                            >
                            Email Address
                            </label>
                            <input
                            type="email" required
                            name="email"
                            id="email"
                            placeholder="example@gamil.com"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#ff36e1] outline-none focus:border-[#e351c1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-3">
                            <label 
                            // for="subject"
                             className="mb-3 block text-base font-medium text-[#e351c1]"> Subject </label>
                            <input
                            type="text" required
                            name="subject"
                            id="subject"
                            placeholder="Enter your subject"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#ff36e1] outline-none focus:border-[#e351c1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                            // for="message"
                            className="mb-3 block text-base font-medium text-[#e351c1]"
                            >
                            Message
                            </label>
                            <textarea
                            rows="4"
                            name="message" required
                            id="message"
                            placeholder="Type your message"
                            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#ff36e1] outline-none focus:border-[#e351c1] focus:shadow-md"
                            ></textarea>
                        </div>
                        <div>
                            <button 
                            className="hover:bg-pink-700 rounded-md bg-[#e351c1] py-3 px-8 text-base font-semibold text-white outline-none" value="send"
                            >
                            Send
                            </button>
                        </div>
                        </form>
                    </div>
            
       </div>
       </div>
    </div>
  )
}

export default Contact